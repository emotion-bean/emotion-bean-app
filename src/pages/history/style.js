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
  width: 0.9rem;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
`;

export const DateContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export const Icon = styled.img`
  width: 4rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 80%;
  min-height: 340px;
  margin-left : 3rem;
  margin-right : 3rem;
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: white;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const MainImage = styled.img`
  width: 90%;  
  height: 290px;
  object-fit: cover; 
  border-radius: 1rem;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  width: 80%;
  text-align: left;
  font-weight: bold;
`;

export const Detail = styled.div`
  width: 80%;
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.4;
  color: #555;
  white-space: pre-wrap;  // ✅ 줄바꿈 유지
`;
