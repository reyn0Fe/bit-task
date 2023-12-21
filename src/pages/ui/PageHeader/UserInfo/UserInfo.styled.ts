import styled from "styled-components";

export const StyledUserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const UserInfoContainer = styled.div`
  padding: 9px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.grayScale.gray3};
`;

export const IconContainer = styled.div``;

export const TextContainer = styled.div``;

export const UserStatus = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.grayScale.gray1};
`;

export const UserRole = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
