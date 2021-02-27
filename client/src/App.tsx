import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import DecideToEat from "./components/DecideToEat";
import Menu from "./components/Menu";
import RequestService from "./components/RequestService";
import Attendance from "./components/Attendance";
import MyDues from "./components/MyDues";
import Login from "./components/login";
import useLocalStorage from "./Hooks/useLocalStorage";
import AdminPanel from "./components/AdminPanel";

function App() {
  //state
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [login, setLogin] = useLocalStorage("login", {
    status: false,
    access: "none",
  });
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <div className="App">
      {!login.status ? (
        <Login setLogin={setLogin} setUser={setUser} />
      ) : (
        <>
          <Nav
            sideBarStatus={sideBarStatus}
            setSideBarStatus={setSideBarStatus}
            setLogin={setLogin}
            user={user}
            setUser={setUser}
          />
          {login.access === "student" ? (
            <>
              <SideBar
                user={user}
                sideBarStatus={sideBarStatus}
                setSideBarStatus={setSideBarStatus}
              />
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/choose" exact>
                  <DecideToEat />
                </Route>
                <Route path="/menu" exact>
                  <Menu />
                </Route>
                <Route path="/request-service" exact>
                  <RequestService />
                </Route>
                <Route path="/attendance" exact>
                  <Attendance />
                </Route>
                <Route path="/my-dues" exact>
                  <MyDues />
                </Route>
              </Switch>
            </>
          ) : (
            <AdminPanel />
          )}
        </>
      )}
    </div>
  );
}

export default App;
