import React, { useState } from "react";
import axios from "axios"; 
import * as S from "./style";
import FeelCard from "../../components/elements/feelcard";
import { useNavState } from "../../store/useNavState";

const Write = () => {
  const { setNavState } = useNavState();
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [imglink, setImgLink] = useState();
  const date = new Date();
  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const email = "test@example.com";   // 임의로 설정함

  const handleImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    if (uploadFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgLink(reader.result); // base64 인코딩
        setImage(reader.result);
      };
      reader.readAsDataURL(uploadFile);
    }
  };

  const handleSubmit = async () => {

    const diaryData = {
      email,
      title,
      content: detail,
      image: imglink, // base64 이미지
      createdAt: formattedDate,
      emotion: status,
    };

    try {
      const response = await axios.post("http://localhost:3000/diary/upload", diaryData);
      if (response.data.success) {
        console.log("일기 저장")
      } else {
        console.log("일기 저장 실패")
      }
    } catch (error) {
      console.error("업로드 에러:", error);
    }
  };

  return (
    <S.Container>
      <S.Arrow
        src="/images/prevarrow.svg"
        onClick={() => setNavState("CALENDAR")}
      />
      <S.DateContainer>{formattedDate}</S.DateContainer>
      <S.FeelContainer>
        <S.FeelText>오늘은 어떤 기분이었나요?</S.FeelText>
        <S.FeelCardWrapper>
          <FeelCard
            img="/images/pink_peach.svg"
            status="기뻐요"
            state={status}
            setState={setStatus}
          />
          <FeelCard
            img="/images/yellow_peach.svg"
            status="화나요"
            state={status}
            setState={setStatus}
          />
          <FeelCard
            img="/images/skyblue_peach.svg"
            status="그저그래요"
            state={status}
            setState={setStatus}
          />
          <FeelCard
            img="/images/purple_peach.svg"
            status="슬퍼요"
            state={status}
            setState={setStatus}
          />
        </S.FeelCardWrapper>
      </S.FeelContainer>

      <S.TextContainer>
        <S.TextTitle>일기 제목</S.TextTitle>
        <S.TextInput
          placeholder="여기에 제목을 작성해 주세요."
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.TextContainer>

      <S.TextContainer>
        <S.TextTitle>나의 일기</S.TextTitle>
        <S.TextInput
          placeholder="여기에 제목을 작성해 주세요."
          onChange={(e) => setDetail(e.target.value)}
        />
      </S.TextContainer>

      <S.ImageUploader>
        <S.TextTitle>오늘의 Best 사진</S.TextTitle>
        <S.ImageContainer>
          <S.Uploader
            image={image}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            {image ? null : (
              <>
                <S.Image src="/images/image.svg" />
                여기를 클릭해서 멋있는 사진을 업로드해 보세요!
              </>
            )}
          </S.Uploader>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </S.ImageContainer>
      </S.ImageUploader>
      <S.ConfirmButton isDone={status && title && detail} onClick={handleSubmit}>완료</S.ConfirmButton>
    </S.Container>
  );
};

export default Write;
