import styled from "styled-components";
import { UserOperation, UserOperationType } from "@shared";
import { FC } from "react";

export const StyledValueCell = styled.div<{ $type: UserOperationType }>`
  color: ${(props) =>
    props.$type === "DECREASE" ? props.theme.danger : props.theme.success};
`;

export const ValueCell: FC<UserOperation> = (props) => {
  return (
    <StyledValueCell $type={props.type}>
      {props.type === "DECREASE" ? "-" : "+"}
      {props.value}
    </StyledValueCell>
  );
};
