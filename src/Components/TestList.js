import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { HEALTHY, UNHEALTHY } from "../Common/PredictionConst";
import {
  loadListAsync,
  setPage,
  removeAsync,
  selectList,
  selectPage,
  selectIsLoading
} from "../Redux/Slices/PatientTestList";
import AuthAdmin from "./Auth/AuthAdmin";
import HealthyBadge from "./ItemList/HealthyBadge";
import ItemList from "./ItemList/ItemList";
import UnclearBadge from "./ItemList/UnclearBadge";
import UnhealthyBadge from "./ItemList/UnhealthyBadge";
import Page from "./Page/Page";
import PredictionImage from "./PredictionImage/PredictionImage";

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
    dispatch(removeAsync(id, patientId));
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
            { name: "Stan - model", columnName: "status_model", modifier: ({ status_model: status }) => status === HEALTHY ? <HealthyBadge /> : status === UNHEALTHY ? <UnhealthyBadge /> : <UnclearBadge /> },
            { name: "Opis - model", columnName: "description_model" },
            { name: "Stan - korekta", columnName: "status_correction", modifier: ({ status_correction: status }) => status === HEALTHY ? <HealthyBadge /> : status === UNHEALTHY ? <UnhealthyBadge /> : status ? <UnclearBadge /> : ' - ' },
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
