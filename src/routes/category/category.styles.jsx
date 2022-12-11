import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
    width: 70%;
    margin: auto;
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    width: 85%;
    margin: auto;
  }
  @media (max-width: 340px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: auto;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
