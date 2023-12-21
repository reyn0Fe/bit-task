import styled from "styled-components";

export const StyledPageHeader = styled.header`
  padding: 16px 24px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.grayScale.gray4};
  display: flex;
  align-items: center;
  gap: 44px;

  @media (max-width: 834px) {
    padding: 14px 18px;
  }

  @media (max-width: 620px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 29px;
`;
