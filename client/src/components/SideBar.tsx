import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./../img/placeholder.png";

interface SideBarInterface {
  sideBarStatus: boolean;
  setSideBarStatus: React.Dispatch<React.SetStateAction<boolean>>;
  user: {
    name: string;
    rollNumber: string;
    year: string;
    hostel: string;
    password: string;
  } | null;
}

const SideBar: React.FC<SideBarInterface> = ({
  setSideBarStatus,
  sideBarStatus,
  user,
}) => {
  const HideSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };
  return sideBarStatus ? (
    <StyledSideBar>
      <StyledHeader>
        <div className="profile">
          <img src={placeholderImage} alt="profile" />
          <span>{user?.name}</span>
        </div>
        <FontAwesomeIcon icon={faTimes} onClick={HideSideBar} />
      </StyledHeader>
      <StyledOtherLinks>
        <ul>
          <li onClick={HideSideBar}>
            <Link to="/menu"> View Menu</Link>
          </li>
          <li onClick={HideSideBar}>
            <Link to="/request-service"> Request for cleaning</Link>
          </li>
          <li onClick={HideSideBar}>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li onClick={HideSideBar}>
            <Link to="/my-dues">My Dues</Link>
          </li>
        </ul>
      </StyledOtherLinks>
      <StyledFooter>
        <p>CareTaker: +91 1234567890</p>
        <p>Warden: +91 0987654321</p>
      </StyledFooter>
    </StyledSideBar>
  ) : null;
};

const StyledSideBar = styled.menu`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30%;
  background: rgba(238, 238, 238, 0.9);
  color: #252a32;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  min-height: var(--navBarHeight);
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.35rem;
  svg {
    cursor: pointer;
    font-size: 1.45rem;
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 10%;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-right: 1rem;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
`;

const StyledOtherLinks = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 1.35rem;
  ul {
    list-style-type: none;
  }
  li + li {
    margin-top: 3rem;
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  padding: 2rem 4rem;
`;

export default SideBar;
