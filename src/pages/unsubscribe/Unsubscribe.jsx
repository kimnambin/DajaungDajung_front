import { useNavigate } from 'react-router-dom'
import style from './Unsubscribe.module.css'
import { useState } from 'react';

export default function Unsubscribe() {
  const navigate = useNavigate();
  const [isOut, setIsOut] = useState(null)
  const signOffConfirm = () => {
    if (isOut) {
      alert("회원 탈퇴되었습니다.\n메인 화면으로 이동합니다.");
      navigate('/')
    } else {
      navigate(-1)
    }
  }
  return (
    <div className={style.unsubContainer}>
      <div>
        <h1>정말 탈퇴하시겠습니까?</h1>
        <p>탈퇴 버튼 선택 시 계정은 삭제되며 복구할 수 없습니다.</p>
        <div className={style.buttons}>
          <button type="submit" onMouseOver={() => setIsOut(true)} onClick={signOffConfirm} >탈퇴하기</button>
          <button type="button" onMouseOver={() => setIsOut(false)} onClick={signOffConfirm}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}
