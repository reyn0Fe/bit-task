import { FC, useCallback, useEffect, useState } from "react";
import { getAllUserOperations, UserOperation, WidgetTitle } from "@shared";
import { UserTokensUsageChartProps } from "./UserTokensUsageChart.types";
import * as S from "./UserTokensUsageChart.styled";
import { UserTokensChart } from "./UserTokensChart";

export const UserTokensUsageChart: FC<UserTokensUsageChartProps> = ({
  userId,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [operations, setOperations] = useState<UserOperation[]>([]);
  const fetchData = useCallback(async () => {
    const userOperations = await getAllUserOperations(userId);
    setOperations(userOperations);
  }, [userId]);

  useEffect(() => {
    setIsLoading(true);
    fetchData().finally(() => setIsLoading(false));
  }, [fetchData, userId]);

  return (
    <S.StyledUserTokensUsageChart>
      <WidgetTitle level="h3">
        {isLoading ? "Загрузка..." : "Использование токенов"}
      </WidgetTitle>

      {!isLoading && operations.length > 0 ? (
        <UserTokensChart />
      ) : (
        <WidgetTitle level="h2">Операции отсутствуют</WidgetTitle>
      )}
    </S.StyledUserTokensUsageChart>
  );
};
