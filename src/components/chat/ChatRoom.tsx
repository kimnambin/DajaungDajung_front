import styled from 'styled-components';
import defaultProfile from '../../assets/default_profile.svg';
import { ChatRoomProps } from '../../types/chat.type';

interface Props {
  rooms: ChatRoomProps[];
  onSelect: (room: ChatRoomProps) => void;
  selectedRoomId: number | null;
}

function ChatRoom({ rooms, onSelect, selectedRoomId }: Props) {
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
              src={room.profileImage || defaultProfile}
              width={50}
              style={{ borderRadius: '100px' }}
            />
            <div className="cahtRoom_txt">
              <p className="chatRoom_nickname">{room.nickname}</p>
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <p className="chatRoom_subtxt">
                  {room.itemTitle} - {room.timeAgo}
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
  padding: 14px 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: auto;
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
