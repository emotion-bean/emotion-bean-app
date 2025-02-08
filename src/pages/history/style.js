import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("/images/background.svg");
  background-size: cover;
  background-position: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem;
  position: relative;
`;

export const Arrow = styled.img`
  position: absolute;
  width: 0.7rem;
  top: 2rem;
  left: 2rem;
`;

export const DateContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

export const Icon = styled.img`
  width: 4rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  width: 90%;
  padding-top: 0.3rem;
  border-radius: 0.5rem;
  background-color: white;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 1rem;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  width: 80%;
  justify-content: flex-start;
`;

export const Detail = styled.div`
  width: 80%;
  font-size: 0.8rem;
`;
