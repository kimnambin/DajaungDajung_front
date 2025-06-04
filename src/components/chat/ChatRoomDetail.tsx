import { JSX, useEffect, useState } from 'react';
import {
  ChatItemInfo,
  ChatMessage as ChatMessageProps,
  ChatRoomDetail as ChatRoomDetailProps,
  ChatRoom as ChatRoomProps,
} from '../../types/chat.type';
import ChatItem from './ChatItem';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { formatDate } from '../../utils/format';
import { Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { authRequest } from '../../api/axiosInstance';

interface Props {
  room: ChatRoomProps | null;
  socket: Socket | null;
}

function ChatRoomDetail({ room, socket }: Props): JSX.Element {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [chatItem, setChatItem] = useState<ChatItemInfo | null>(null);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    if (!room) {
      return;
    }
    try {
      const data = await authRequest({
        method: 'GET',
        url: `/chats/${room.roomId}`,
        data: {},
        navigate,
      });
      setMessages(data.map(toCamelCase));

      if (data.length > 0) {
        const { item_id, item_title, item_price, item_img } = data[0];

        setChatItem({
          itemId: item_id,
          itemTitle: item_title,
          itemPrice: item_price,
          itemImg: item_img,
        });
      }
    } catch (error) {
      console.error('채팅 메시지 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    if (!socket || !room) {
      return;
    }

    // 방 입장
    socket.emit('joinRoom', room.roomId);
    // 읽음 처리
    socket.emit('markAsRead', {
      room_id: room.roomId,
      user_id: room.userId === room.user1Id ? room.user2Id : room.user1Id,
    });

    return () => {
      // 방 퇴장
      socket.emit('leaveRoom', room.roomId);
    };
  }, [socket, room]);

  useEffect(() => {
    fetchMessages();
  }, [room]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = (msg: ChatMessageProps) => {
      console.log('서버에서 받은 메시지:', msg);
      setMessages((prev) => [...prev, msg]);
    };

    socket.on('chat message', handleMessage);

    return () => {
      socket.off('chat message', handleMessage);
    };
  }, [socket]);

  const handleSend = async (content: string) => {
    if (!socket || !room) {
      return;
    }

    const newMessage = {
      room_id: room.roomId,
      sender_id: room.userId === room.user1Id ? room.user2Id : room.user1Id,
      receiver_id: room.userId,
      contents: content,
    };

    socket.emit('sendMessage', newMessage);

    await fetchMessages();
  };

  return (
    <ChatRoomDetailStyle>
      {room && (
        <>
          <div className="chat_item_area">
            {chatItem && <ChatItem item={chatItem} />}
          </div>
          <div className="message_area">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.contents}
                isMine={msg.senderId !== msg.opponentId}
                time={formatDate(msg.createdAt)}
                profileImage={
                  msg.senderId !== msg.opponentId
                    ? msg.opponentImg
                    : msg.opponentImg
                }
              />
            ))}
            <div className="chat_input_area">
              <ChatInput onSend={handleSend} />
            </div>
          </div>
        </>
      )}
    </ChatRoomDetailStyle>
  );
}

const ChatRoomDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  .chat_item_area {
    flex-shrink: 0;
  }

  .message_area {
    flex: 1;
    overflow-y: auto;
    height: 100%;
    min-height: 0;
    position: relative;
    z-index: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .chat_input_area {
    position: sticky;
    bottom: 0;
    background: transparent;
    z-index: 1;
  }
`;

export default ChatRoomDetail;

function toCamelCase(msg: any): ChatMessage {
  return {
    id: msg.id,
    roomId: msg.room_id,
    senderId: msg.sender_id,
    receiverId: msg.receiver_id,
    contents: msg.contents,
    createdAt: msg.created_at,
    isRead: msg.is_read,
    opponentId: msg.opponent_id,
    opponentNickname: msg.opponent_nickname,
    opponentImg: msg.opponent_img,
    itemId: msg.item_id,
    itemTitle: msg.item_title,
    itemPrice: msg.item_price,
    itemImg: msg.item_img,
  };
}
