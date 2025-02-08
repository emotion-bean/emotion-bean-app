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

export const TopWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
`;

export const Arrow = styled.img`
  position: absolute;
  width: 0.9rem;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
`;

export const Title = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard";
  position: absolute;
  width: 90%;
  display: flex;
  top: 2rem;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export const FixProfile = styled.img`
  width: 7rem;
`;

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard";
  font-size: 1.4rem;
`;

export const Input = styled.input`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard";
  height: 2.5rem;
  padding-left: 1rem;
`;

export const ConfirmButton = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard";
  width: 90%;
  border-radius: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: ${(props) => (props.isDone ? "#7FDB6F" : "#BCBCBC")};
`;
