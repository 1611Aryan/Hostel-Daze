import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import hostel from "./../img/hostel2.jpeg";

const Login: React.FC<{
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      rollNumber: string;
      year: string;
      hostel: string;
      password: string;
    } | null>
  >;
}> = ({ setLogin, setUser }) => {
  //urls
  const URL =
    process.env.NODE_ENV === "production"
      ? "/student/login"
      : "http://localhost:5000/student/login";

  //state
  const [credentials, setCredentials] = useState<{
    rollNumber: null | string;
    password: null | string;
  }>({
    rollNumber: null,
    password: null,
  });

  const [message, setMessage] = useState<null | string>(null);

  //handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        rollNumber: credentials.rollNumber,
        password: credentials.password,
      });
      if (res.data.success) {
        setUser(res.data.student);
        setMessage(null);
        setLogin(true);
      } else {
        setMessage(res.data.message);
        setCredentials({
          rollNumber: null,
          password: null,
        });
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <StyledLogin>
      <StyledHeader>
        <h1>HostelDaze</h1>
      </StyledHeader>
      <img src={hostel} alt="hostel-background" />
      <div className="overlay"></div>
      <div className="content">
        <StyledForm onSubmit={submitHandler}>
          <p>{message && message}</p>
          <label htmlFor="rollNumber">Roll Number: </label>
          <input
            type="text"
            name="rollNumber"
            value={
              credentials.rollNumber !== null ? credentials.rollNumber : ""
            }
            onChange={changeHandler}
            required
            autoFocus
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password !== null ? credentials.password : ""}
            required
            onChange={changeHandler}
          />
          <span>Forgot Password?</span>
          <button>Login</button>
        </StyledForm>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledHeader = styled.header`
  z-index: 5;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding: 1rem 2rem;
`;

const StyledForm = styled.form`
  z-index: 5;
  width: 40%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 3rem 4rem;
  font-size: 1.45rem;
  background: rgba(226, 226, 226, 0.9);
  border-radius: 25px;
  p {
    color: red;
    font-size: 0.8rem;
  }
  input {
    width: 100%;
    padding: 0.9rem 0.5rem;
    border-radius: 10px;
    border: 0;
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #b1563b;
    &:focus {
      outline: 0;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  span {
    font-size: 0.8rem;
    align-self: flex-end;
    color: #b1563b;
    cursor: pointer;
  }
  button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #b1563b;
    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
export default Login;
