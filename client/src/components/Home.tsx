import styled from "styled-components";
import { Link } from "react-router-dom";
import hostel from "./../img/hostel.jpg";

const Home = () => {
  return (
    <StyledHome>
      <img src={hostel} alt="hostel-hero" />
      <div className="overlay"></div>
      <div className="content">
        <p>Checked In for Lunch/Dinner Yet ?</p>
        <button>
          <Link to="/choose">Check In Now</Link>
        </button>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.main`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
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
      font-size: 5rem;
      margin-bottom: 1.25rem;
    }
    button {
      background: #ffd369;
      color: #393e46;
      font-size: 1.75rem;
      padding: 1rem;
      border-radius: 15px;
    }
  }
`;

export default Home;
