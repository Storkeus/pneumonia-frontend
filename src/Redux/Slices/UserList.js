import createItemListSlice from "./Generators/CreateItemListSlice";

export const SLICE_NAME = "userList";
export const {
  slice,
  loadListAsync,
  removeAsync,
  loadByIdAsync,
  selectList,
  selectPage,
  selectSingle,
  selectSearch,
  selectIsLoading,
} = createItemListSlice({
  sliceName: SLICE_NAME,
  url: "/api/users",
  singleUrl: "/api/users",
});

export const { setList, setPage, setSearch } = slice.actions;

export default slice.reducer;
