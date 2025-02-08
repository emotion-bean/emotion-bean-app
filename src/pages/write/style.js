import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/images/background.svg");
  background-size: cover;
  background-position: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1.3rem;
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

export const StyleContainer = styled.div`
  width: 90%;
  background-color: white;
  border: 0.1rem solid #f6f6f6;
  border-radius: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
`;

export const FeelContainer = styled(StyleContainer)`
  display: flex;
  align-items: center;
`;

export const FeelCardWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const FeelText = styled.div`
  font-size: 1.2rem;
  padding-bottom: 2rem;
`;

export const TextContainer = styled(StyleContainer)`
  
  align-items: flex-start;
`;

export const TextTitle = styled.div`
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  align-self: flex-start;
`;

export const TextInput = styled.textarea`
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border: none;
  outline: none;
  width: 80%;
  min-height: 2rem;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  box-sizing: border-box;
`;

export const ImageUploader = styled(StyleContainer)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 2rem;
`;

export const Uploader = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  color: #666;
  background-color: ${({ image }) => (image ? "transparent" : "#f6f6f6")};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
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
