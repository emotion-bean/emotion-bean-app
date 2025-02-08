import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url("/images/background.svg");
  background-size: cover;
  background-position: center;
`;

export const LoginWrapper = styled.div`
  width: 90%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  bottom: 3rem;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  width: 5rem;
`;

export const Kakao = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  background-color: #fee500;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const LoginImage = styled.img`
  width: 1.3rem;
  margin-left: 1.3rem;
`;

export const LoginText = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard";
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Google = styled(Kakao)`
  background-color: white;
`;
