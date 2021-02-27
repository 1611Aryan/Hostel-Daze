import styled from "styled-components";
import food from "./../img/food.jpg";

const DecideToEat = () => {
  return (
    <StyledDecideToEat>
      <img src={food} alt="food" />
      <div className="overlay"></div>
      <div className="content">
        <p>
          I solemnly swear that I will be Having Dinner/Lunch in Mess Today{" "}
        </p>
        <div className="buttonContainer">
          <button>Yes!!</button>
          <button>No</button>
        </div>
      </div>
    </StyledDecideToEat>
  );
};

const StyledDecideToEat = styled.section`
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
      font-size: 3rem;
      margin-bottom: 5rem;
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      min-width: 15%;
      background: #222831;
      color: #fff;
      font-size: 1.75rem;
      padding: 1rem;
      border-radius: 15px;
      margin: 0 1rem;
    }
    button + button {
      background: #393e46;
    }
  }
`;

export default DecideToEat;
