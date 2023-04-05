const login = (email, password) => {
    if (email.length === 0) {
        alert("이메일을 입력해주세요.");
    } else if (password.length === 0) {
        alert("패스워드를 입력해주세요.");
    } else alert("로그인 되었습니다.");
};

export default login;
