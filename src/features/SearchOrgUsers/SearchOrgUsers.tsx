import { useEffect, useState } from "react";
import { fetchOrgUsers, updateSearchQuery } from "@entities";
import { useAppDispatch, useDebounce } from "@shared";
import SearchIcon from "@shared/icons/search.svg";
import * as S from "./SearchOrgUsers.styled";

export const SearchOrgUsers = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 100);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateSearchQuery(debouncedSearch));
    dispatch(fetchOrgUsers());
  }, [debouncedSearch, dispatch]);

  return (
    <S.StyledSearchOrgUsers>
      <S.SearchIcon>
        <SearchIcon />
      </S.SearchIcon>

      <S.SearchInput
        placeholder="Поиск"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </S.StyledSearchOrgUsers>
  );
};
