import * as S from "./OrganizationUsers.styled";
import { WidgetTitle } from "@shared/ui";
import { OrgUsersTable, SearchOrgUsers } from "@features";

export const OrganizationUsers = () => {
  return (
    <S.StyledOrganizationUsers>
      <WidgetTitle>Пользователи</WidgetTitle>
      <SearchOrgUsers />
      <OrgUsersTable />
    </S.StyledOrganizationUsers>
  );
};
