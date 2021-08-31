import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadListAsync,
  selectList,
  selectPage,
  selectSearch,
  selectIsLoading,
  setPage,
  removeAsync,
  setSearch,
} from "../Redux/Slices/UserList";
import AuthAdmin from "./Auth/AuthAdmin";
import ItemList from "./ItemList/ItemList";
import Page from "./Page/Page";
import { useHistory } from "react-router";

/**
 * User list page
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const UserList = (props) => {
  const dispatch = useDispatch();
  const userList = useSelector(selectList);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  const isLoading = useSelector(selectIsLoading);

  let history = useHistory();

  /**
   * Loading list of patients
   */
  useEffect(() => {
    dispatch(loadListAsync());
  }, [dispatch]);

  /**
   * Handling searching on ItemList
   * @param {string} keyword
   */
  const handleSearchChange = (event) => {
    const keyword = event.target.value;
    dispatch(setSearch({ search: keyword }));
    dispatch(loadListAsync());
  };

  /**
   * Handling page change on ItemList
   * @param {int} page
   */
  const handlePageChange = (page) => {
    dispatch(setPage({ page: page }));
    dispatch(loadListAsync());
  };

  /**
   * Handling edit action performed on ItemList
   * @param {int} id
   */
  const handleActionEdit = (id, history) => {
    history.push(`/users/${id}/edit`);
  };

  /**
   * Handling remove action performed on ItemList
   * @param {int} id
   */
  const handleActionRemove = ({ id }) => {
    dispatch(removeAsync(id));
  };

  return (
    <AuthAdmin>
      <Page title="Lista użytkowników">
        <ItemList
          isLoading={isLoading}
          page={page}
          maxPage={userList && userList.max_page ? userList.max_page : 1}
          search={search}
          handlePageChange={handlePageChange}
          handleSearchChange={handleSearchChange}
          head={[
            { name: "ID", columnName: "id" },
            { name: "E-mail", columnName: "email" },
            { name: "Imię", columnName: "first_name" },
            { name: "Nazwisko", columnName: "last_name" },
          ]}
          rows={userList ? userList.users : []}
          actions={[
            {
              title: "Edytuj dane użytkownika",
              name: "Edytuj",
              handler: ({ id }) => handleActionEdit(id, history),
            },
            {
              title: "Usuń użytkownika",
              name: "Usuń",
              handler: handleActionRemove,
            },
          ]}
        ></ItemList>
      </Page>
    </AuthAdmin>
  );
};

export default UserList;
