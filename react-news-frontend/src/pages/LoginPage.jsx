import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    alert("Đăng nhập với tài khoản: " + username);
  }

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên đăng nhập</label> <br />
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div><br />
        <div>
          <label>Mật khẩu</label><br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div> <br />
        <button type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginPage;