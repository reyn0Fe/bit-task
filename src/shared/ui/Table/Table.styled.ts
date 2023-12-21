import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-x: auto;

  @media (max-width: 672px) {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const THead = styled.thead``;

export const HeadTr = styled.tr`
  background-color: ${(props) => props.theme.base.black};
`;

export const Td = styled.td`
  text-align: center;
`;

export const TBody = styled.tbody``;

export const BodyTr = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.grayScale.gray3};
`;

export const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  table-layout: fixed;

  td {
    width: 100%;
    padding: 23px 10px;
    line-height: 18px;
    vertical-align: middle;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 834px) {
    td {
      padding: 14px 10px;
      font-size: 12px;

      &:first-child {
        min-width: 250px;
      }
    }

    th {
      font-size: 12px;
    }
  }

  @media (max-width: 672px) {
    width: auto;
  }
`;
