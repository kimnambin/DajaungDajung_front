import { JSX, useState } from 'react';
import styled from 'styled-components';

function ChatInput(): JSX.Element {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) {
      return;
    }

    alert(`전송할 메시지 : ${message}`);
    setMessage('');
  };

  return (
    <ChatInputStyle>
      <textarea
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>전송</button>
    </ChatInputStyle>
  );
}

const ChatInputStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 16px;
  margin: 8px 20px;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  textarea {
    width: 100%;
    min-height: 60px;
    resize: none;
    padding: 16px 100px 16px 16px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    font-size: 16px;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
  }

  button {
    position: absolute;
    top: 28px;
    right: 28px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 10px;
    padding: 8px 24px;
    cursor: pointer;
    font-size: 14px;
  }
`;

export default ChatInput;
