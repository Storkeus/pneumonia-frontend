import createItemListSlice from "./Generators/CreateItemListSlice";

export const SLICE_NAME = "patientList";
export const {
  slice,
  loadListAsync,
  removeAsync,
  selectList,
  loadByIdAsync,
  selectSingle,
  selectPage,
  selectSearch,
  selectIsLoading,
} = createItemListSlice({ sliceName: SLICE_NAME, url: "/api/patients", singleUrl: "/api/patients" });

export const { setList, setPage, setSearch } = slice.actions;

export default slice.reducer;
