import styled from 'styled-components';
import ChatRoom from '../../components/chat/ChatRoom';
import ChatRoomDetail from '../../components/chat/ChatRoomDetail';
import React, { JSX, useEffect, useRef, useState } from 'react';
import { ChatRoom as ChatRoomProps } from '../../types/chat.type';
import { AiOutlineWarning } from 'react-icons/ai';
import { io, Socket } from 'socket.io-client';
import { authRequest } from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Chat(): JSX.Element {
  const [chatRooms, setChatRooms] = useState<ChatRoomProps[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<ChatRoomProps | null>(null);

  const navigate = useNavigate();

  const handleSelectRoom = (room: ChatRoomProps): void => {
    setSelectedRoom(room);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>): void => {
    const clickedElement = e.target as HTMLElement;

    if (
      clickedElement.closest('.chat_room_list') ||
      clickedElement.closest('.chat_room_detail')
    ) {
      return;
    }

    setSelectedRoom(null);
  };

  const fetchChatRooms = async () => {
    try {
      const data = await authRequest({
        method: 'GET',
        url: '/chats',
        data: {},
        navigate,
      });

      const parsed: ChatRoomProps[] = data.map((room: any) => ({
        roomId: room.room_id,
        user1Id: room.user1_id,
        user2Id: room.user2_id,
        itemId: room.item_id,
        lastMessage: room.last_message,
        updatedAt: room.updated_at,
        userId: room.user_id,
        nickname: room.nickname,
        imgId: room.img_id,
        unreadCount: Number(room.unread_count),
      }));

      setChatRooms(parsed);
    } catch (error) {
      console.error('채팅방 목록 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  // socket
  const [connectionError, setConnectionError] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_BACK_URL, {
      withCredentials: true,
      transports: ['websocket'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('소켓 연결됨:', socket.id);
      setConnectionError(false);
    });

    socket.on('connect_error', (err) => {
      console.log('소켓 연결 에러:', err.message);
      setConnectionError(true);
    });

    socket.on('reconnect_attempt', (attempt) => {
      console.log(`재접속 시도 #${attempt}`);
    });

    socket.on('reconnect_failed', () => {
      console.log('재접속 실패: 최대 시도 초과');
      alert('서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.');
      setConnectionError(true);
    });

    socket.on('disconnect', (reason) => {
      console.log('연결 끊김:', reason);
      if (reason === 'io server disconnect') {
        // 서버가 연결을 끊은 경우, 수동 재연결 필요
        socket.connect();
      }
    });
  }, []);

  return (
    <ChatStyle onClick={handleClickOutside}>
      {connectionError && (
        <div className="connection_error">
          <AiOutlineWarning
            size={24}
            style={{ marginRight: 8, color: '#be5985' }}
          />
          <div>
            서버에 연결할 수 없습니다.
            <br />
            인터넷 연결 또는 서버 상태를 확인해주세요.
          </div>
        </div>
      )}
      {!connectionError && (
        <>
          <div className="chat_left">
            <div className="chat_room_list">
              <ChatRoom
                rooms={chatRooms}
                onSelect={handleSelectRoom}
                selectedRoomId={selectedRoom?.roomId ?? null}
              />
            </div>
          </div>
          <div className="chat_room_detail">
            <ChatRoomDetail room={selectedRoom} socket={socketRef.current} />
          </div>
        </>
      )}
    </ChatStyle>
  );
}

const ChatStyle = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px - 35px);
  margin-top: 60px;

  .connection_error {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-weight: 600;
    flex-direction: column;
    text-align: center;
  }

  .chat_left {
    width: 30%;
    min-width: 320px;
    max-width: 400px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    height: 100%;
  }

  .chat_room_detail {
    width: 100%;
    height: 100%;
  }
`;

export default Chat;
