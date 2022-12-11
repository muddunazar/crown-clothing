import styled from "styled-components";

export const SignUpContainer = styled.div`
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
    button {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
