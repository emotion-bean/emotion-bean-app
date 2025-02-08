import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-image: url("/images/background.svg");
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  width: 90%;
  top: 2rem;
  left: 2rem;
`;

export const RankingWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const RankingBox = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid #d9d9d9;
  justify-content: space-around;
`;

export const Rank = styled.div`
  color: ${(props) =>
    props.rank === 1
      ? "#FEE500"
      : props.rank === 2
      ? "#B7BDCB"
      : props.rank === 3
      ? "#956B00"
      : "#8E95A3"};
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 2rem;
  color: #121213;
`;
