import styled from "styled-components";

export const Container = styled.div`
  border: ${(props) =>
    props.state ? "0.1rem solid #7FDB6F" : "0.1rem solid #d9d9d9"};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 4rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const Icon = styled.img`
  font-size: 1.2rem;
`;

export const IconText = styled.div`
  font-size: 0.8rem;
`;
