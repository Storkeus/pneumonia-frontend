import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadListAsync,
  selectList,
  selectPage,
  selectSearch,
  selectIsLoading,
  setPage,
  setSearch,
} from "../Redux/Slices/UserList";
import AuthAdmin from "./Auth/AuthAdmin";
import ItemList from "./ItemList/ItemList";
import Page from "./Page/Page";

const UserList = (props) => {
  const dispatch = useDispatch();
  const patientList = useSelector(selectList);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  const isLoading = useSelector(selectIsLoading);

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
  const handleActionEdit = (id) => {
    console.log("EDYTUJĘ!!!", id);
  };

  /**
   * Handling remove action performed on ItemList
   * @param {int} id
   */
  const handleActionRemove = (id) => {
    console.log("USUWAM!!!", id);
  };

  return (
    <AuthAdmin>
      <Page title="Lista użytkowników">
        <ItemList
          isLoading={isLoading}
          page={page}
          search={search}
          handlePageChange={handlePageChange}
          handleSearchChange={handleSearchChange}
          head={[
            { name: "ID", columnName: "id" },
            { name: "Login", columnName: "login" },
            { name: "Imię", columnName: "name" },
            { name: "Nazwisko", columnName: "surname" },
          ]}
          rows={patientList}
          actions={[
            {
              title: "Edytuj dane użytkownika",
              name: "Edytuj",
              handler: handleActionEdit,
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
