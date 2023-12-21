import * as S from "./PageHeader.styled";
import { ActivePage } from "@pages/ui/PageHeader/ActivePage";
import { UserInfo } from "@pages/ui/PageHeader/UserInfo";

export const PageHeader = () => {
  return (
    <S.StyledPageHeader>
      <S.Logo>BitTest</S.Logo>
      <ActivePage />
      <UserInfo />
    </S.StyledPageHeader>
  );
};
