import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
  @media (max-width: 416px) {
    text-align: center;
    margin-bottom: 30px;
    width: auto;
    h2 {
      font-size: 20px;
    }
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 416px) {
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 1rem;
    }
  }
`;
