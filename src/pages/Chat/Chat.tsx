import styled from 'styled-components';
import ChatRoom from '../../components/chat/ChatRoom';
import ChatRoomDetail from '../../components/chat/ChatRoomDetail';
import React, { useState } from 'react';
import { ChatRoomProps } from '../../types/chat.type';

const chatRooms: ChatRoomProps[] = [
  {
    id: 1,
    nickname: '가나다',
    itemTitle: '에어팟',
    timeAgo: '1시간 전',
    profileImage: undefined,
    isRead: false,
  },
  {
    id: 2,
    nickname: '마바사',
    itemTitle: '책상',
    timeAgo: '2시간 전',
    profileImage: undefined,
    isRead: true,
  },
  {
    id: 3,
    nickname: '아자차',
    itemTitle: '신발',
    timeAgo: '3시간 전',
    profileImage: undefined,
    isRead: true,
  },
];

function Chat() {
  const [selectedRoom, setSelectedRoom] = useState<ChatRoomProps | null>(null);

  const handleSelectRoom = (room: ChatRoomProps) => {
    setSelectedRoom(room);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = e.target as HTMLElement;

    if (
      clickedElement.closest('.chat_room_list') ||
      clickedElement.closest('.chat_room_detail')
    ) {
      return;
    }

    setSelectedRoom(null);
  };

  return (
    <ChatStyle onClick={handleClickOutside}>
      <div className="chat_left">
        <div className="chat_room_list">
          <ChatRoom
            rooms={chatRooms}
            onSelect={handleSelectRoom}
            selectedRoomId={selectedRoom?.id ?? null}
          />
        </div>
      </div>
      <div className="chat_room_detail">
        <ChatRoomDetail room={selectedRoom} />
      </div>
    </ChatStyle>
  );
}

const ChatStyle = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 1200px; */
  height: 100vh;
  margin-top: 60px;

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
