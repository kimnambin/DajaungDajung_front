import styled from 'styled-components';
import defaultProfile from '../../assets/default_profile.svg';
import { ChatRoom as ChatRoomProps } from '../../types/chat.type';
import { JSX } from 'react';
import { getDaysAgo } from '../../utils/date';
import { getImgSrc } from '../../utils/image';

interface Props {
  rooms: ChatRoomProps[];
  onSelect: (room: ChatRoomProps) => void;
  selectedRoomId: number | null;
}

function ChatRoom({ rooms, onSelect, selectedRoomId }: Props): JSX.Element {
  return (
    <>
      {rooms.map((room) => (
        <ChatRoomStyle
          key={room.id}
          $isSelected={room.id === selectedRoomId}
          onClick={() => onSelect(room)}
        >
          <div className="chatRoom_content">
            <img
              src={getImgSrc(room.profileImageId) || defaultProfile}
              width={50}
              style={{ borderRadius: '100px' }}
            />
            <div className="cahtRoom_txt">
              <p className="chatRoom_nickname">{room.nickname}</p>
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <p className="chatRoom_subtxt">
                  {room.itemTitle} - {getDaysAgo(room.updatedAt)}
                </p>
                {!room.isRead && <div className="unread_icon" />}
              </div>
            </div>
          </div>
        </ChatRoomStyle>
      ))}
    </>
  );
}

const ChatRoomStyle = styled.div<{ $isSelected?: boolean }>`
  height: 72px;
  padding: 14px 28px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? '#FFEDFA' : 'white')};

  .chatRoom_content {
    display: flex;
    gap: 16px;
    align-items: center;

    .cahtRoom_txt {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .chatRoom_nickname {
        font-size: 18px;
      }

      .chatRoom_subtxt {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .unread_icon {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: #be5985;
  }
`;

export default ChatRoom;
