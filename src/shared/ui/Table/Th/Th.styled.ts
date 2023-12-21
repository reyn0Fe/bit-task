import styled from "styled-components";

export const Th = styled.th`
  padding: 14px;
  color: ${(props) => props.theme.grayScale.gray6};
  gap: 10px;

  &.sortable {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.asc svg {
    transform: rotate(180deg);
  }
`;
