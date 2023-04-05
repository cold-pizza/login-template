import "./style.scss";
import { useState } from "react";
import { useHistory } from "react-router";
import onChange from "../../function/onChange";
import isSignup from "../../function/signup";

const SignUp = () => {
    const history = useHistory();
    const [signup, setSignup] = useState({
        email: "",
        name: "",
        password: "",
        introduce: "",
    });
    const { email, name, password, introduce } = signup;

    return (
        <div className="signup-container">
            <form className="signup-form">
                <input
                    name="name"
                    onChange={(e) => onChange(e, signup, setSignup)}
                    type="text"
                    placeholder="이름"
                    required
                />
                <input
                    name="email"
                    type="email"
                    onChange={(e) => onChange(e, signup, setSignup)}
                    placeholder="이메일"
                    required
                />
                <input
                    name="password"
                    type="password"
                    onChange={(e) => onChange(e, signup, setSignup)}
                    placeholder="비밀번호"
                    required
                />
                <input
                    type="text"
                    onChange={(e) => onChange(e, signup, setSignup)}
                    placeholder="자기소개(선택)"
                />
                <button
                    onClick={() => {
                        isSignup(email, name, password, introduce);
                        setSignup({
                            email: "",
                            name: "",
                            password: "",
                            introduce: "",
                        });
                    }}
                    type="button"
                >
                    회원가입
                </button>
            </form>
            <button onClick={() => history.goBack()} className="back-botton">
                뒤로가기
            </button>
        </div>
    );
};

export default SignUp;
