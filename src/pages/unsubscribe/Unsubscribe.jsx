import style from './Unsubscribe.module.css'

export default function Unsubscribe() {
  return (
    <div className={style.unsubContainer}>
      <div>
        <h1>정말 탈퇴하시겠습니까?</h1>
        <p>탈퇴 버튼 선택 시 계정은 삭제되며 복구할 수 없습니다.</p>
        <div className={style.buttons}>
          <button type="submit">탈퇴하기</button>
          <button type="button">뒤로가기</button>
        </div>
      </div>
    </div>
  )
}
