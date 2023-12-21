import { activePageConfig } from "./ActivePage.config";
import * as S from "./ActivePage.styled";

export const ActivePage = () => {
  const activePage = activePageConfig["main"];

  return (
    <S.StyledActivePage>
      <S.SvgContainer>{activePage.Icon}</S.SvgContainer>

      {activePage.label}
    </S.StyledActivePage>
  );
};
