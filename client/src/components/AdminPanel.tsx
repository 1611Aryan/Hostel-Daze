import styled from "styled-components";

const AdminPanel = () => {
  return (
    <StyledAdminPanel>
      <StyledOption
        style={{
          background: "#FF8D8D",
        }}
      >
        <div className="overlay"></div>
        <span> Mess Status</span>
      </StyledOption>
      <StyledOption
        style={{
          background: "#FFFA7D",
        }}
      >
        <div className="overlay"></div>
        <span> Attendance</span>
      </StyledOption>
      <StyledOption
        style={{
          background: "#A0E8FF",
        }}
      >
        <div className="overlay"></div>
        <span> Complaints</span>
      </StyledOption>
      <StyledOption
        style={{
          background: "#C8FF81",
        }}
      >
        <div className="overlay"></div>
        <span> Students</span>
      </StyledOption>
      <StyledOption
        style={{
          background: "#C984FF",
        }}
      >
        <div className="overlay"></div>
        <span> Dues</span>
      </StyledOption>
      <StyledOption
        style={{
          background: "#FEB580",
        }}
      >
        <div className="overlay"></div>
        <span>...</span>
      </StyledOption>
    </StyledAdminPanel>
  );
};

const StyledAdminPanel = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    109.6deg,
    rgb(204, 228, 247) 11.2%,
    rgb(237, 246, 250) 100.2%
  );
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const StyledOption = styled.div`
  height: 40%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.75rem;
  background: lightcoral;
  margin: 0 5rem;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;

  .overlay {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background: rgba(128, 128, 128, 0.1);
  }
  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  span {
    z-index: 5;
  }
`;

export default AdminPanel;
