import React from "react";
import * as S from "./style";
import Icon from "./icon";
import { useNavState } from "../../store/useNavState";

const Nav = () => {
  const { navState, setNavState } = useNavState();
  return (
    <S.Container>
      <S.Button onClick={() => setNavState("CALENDAR")}>
        <Icon type="calendar" active={navState === "CALENDAR"} />
      </S.Button>
      <S.Button onClick={() => setNavState("WRITE")}>
        <Icon type="write" active={navState === "WRITE"} />
      </S.Button>
      <S.Button onClick={() => setNavState("PROFILE")}>
        <Icon type="profile" active={navState === "PROFILE"} />
      </S.Button>
    </S.Container>
  );
};

export default Nav;
