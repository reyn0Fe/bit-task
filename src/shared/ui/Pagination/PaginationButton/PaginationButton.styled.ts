import styled from "styled-components";

export const StyledPaginationButton = styled.button`
  padding: 6px 14px;
  border-radius: 8px;
  background: none;
  font-weight: 500;
  font-family: inherit;
  line-height: 22px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.base.white};

  &:not(.active):hover {
    background-color: ${(props) => props.theme.grayScale.gray2};
  }

  &.active {
    background-color: ${(props) => props.theme.accent.strong};
  }

  @media (max-width: 834px) {
    font-size: 14px;
  }
`;
