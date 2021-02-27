import { useState } from "react";
import styled from "styled-components";
import menuBG from "./../img/menuBg.jpg";

const Menu = () => {
  const [day, setDay] = useState(() => new Date().getDay());
  const [time, setTime] = useState(() => {
    const time = new Date().getHours();
    if (time <= 8) return 0;
    if (time <= 14) return 1;
    if (time <= 23) return 2;
  });

  const ChangeDay = (d: number) => {
    setDay(d);
  };

  const ChangeTime = (t: number) => {
    setTime(t);
  };

  return (
    <StyledMenu>
      <img src={menuBG} alt="" />
      <div className="overlay"></div>
      <StyledSidePanel>
        <ul>
          <li
            onClick={() => ChangeDay(1)}
            className={day === 1 ? "activeDay" : ""}
          >
            Monday
          </li>
          <li
            onClick={() => ChangeDay(2)}
            className={day === 2 ? "activeDay" : ""}
          >
            Tuesday
          </li>
          <li
            onClick={() => ChangeDay(3)}
            className={day === 3 ? "activeDay" : ""}
          >
            Wednesday
          </li>
          <li
            onClick={() => ChangeDay(4)}
            className={day === 4 ? "activeDay" : ""}
          >
            Thursday
          </li>
          <li
            onClick={() => ChangeDay(5)}
            className={day === 5 ? "activeDay" : ""}
          >
            Friday
          </li>
          <li
            onClick={() => ChangeDay(6)}
            className={day === 6 ? "activeDay" : ""}
          >
            Saturday
          </li>
          <li
            onClick={() => ChangeDay(7)}
            className={day === 7 ? "activeDay" : ""}
          >
            Sunday
          </li>
        </ul>
      </StyledSidePanel>
      <StyledFood>
        <div className="time">
          <ul>
            <li
              onClick={() => ChangeTime(0)}
              className={time === 0 ? "activeTime" : ""}
            >
              BreakFast
            </li>
            <li
              onClick={() => ChangeTime(1)}
              className={time === 1 ? "activeTime" : ""}
            >
              Lunch
            </li>
            <li
              onClick={() => ChangeTime(2)}
              className={time === 2 ? "activeTime" : ""}
            >
              Dinner
            </li>
          </ul>
        </div>
      </StyledFood>
    </StyledMenu>
  );
};

const StyledMenu = styled.section`
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .activeDay {
    background: #eee;
    color: #2d333c;
  }
  .activeTime {
    background: #eee !important;
    color: #2d333c !important;
  }
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
`;
const StyledSidePanel = styled.div`
  width: 30%;
  height: 100%;
  z-index: 5;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    list-style-type: none;
    border-right: 2px solid #2d333c;
    background: rgba(87, 87, 87, 0.9);
    color: #eee;
  }

  li {
    border-bottom: 2px solid #2d333c;
    width: 100%;
    height: calc(100% % 7);
    padding: 2rem 4rem;
    cursor: pointer;
  }
  li + li {
    border-bottom: 2px solid #2d333c;
    border-top: 0;
  }
`;
const StyledFood = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  .time {
    width: 100%;
    ul {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style-type: none;
      border-bottom: 2px solid #2d333c;

      li {
        //border-radius: 0 10px 0 0;
        padding: 1rem 2rem;
        border-right: 2px solid #2d333c;
        background: rgba(87, 87, 87, 0.9);
        color: #eee;
        cursor: pointer;
      }
    }
  }
`;

export default Menu;
