import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFullPageLoader = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled(motion.div)`
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const LoadingDot = styled(motion.span)`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.base.white};
  border-radius: 50%;
`;
