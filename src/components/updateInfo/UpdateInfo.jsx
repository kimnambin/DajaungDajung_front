import style from './UpdateInfo.module.css'
import profileImage from '../../assets/default_image.jpg';
import { useNavigate } from 'react-router-dom';


export default function UpdateInfo() {
  const navigate = useNavigate();
  const toMain = () => {
    navigate('/users/mypage');
  }
  return (
    <form className={style.updateInfoContainer}>
      <div className={style.imageBox}>
        <img src={profileImage} alt="" />
        <button type="file">업로드</button>
      </div>
      <div className={style.inputContainer}>
        <input type="text" name="name" placeholder='이름' />
        <input type="text" name="nickname" placeholder='닉네임' />
        <input type="email" name="email" placeholder='이메일' />
        <textarea name="user_description" placeholder='소개글'></textarea>
        <input type="tel" name="contact" placeholder='전화번호' />
        <input type="password" name="password" placeholder='비밀번호' />
        <input type="password" name="checkPassword" placeholder='비밀번호 확인' />
      </div>
      <hr />
      <div className={style.buttonContainer}>
        <button type="submit" onClick={toMain}>수정하기</button>
        <button type="reset">다시쓰기</button>
      </div>
    </form>
  )
}
