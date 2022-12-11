import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media (max-width: 900px) {
    width: 65%;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media (max-width: 550px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media (max-width: 550px) {
    font-size: 20px;
  }
`;
export const Order = styled.div`
  min-width: max-content;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const Close = styled.button`
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    
    color: #8a2b06;

    &:hover {
     background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
    }
  }
  @media (max-width: 400px) {

    padding: 0.3rem 0.9rem;
    border-radius: 25px;
    font-size:15px
  }
`;
export const Card = styled.div`
  @media (max-width: 400px) {
    & h2 {
      font-size: 15px;
    }
  }
`;
