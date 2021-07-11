import createItemListSlice from "./Generators/CreateItemListSlice";

export const SLICE_NAME = "patientList";
export const {
  slice,
  loadListAsync,
  selectList,
  loadByIdAsync,
  selectSingle,
  selectPage,
  selectSearch,
  selectIsLoading,
} = createItemListSlice({ sliceName: SLICE_NAME, url: "/patients" });

export const { setList, setPage, setSearch } = slice.actions;

export default slice.reducer;
