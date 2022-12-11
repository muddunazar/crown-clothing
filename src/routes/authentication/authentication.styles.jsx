import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 845px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 950px) {
    width: auto;
  }
`;
