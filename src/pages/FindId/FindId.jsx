import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindId.css';

const FindId = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    contact: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedContact = form.contact.replace(/[^0-9]/g, '');

    try {
      const res = await fetch('https://afe5-58-77-32-216.ngrok-free.app/auth/findid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: form.name,
          contact: sanitizedContact,
        }),
      });

      if (!res.ok) {
        throw new Error('서버 오류 또는 일치하는 정보 없음');
      }

      const data = await res.json();
      alert(`가입된 이메일은 다음과 같습니다:\n\n📧 ${data.email}`);
      navigate('/signin');

    } catch (error) {
      console.error('아이디 찾기 오류:', error);
      alert('일치하는 회원 정보가 없습니다.');
    }
  };

  return (
    <div className="findid-container">
      <h2 className="findid-title">아이디 찾기</h2>

      <form className="findid-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="findid-input"
          placeholder="이름"
          required
        />
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="findid-input"
          placeholder="전화번호 (- 없이 숫자만 입력)"
          required
        />
        <div className="findid-divider" />
        <button type="submit" className="button button--primary">아이디 찾기</button>
      </form>
    </div>
  );
};

export default FindId;
