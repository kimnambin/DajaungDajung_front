import { JSX } from 'react';
import {
  ChatRoomDetail as ChatRoomDetailProps,
  ChatRoom as ChatRoomProps,
} from '../../types/chat.type';
import ChatItem from './ChatItem';
import styled from 'styled-components';
import ChatInput from './ChatInput';

const mockChatRoomDetail: ChatRoomDetailProps = {
  item: {
    id: 101,
    title: '에어팟',
    price: 85000,
    imageId: 1,
  },
  me: {
    id: 1,
    nickname: '나',
    profileImageId: 1,
  },
  other: {
    id: 2,
    nickname: '가나다',
    profileImageId: 100,
  },
  messages: [
    {
      id: 1,
      senderId: 2,
      content: '에어팟 아직 있나요?',
      createdAt: '2025-05-28 19:31:00',
    },
    {
      id: 2,
      senderId: 1,
      content: '네, 아직 판매 중입니다!',
      createdAt: '2025-05-28 19:32:10',
    },
    {
      id: 3,
      senderId: 2,
      content: '거래 장소는 어디가 괜찮으세요?',
      createdAt: '2025-05-28 19:33:55',
    },
  ],
};

interface Props {
  room: ChatRoomProps | null;
}

function ChatRoomDetail({ room }: Props): JSX.Element {
  if (!room) {
    return <div>채팅방을 선택하세요.</div>;
  }

  return (
    <ChatRoomDetailStyle>
      <ChatItem item={mockChatRoomDetail.item} />
      <div className="message_area">채팅메시지</div>
      <ChatInput />
    </ChatRoomDetailStyle>
  );
}

const ChatRoomDetailStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .message_area {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 100px;
  }
`;

export default ChatRoomDetail;
