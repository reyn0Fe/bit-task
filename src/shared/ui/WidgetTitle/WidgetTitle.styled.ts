import styled, { css } from "styled-components";
import { WidgetTitleLevel } from "./WidgetTitle.types";

const styles = css`
  font-size: 22px;
  line-height: 29px;
  font-weight: 600;

  @media (max-width: 834px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const H2 = styled.h2`
  ${styles}
`;

const H3 = styled.h3`
  ${styles}
`;

export const getWidgetTitle = (level: WidgetTitleLevel) => {
  if (level === "h2") return H2;

  return H3;
};
