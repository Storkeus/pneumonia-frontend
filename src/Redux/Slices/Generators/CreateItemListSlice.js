import { PATIENT_FEMALE, PATIENT_MALE } from "../../../Common/PatientConst";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Returns Redux slice with sliceName that handles basic item list operations
 * by connecting with url
 */

const createItemListSlice = ({ sliceName, url }) => {
  const itemList = createSlice({
    name: sliceName,
    initialState: {
      list: [],
      page: 1,
      search: "",
      isLoading: false,
      loadingCounter: 0,
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

  const { setList, setPage, setSearch, setIsLoading } = itemList.actions;

  const loadListAsync = () => (dispatch, getState) => {
    console.log("Connecting to: " + url);
    dispatch(setIsLoading(true));
    const { loadingCounter: initialLoadingCounter } = getState()[sliceName];
    setTimeout(() => {
      const { loadingCounter: finalLoadingCounter } = getState()[sliceName];

      console.log(initialLoadingCounter, finalLoadingCounter, getState());
      if (initialLoadingCounter < finalLoadingCounter) {
        return;
      }

      let list;

      if (url === "/patients") {
        list = [
          {
            id: Math.floor(Math.random() * 1000),
            name: "Jan",
            surname: "Kowalski",
            age: 45,
            sex: PATIENT_MALE,
          },
          {
            id: Math.floor(Math.random() * 1000),
            name: "Janinia",
            surname: "Kowalska",
            age: 34,
            sex: PATIENT_FEMALE,
          },
        ];
      }

      if (url === "/users") {
        list = [
          {
            id: Math.floor(Math.random() * 1000),
            name: "Jan",
            surname: "Kowalski",
            login: "jan.kowalski@example.com",
          },
          {
            id: Math.floor(Math.random() * 1000),
            name: "Janinia",
            surname: "Kowalska",
            login: "janina.kowalska@example.com",
          },
        ];
      }
      dispatch(setList(list));
      dispatch(setIsLoading(false));
    }, 1000);
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

  return {
    slice: itemList,
    loadListAsync: loadListAsync,
    selectList: selectList,
    selectPage: selectPage,
    selectSearch: selectSearch,
    selectIsLoading: selectIsLoading,
  };
};

export default createItemListSlice;
