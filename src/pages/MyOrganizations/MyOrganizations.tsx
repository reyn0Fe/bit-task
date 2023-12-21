import { useEffect } from "react";
import { Layout } from "@pages/ui";
import { OrganizationUsers } from "@widgets";
import { fetchOrgUsers } from "@entities";
import { useAppDispatch } from "@shared";

export const MyOrganizations = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrgUsers());
  }, [dispatch]);

  return (
    <Layout pageTitle="Мои организации">
      <OrganizationUsers />
    </Layout>
  );
};
