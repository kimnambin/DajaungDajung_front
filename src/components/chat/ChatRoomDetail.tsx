import { ChatRoomProps } from "../../types/chat.type";

interface Props {
    room: ChatRoomProps | null;
}

function ChatRoomDetail({room}: Props) {
    if(!room) return <div>채팅방을 선택하세요.</div>
    return(
        <div>
            {room.nickname}
        </div>
    );
}

export default ChatRoomDetail;