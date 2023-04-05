import "./style.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import onChange from "../../function/onChange";
import isLogin from "../../function/login";

const Login = () => {
    const history = useHistory();
    const [login, setLogin] = useState({ email: "", password: "" });

    return (
        <div className="login-container">
            <form className="login-form">
                <input
                    onChange={(e) => onChange(e, login, setLogin)}
                    name="email"
                    type="text"
                    placeholder="ID or email"
                />
                <input
                    onChange={(e) => onChange(e, login, setLogin)}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <button onClick={() => isLogin(login.email, login.password)}>
                    로그인
                </button>
            </form>
            <button
                onClick={() => history.push("/sign-up")}
                className="signup-button"
            >
                회원가입
            </button>
        </div>
    );
};

export default Login;
