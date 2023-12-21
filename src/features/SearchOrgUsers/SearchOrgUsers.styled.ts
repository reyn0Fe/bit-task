import styled from "styled-components";

export const StyledSearchOrgUsers = styled.div`
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.grayScale.gray2};
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  background: none;
  border: none;
  outline: none;
  color: ${(props) => props.theme.grayScale.gray1};
`;

export const SearchIcon = styled.div`
  margin-right: 10px;
`;
