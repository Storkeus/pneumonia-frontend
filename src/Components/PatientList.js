import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATIENT_MALE } from "../Common/PatientConst";
import {
  loadListAsync,
  selectList,
  selectPage,
  selectSearch,
  selectIsLoading,
  setPage,
  setSearch,
  removeAsync,
} from "../Redux/Slices/PatientList";
import AuthUser from "./Auth/AuthUser";
import ItemList from "./ItemList/ItemList";
import Page from "./Page/Page";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
 * Patient list page
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const PatientList = (props) => {
  const dispatch = useDispatch();
  const patientList = useSelector(selectList);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  const isLoading = useSelector(selectIsLoading);
  const history = useHistory();

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
    history.push(`/patients/${id}/edit`);
  };

  /**
 * Handling test action performed on ItemList of patients
 * @param {int} id
 */
  const handleActionTest = (id, history) => {
    history.push(`/patients/${id}/upload-image`);
  };

  /**
 * Handling open test list action performed on ItemList of patients
 * @param {int} id
 */
  const handleActionOpenTestList = (id, history) => {
    history.push(`/patients/${id}/tests`);
  };



  /**
   * Handling remove action performed on ItemList
   * @param {int} id
   */
  const handleActionRemove = ({ id }) => {

    confirmAlert({
      title: 'Usuwanie',
      message: 'Czy na pewno chcesz usunąć pacjenta?',
      buttons: [
        {
          label: 'Tak, usuń',
          onClick: () => dispatch(removeAsync(id))
        },
        {
          label: 'Nie'
        }
      ],
      overlayClassName: "confirmation-modal"
    });



  };

  return (
    <AuthUser>
      <Page title="Lista pacjentów">
        <ItemList
          isLoading={isLoading}
          page={page}
          maxPage={patientList && patientList.max_page ? patientList.max_page : 1}
          search={search}
          handlePageChange={handlePageChange}
          handleSearchChange={handleSearchChange}
          head={[
            { name: "ID", columnName: "ident" },
            { name: "Imię", columnName: "first_name" },
            { name: "Nazwisko", columnName: "last_name" },
            { name: "Data urodzenia", columnName: "birth_date" },
            { name: "Płeć", columnName: "sex", modifier: ({ sex: value }) => value === PATIENT_MALE ? 'M' : 'K' },
          ]}
          rows={patientList ? patientList.patients : []}
          actions={[
            {
              title: "Prześlij zdjęcie klatki piersiowej",
              name: "Zbadaj",
              handler: ({ id }) => handleActionTest(id, history),
            },
            {
              title: "Wyświetl badania powiązane z pacjentem",
              name: "Lista badań",
              handler: ({ id }) => handleActionOpenTestList(id, history),
            },
            {
              title: "Edytuj dane pacjenta",
              name: "Edytuj",
              handler: ({ id }) => handleActionEdit(id, history),
            },
            {
              title: "Usuń pacjenta",
              name: "Usuń",
              handler: handleActionRemove,
            },
          ]}
        ></ItemList>
      </Page>
    </AuthUser>
  );
};

export default PatientList;
