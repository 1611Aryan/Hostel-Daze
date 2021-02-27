import styled from "styled-components";

const MyDues = () => {
  return (
    <StyledMyDues>
      <h1>My Dues</h1>
    </StyledMyDues>
  );
};

const StyledMyDues = styled.section`
  width: 100vw;
  height: calc(100vh-var(--navHeight));
`;
export default MyDues;
