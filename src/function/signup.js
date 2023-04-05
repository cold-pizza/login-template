const signup = (email, name, password, introduce) => {
    if (email.length === 0) {
        alert("이메일을 입력하세요!");
    } else if (name.length === 0) {
        alert("이름을 입력하세요.");
    } else if (password.length === 0) {
        alert("비밀번호를 입력하세요.");
    } else alert("화원가입 완료!");
};

export default signup;
