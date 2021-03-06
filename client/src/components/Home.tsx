import styled from "styled-components";
import { Link } from "react-router-dom";
import hostel from "./../img/hostel.jpg";

const Home: React.FC<{ access: string }> = ({ access }) => {
  if (access === "student") {
    return (
      <StyledHome>
        <img src={hostel} alt="hostel-hero" />
        <div className="overlay"></div>
        <div className="content">
          <p>Checked In for Lunch/Dinner Yet ?</p>
          <button>
            <div className="btnOverlay"></div>
            <Link to="/choose">Check In Now</Link>
          </button>
        </div>
      </StyledHome>
    );
  } else {
    window.history.pushState({}, "", "/admin");
    window.location.reload();
    return null;
  }
};

const StyledHome = styled.main`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 60%;
    z-index: 5;
    text-align: center;
    color: #fff;
    p {
      font-size: clamp(1rem, 9vw, 5rem);
      margin-bottom: 1.25rem;
    }
    button {
      background: #3b6d81;
      color: #ffffff;
      font-size: clamp(1rem, 3vw, 1.75rem);
      padding: 1rem;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      transition: color ease-out 0.2s 0.1s;
      .btnOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform ease 0.3s;
        transform: translateX(-100%);
        background: #eee;
        z-index: 1;
      }
      a {
        position: relative;
        z-index: 4;
      }
      &:hover {
        color: black;
        .btnOverlay {
          transform: translateX(0);
        }
      }
    }
  }
  @media (max-width: 600px) {
    .content {
      width: 80%;
    }
  }
  @media (max-width: 400px) {
    .content {
      width: 90%;
    }
  }
`;

export default Home;
