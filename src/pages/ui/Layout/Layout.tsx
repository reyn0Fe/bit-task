import * as S from "./Layout.styled";
import { FC } from "react";
import { useInitApp } from "@shared";
import { FullPageLoader, PageHeader } from "@pages/ui";
import { LayoutProps } from "./Layout.types";

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  const isReady = useInitApp();

  if (!isReady) return <FullPageLoader />;

  return (
    <S.StyledLayout>
      <S.Container>
        <S.PageHeaderWrapper>
          <PageHeader />
        </S.PageHeaderWrapper>

        <S.PageContentContainer>
          <S.PageContentHeader>
            <S.PageTitle>{pageTitle}</S.PageTitle>
          </S.PageContentHeader>

          <S.PageContent>{children}</S.PageContent>
        </S.PageContentContainer>
      </S.Container>
    </S.StyledLayout>
  );
};

export default Layout;
