export const CallGPT = async (detail) => {
  if (!process.env.REACT_APP_GPT_API_KEY) {
    console.error("🚨 OpenAI API Key가 설정되지 않았습니다!");
    return null;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `다음 내용을 분석하고 요약해줘: "${detail}"`,
          },
        ],
        temperature: 0.5,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! 상태 코드: ${response.status}`);
    }

    const responseData = await response.json();

    if (!responseData.choices || responseData.choices.length === 0) {
      console.error("⚠️ choices 배열이 없습니다:", responseData);
      return "올바른 응답이 없습니다.";
    }

    const result = responseData.choices[0].message?.content?.trim();
    return result || "응답이 올바르지 않습니다.";
  } catch (error) {
    console.error("❌ OpenAI API 요청 중 오류 발생:", error);
    return "오류 발생";
  }
};
