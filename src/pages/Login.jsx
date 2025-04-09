import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('로그인 정보:', form);
    alert('로그인 요청이 준비되었습니다.');
    // 나중에 axios.post('/api/login', form) 연결 가능
  };

  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <button type="submit" className="button button--primary">로그인</button>
      </form>

      <div className="login-divider" />

      <div className="login-options">
        <button className="button button--primary" onClick={() => navigate('/signup')}>회원가입</button>
        <button className="button button--gray" onClick={() => navigate('/findid')}>아이디 찾기</button>
        <button className="button button--gray" onClick={() => navigate('/resetpwd')}>비밀번호 초기화</button>
      </div>
    </div>
  );
};

export default Login;
