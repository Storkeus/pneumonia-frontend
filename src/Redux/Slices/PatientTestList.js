import createItemListSlice from "./Generators/CreateItemListSlice";

export const SLICE_NAME = "patientTestList";
export const {
  slice,
  loadListAsync,
  selectList,
  loadByIdAsync,
  selectSingle,
  selectPage,
  selectSearch,
  selectIsLoading,
} = createItemListSlice({ sliceName: SLICE_NAME, url: "/api/patients", resource: "tests" });

export const { setList, setPage, setSearch } = slice.actions;

export default slice.reducer;
