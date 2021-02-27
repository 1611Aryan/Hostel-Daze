import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Students = () => {
  //State
  const [students, setStudents] = useState<
    | null
    | {
        name: string;
        rollNumber: string;
        year: string;
        hostel: string;
        access: string;
      }[]
  >(null);

  //URL
  const URL =
    process.env.NODE_ENV === "production"
      ? "/student"
      : "http://localhost:5000/student";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(URL);
        setStudents(res.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <StyledStudents>
      <StyledHeader>
        <h1> Students</h1>
      </StyledHeader>
      <StyledMain>
        <SearchBar />
        <ul>
          {students &&
            students
              .filter(
                (student: {
                  name: string;
                  rollNumber: string;
                  year: string;
                  hostel: string;
                  access: string;
                }) => student.access !== "admin"
              )
              .map(
                (s: {
                  name: string;
                  rollNumber: string;
                  year: string;
                  hostel: string;
                  access: string;
                }) => (
                  <li>
                    <div>
                      <span>Name: {s.name}</span>
                      <span>Roll Number: {s.rollNumber}</span>
                      <span>Year: {s.year}</span>
                      <span>Hostel: {s.hostel}</span>
                    </div>
                  </li>
                )
              )}
        </ul>
      </StyledMain>
    </StyledStudents>
  );
};

const StyledStudents = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;
`;
const StyledHeader = styled.header`
  width: 100vw;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  border-bottom: 2px solid #2d333c;
`;
const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      width: 100%;
      padding: 1.5rem 1rem;
      border-bottom: 0.5px solid black;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          min-width: 20%;
        }
      }
    }
  }
`;

export default Students;
