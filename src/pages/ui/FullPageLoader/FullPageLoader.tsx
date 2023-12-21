import {
  containerVariants,
  dotTransition,
  dotVariants,
} from "./FullPageLoader.motion";
import * as S from "./FullPageLoader.styled";

export const FullPageLoader = () => {
  return (
    <S.StyledFullPageLoader>
      <S.LoadingContainer
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <S.LoadingDot variants={dotVariants} transition={dotTransition} />
        <S.LoadingDot variants={dotVariants} transition={dotTransition} />
        <S.LoadingDot variants={dotVariants} transition={dotTransition} />
      </S.LoadingContainer>
    </S.StyledFullPageLoader>
  );
};
