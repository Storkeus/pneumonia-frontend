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
} from "../Redux/Slices/PatientList";
import AuthAdmin from "./Auth/AuthAdmin";
import ItemList from "./ItemList/ItemList";
import Page from "./Page/Page";

const PatientList = (props) => {
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
    console.log("Szukam!!!", keyword);
  };

  /**
   * Handling page change on ItemList
   * @param {int} page
   */
  const handlePageChange = (page) => {
    dispatch(setPage({ page: page }));
    dispatch(loadListAsync());
    console.log("Zmieniam stronę!!!", page);
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
      <Page title="Lista pacjentów">
        <ItemList
          isLoading={isLoading}
          page={page}
          search={search}
          handlePageChange={handlePageChange}
          handleSearchChange={handleSearchChange}
          head={[
            { name: "ID", columnName: "id" },
            { name: "Imię", columnName: "name" },
            { name: "Nazwisko", columnName: "surname" },
            { name: "Wiek", columnName: "age" },
            { name: "Płeć", columnName: "sex" },
          ]}
          rows={patientList}
          actions={[
            {
              title: "Edytuj dane pacjenta",
              name: "Edytuj",
              handler: handleActionEdit,
            },
            {
              title: "Usuń pacjenta",
              name: "Usuń",
              handler: handleActionRemove,
            },
          ]}
        ></ItemList>
      </Page>
    </AuthAdmin>
  );
};

export default PatientList;
