import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  loadListAsync,
  setPage,
  removeAsync,
  selectList,
  selectPage,
  selectIsLoading
} from "../Redux/Slices/PatientTestList";
import AuthAdmin from "./Auth/AuthAdmin";
import ItemList from "./ItemList/ItemList";
import Page from "./Page/Page";
import PredictionImage from "./PredictionImage/PredictionImage";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
 * Test of patients list page
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const TestList = (props) => {
  const dispatch = useDispatch();
  const testList = useSelector(selectList);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  const { id: patientId } = useParams();

  /**
   * Loading list of patients' tests
   */
  useEffect(() => {
    dispatch(loadListAsync(patientId));
  }, [dispatch, patientId]);

  /**
 * Handling page change on ItemList
 * @param {int} page
 */
  const handlePageChange = (page) => {
    dispatch(setPage({ page: page }));
    dispatch(loadListAsync(patientId));
  };

  /**
   * Handling remove action performed on ItemList
   * @param {int} id
   */
  const handleActionRemove = async ({ id }) => {


    confirmAlert({
      title: 'Usuwanie',
      message: 'Czy na pewno chcesz usunąć badanie?',
      buttons: [
        {
          label: 'Tak, usuń',
          onClick: () => dispatch(removeAsync(id, patientId))
        },
        {
          label: 'Nie'
        }
      ],
      overlayClassName: "confirmation-modal"
    });

  };



  return (
    <AuthAdmin>
      <Page title="Lista badań ">
        <ItemList
          isLoading={isLoading}
          page={page}
          maxPage={testList && testList.max_page ? testList.max_page : 1}
          handlePageChange={handlePageChange}
          head={[
            {
              name: "Zdjęcie", columnName: "id", modifier: ({ areas, id }) =>
                <PredictionImage
                  bboxes={areas}
                  src={`${process.env.REACT_APP_API_URL}/images/predictions/${patientId}/${id}.jpg`}
                  alt=""
                  style={{ height: '300px' }}
                />
            },
            {
              name: "Data", columnName: "date", modifier: ({ date }) => {
                const dateSplited = date.split('T');
                const day = dateSplited[0];
                const timeSplited = dateSplited[1].split('.');

                return `${day} ${timeSplited[0]}`;
              }
            },
            { name: "Opis - model", columnName: "description_model" },
            { name: "Opis - korekta", columnName: "description_correction" },
          ]}
          rows={testList ? testList.tests : []}
          actions={[
            {
              title: "Usuń pacjenta",
              name: "Usuń",
              handler: handleActionRemove,
            }
          ]}
        ></ItemList>
      </Page>
    </AuthAdmin>
  );
};

export default TestList;
