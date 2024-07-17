import { MyContainer, ProfileWrapper, Nickname } from "./My.style";
import ProfileImage from "../../components/image/ProfileImage";
import deafultImage from "../../components/image/default";
import Bar from "../../components/bar/Bar";
import Coin from "./Coin";
import { getToken, removeToken } from "../../utils/functions/TokenManager";
import { useNavigate } from "react-router-dom";

function My() {
  const navigate = useNavigate();
  return (
    <MyContainer>
      <ProfileWrapper
        onClick={!getToken() ? () => removeToken() : navigate("/")}
      >
        <ProfileImage src={deafultImage} width={120} height={120} />
        <Nickname>{!getToken() ? "이름" : "로그인 해주세요"}</Nickname>
      </ProfileWrapper>
      <Bar />
      <Coin />
    </MyContainer>
  );
}

export default My;
