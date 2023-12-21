import UserIcon from "@shared/icons/user.svg";
import * as S from "./UserInfo.styled";

export const UserInfo = () => {
  return (
    <S.StyledUserInfo>
      <S.UserInfoContainer>
        <S.IconContainer>
          <UserIcon />
        </S.IconContainer>

        <S.TextContainer>
          <S.UserStatus>Вы авторизованы</S.UserStatus>
          <S.UserRole>Администратор</S.UserRole>
        </S.TextContainer>
      </S.UserInfoContainer>
    </S.StyledUserInfo>
  );
};
