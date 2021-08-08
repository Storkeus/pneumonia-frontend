// import { PATIENT_FEMALE, PATIENT_MALE } from "../../../Common/PatientConst";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import APIConnection from "../../../Common/APIConnection";

/**
 * Returns Redux slice with sliceName that handles basic item list operations
 * by connecting with url
 */

const createItemListSlice = ({ sliceName, url, singleUrl }) => {
  const itemList = createSlice({
    name: sliceName,
    initialState: {
      list: [],
      page: 1,
      search: "",
      isLoading: false,
      loadingCounter: 0,
      single: {},
    },
    reducers: {
      setList: (state, action) => {
        const list = action.payload;
        state.list = list;
      },
      setPage: (state, action) => {
        const { page } = action.payload;
        state.page = page;
      },
      setSingle: (state, action) => {
        const single = action.payload;
        state.single = single;
      },
      setSearch: (state, action) => {
        const { search } = action.payload;
        state.search = search;
      },
      setIsLoading: (state, action) => {
        const isLoading = action.payload;
        state.isLoading = isLoading;
        if (isLoading) {
          state.loadingCounter++;
        }
      },
    },
  });

  // eslint-disable-next-line no-unused-vars
  const { setList, setPage, setSearch, setIsLoading, setSingle } =
    itemList.actions;

  /**
   * Loads single position for example for edit form
   */
  const loadByIdAsync = () => async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    try {
      const connection = await fetch(singleUrl);
      const result = await connection.text();

      if (result) {
        dispatch(
          setSingle({
            id: Math.floor(Math.random() * 1000),
            name: "Jan",
            surname: "Kowalski",
            login: "jan.kowalski@example.com",
          })
        );
      } else {
        dispatch(setSingle({}));
      }
    } catch (error) {
      dispatch(setSingle({}));
    }
    dispatch(setIsLoading(false));
  };

  const loadListAsync = () => async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    const { loadingCounter: initialLoadingCounter, page } = getState()[sliceName];

    try {

      const connectionResult = await new APIConnection(`${process.env.REACT_APP_API_URL}${url}?page=${page}`).authorizeJWT(getState()['user'].token).connectGET();
      const { loadingCounter: finalLoadingCounter } = getState()[sliceName];

      if (initialLoadingCounter < finalLoadingCounter) {
        return;
      }

      dispatch(setList(connectionResult ? connectionResult : []));
    } catch (error) {
      toast.error('Błąd połączenia.');
    }

    dispatch(setIsLoading(false));


  };

  const selectList = (state) => {
    return state[sliceName].list;
  };

  const selectPage = (state) => {
    return state[sliceName].page;
  };

  const selectSearch = (state) => {
    return state[sliceName].search;
  };

  const selectIsLoading = (state) => {
    return state[sliceName].isLoading;
  };

  const selectSingle = (state) => {
    return state[sliceName].single;
  };

  return {
    slice: itemList,
    loadListAsync: loadListAsync,
    loadByIdAsync: loadByIdAsync,
    selectList: selectList,
    selectPage: selectPage,
    selectSingle: selectSingle,
    selectSearch: selectSearch,
    selectIsLoading: selectIsLoading,
  };
};

export default createItemListSlice;
