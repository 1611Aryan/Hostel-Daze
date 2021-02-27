import styled from "styled-components";
import yellowGradient from "./../img/yellow-gradient.jpg";

const RequestService = () => {
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledRequestService>
      <img src={yellowGradient} alt="" />
      <div className="overlay"></div>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" autoFocus />
        <label htmlFor="rollNumber">Roll Number:</label>
        <input type="text" name="rollNumber" />
        <label htmlFor="Issue">Issue:</label>
        <textarea name="issue" rows={10}></textarea>
        <button>Submit</button>
      </form>
    </StyledRequestService>
  );
};

const StyledRequestService = styled.section`
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
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
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
  form {
    z-index: 5;
    width: 60%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    input {
      width: 100%;
      padding: 0.6rem;
      margin: 0.5rem 0;
      border: 0;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.8);
      &:focus {
        outline: 0;
        background: rgba(255, 255, 255, 1);
      }
    }
    textarea {
      width: 100%;
      padding: 0.5rem;
      resize: none;
      margin: 0.5rem 0;
      border-radius: 5px;
      border: 0;
      background: rgba(255, 255, 255, 0.8);
      &:focus {
        outline: 0;
        background: rgba(255, 255, 255, 1);
      }
    }
    button {
      margin: 0.5rem 0;
      padding: 1rem 1.5rem;
      font-size: 1.25rem;
      background: rgba(238, 238, 238, 0.8);
      border-radius: 5px;
      &:focus,
      &:hover {
        background: rgba(238, 238, 238, 1);
      }
    }
  }
`;
export default RequestService;
