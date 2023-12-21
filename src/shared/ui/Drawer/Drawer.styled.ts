import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: flex-end;
`;

export const DrawerHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
`;

export const DrawerClose = styled.div`
  cursor: pointer;
  display: flex;
`;

export const DrawerContent = styled.div``;

export const StyledDrawer = styled.div`
  width: 470px;
  padding: 56px 20px;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.grayScale.gray4};
  position: absolute;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 672px) {
    table {
      width: 100%;
    }
  }

  @media (max-width: 540px) {
    padding: 30px 16px;
    width: 100vw;

    ${DrawerHeader} {
      font-size: 18px;
      margin-bottom: 14px;
    }
  }
`;
