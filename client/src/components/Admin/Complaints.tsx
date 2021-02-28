import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Complaints = () => {
  //URL
  const URL =
    process.env.NODE_ENV === "production"
      ? "/administrator/complaints"
      : "http://localhost:5000/administrator/complaints";

  const deleteURL =
    process.env.NODE_ENV === "production"
      ? "/administrator/complaints"
      : "http://localhost:5000/administrator/complaints";

  //State
  const [complaints, setComplaints] = useState<
    | null
    | {
        name: string;
        rollNumber: string;
        roomNumber: string;
        issue: string;
        _id: string;
      }[]
  >(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(URL);
      setComplaints(res.data);
    })();
  }, [URL]);

  //
  const deleteComplaint = async (id: string) => {
    try {
      const res = await axios.delete(`${deleteURL}/${id}`);
      console.log(res.data);
      if (complaints)
        setComplaints(complaints.filter(complaint => complaint._id !== id));
    } catch (err) {
      throw err;
    }
  };

  return (
    <StyledComplaints>
      <StyledHeader>
        <h1>Complaints</h1>
      </StyledHeader>

      <StyledList>
        {complaints &&
          complaints.map(complaint => (
            <li key={complaint._id}>
              <div>
                <p className="name">{complaint.name}</p>
                <p className="room">{complaint.roomNumber}</p>
                <p className="issue">{complaint.issue}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => deleteComplaint(complaint._id)}
                />
              </div>
            </li>
          ))}
      </StyledList>
    </StyledComplaints>
  );
};

const StyledComplaints = styled.div`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: clamp(0.8rem, 3vw, 1.2rem);
`;

const StyledList = styled.ul`
  width: 100%;
  overflow: hidden auto;
  list-style-type: none;
  li {
    padding: 1rem;
    width: 100%;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;
    svg {
      font-size: clamp(1rem, 2vw, 1.25rem);
      cursor: pointer;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .name {
        font-size: clamp(0.95rem, 2vw, 1.3rem);
      }
      .room {
        font-size: clamp(0.65rem, 1.5vw, 0.8rem);
      }
      .issue {
        font-size: clamp(0.8rem, 1vw, 1rem);
      }
    }
  }
  li + li {
    border-top: none;
    border-bottom: 2px solid #000;
  }
`;
export default Complaints;
