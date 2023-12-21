import styled from "styled-components";

export const StyledActivePage = styled.div`
  min-width: max-content;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  line-height: 18px;
  font-size: 16px;

  @media (max-width: 834px) {
    font-size: 14px;
  }
`;

export const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => props.theme.grayScale.gray3};
`;
