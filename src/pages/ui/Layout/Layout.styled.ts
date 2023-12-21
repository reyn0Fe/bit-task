import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const PageContentContainer = styled.section`
  padding-bottom: 45px;
  border-radius: 18px;
  background: ${(props) => props.theme.grayScale.gray4};

  @media (max-width: 834px) {
    padding-bottom: 34px;
  }

  @media (max-width: 430px) {
    padding-bottom: 51px;
  }
`;

export const PageHeaderWrapper = styled.div`
  @media (max-width: 430px) {
    padding: 0 16px;
  }
`;

export const PageContentHeader = styled.header`
  padding: 24px 34px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.grayScale.gray3};
`;

export const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 29px;

  @media (max-width: 834px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PageContent = styled.div`
  padding: 0 34px;
`;

export const StyledLayout = styled.div`
  padding: 34px 25px;

  @media (max-width: 834px) {
    padding: 34px 40px;

    ${PageContentHeader} {
      padding: 24px;
    }

    ${PageContent} {
      padding: 0 24px;
    }

    ${Container} {
      gap: 32px;
    }
  }

  @media (max-width: 430px) {
    padding: 24px 0 0 0;

    ${PageContentHeader} {
      margin-bottom: 26px;
      padding: 18px 16px;
    }

    ${PageContent} {
      padding: 0 16px;
    }
  }
`;
