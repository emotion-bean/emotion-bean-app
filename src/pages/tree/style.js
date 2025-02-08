import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/images/background.svg");
  background-size: cover;
  background-position: center;
`;

export const OptionWrapper = styled.div`
  margin-top:1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const OptionIcon = styled.img`
  width: 1.5rem;
`;

export const TreeContainer = styled.div`
  width: 90vw;
  height: 90vw;
  position: relative;
`;

export const Tree = styled.img`
  width: 90vw;
`;

export const Peach = styled.img`
  position: absolute;
`;
