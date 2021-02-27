import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./../img/placeholder.png";

interface NavInterface {
  sideBarStatus: boolean;
  setSideBarStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setLogin: any;
  user: {
    name: string;
    rollNumber: string;
    year: string;
    hostel: string;
    password: string;
    access: string;
  } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      rollNumber: string;
      year: string;
      hostel: string;
      password: string;
      access: string;
    } | null>
  >;
}

const Nav: React.FC<NavInterface> = ({
  setSideBarStatus,
  sideBarStatus,
  setLogin,
  user,
  setUser,
}) => {
  //State
  const [logoutModal, setLogoutModal] = useState(false);

  //Handlers
  const showLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  const showSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };

  const logout = () => {
    setLogin({
      status: false,
      access: null,
    });
    setUser(null);
  };

  return (
    <StyledNav>
      <Link to={user?.access === "student" ? "/" : "/admin"}>
        <h1>HostelDaze</h1>
      </Link>
      {!sideBarStatus && (
        <StyledOptions>
          <div className="profile" onClick={showLogoutModal}>
            <img src={placeholderImage} alt="profile" />
            <span>{user?.name}</span>
            {logoutModal && (
              <StyledLogoutModal>
                <p onClick={logout}>
                  Logout <FontAwesomeIcon icon={faSignOutAlt} />
                </p>
              </StyledLogoutModal>
            )}
          </div>
          {user?.access === "student" ? (
            <FontAwesomeIcon icon={faBars} onClick={showSideBar} />
          ) : null}
        </StyledOptions>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  z-index: 90;
  width: 100vw;
  height: var(--navBarHeight);
  padding: 1rem;
  background: rgba(34, 40, 49, 0.95);
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.35rem;

  svg {
    cursor: pointer;
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

const StyledLogoutModal = styled.div`
  z-index: 999;
  position: absolute;
  top: var(--navBarHeight);
  right: 0;
  width: 20%;
  background: rgba(34, 40, 49, 0.95);
  padding: 1rem 2rem;
  p {
    cursor: pointer;
  }
`;
export default Nav;
