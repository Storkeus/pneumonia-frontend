// import { PATIENT_FEMALE, PATIENT_MALE } from "../../../Common/PatientConst";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import APIConnection from "../../../Common/APIConnection";

/**
 * Returns Redux slice with sliceName that handles basic item list operations
 * by connecting with url
 */

const createItemListSlice = ({ sliceName, url, singleUrl, resource = null }) => {
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
        if (state.search !== search) {

          state.page = 1;
        }
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
  const loadByIdAsync = (id) => async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    try {
      const connectionResult = await new APIConnection(`${process.env.REACT_APP_API_URL}${singleUrl}/${id}`).authorizeJWT(getState()['user'].token).connectGET();


      if (!connectionResult) {
        throw new Error('No connection result');
      }

      dispatch(
        setSingle(connectionResult)
      );


    } catch (error) {
      dispatch(setSingle({}));
    }
    dispatch(setIsLoading(false));
  };


  /**
   * Removes single position
   */
  const removeAsync = (id, parent_id = false) => async (dispatch, getState) => {
    try {
      const connectionResult = await new APIConnection(`${process.env.REACT_APP_API_URL}${singleUrl}/${id}`).authorizeJWT(getState()['user'].token).connectDELETE();


      if (!connectionResult) {
        throw new Error('No connection result');
      }
      else {
        toast.success('Pozycja usunięta');

      }


    } catch (error) {
      toast.error('Nie udało się usunąć pozycji');


    }
    dispatch(
      loadListAsync(parent_id)
    );


  };

  /**
 * Removes single position
 */
  const updateAsync = (id, parent_id = false) => async (dispatch, getState) => {
    try {
      const connectionResult = await new APIConnection(`${process.env.REACT_APP_API_URL}${singleUrl}/${id}`).authorizeJWT(getState()['user'].token).connectPUT();


      if (!connectionResult) {
        throw new Error('No connection result');
      }
      else {
        toast.success('Zmiany zostały zapisane');

      }


    } catch (error) {
      toast.error('Nie udało się zapisać zmian');


    }
    dispatch(
      loadListAsync(parent_id)
    );


  };


  const loadListAsync = (id = '') => async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    const { loadingCounter: initialLoadingCounter, page, search } = getState()[sliceName];

    try {

      const connectionResult = await new APIConnection(`${process.env.REACT_APP_API_URL}${url}${id ? `/${id}` : ''}${resource ? `/${resource}` : ''}?page=${page}${search ? `&keyword=${search}` : ''}`).authorizeJWT(getState()['user'].token).connectGET();
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
    removeAsync: removeAsync,
    updateAsync: updateAsync
  };
};

export default createItemListSlice;
