import React from "react";
import "../css/Login.css"; // 여기에 CSS를 포함
import { images } from "../images/Images";

const Login = () => {
  return (
    <main className="login-container">
      <img src={images.main_logo} alt="logo" className="logo" />
      <img src={images.main_character} alt="Character" className="character" />

      <section className="social-login-container">
        <button className="naver-login-button" aria-label="Naver Login">
          <img src={images.naver_login} alt="Naver Login" />
        </button>
        <button className="kakao-login-button" aria-label="Kakao Login">
          <img src={images.kakao_login} alt="Kakao Login" />
        </button>
        <button className="google-login-button" aria-label="Google Login">
          <img src={images.google_login} alt="Google Login" />
        </button>
      </section>

      <nav className="button-container">
        <button className="login-button">이메일 회원가입</button>
        <span> | </span>
        <button className="login-button">이메일 로그인</button>
      </nav>
    </main>
  );
};

export default Login;
