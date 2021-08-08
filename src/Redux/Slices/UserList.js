import createItemListSlice from "./Generators/CreateItemListSlice";

export const SLICE_NAME = "userList";
export const {
  slice,
  loadListAsync,
  loadByIdAsync,
  selectList,
  selectPage,
  selectSingle,
  selectSearch,
  selectIsLoading,
} = createItemListSlice({
  sliceName: SLICE_NAME,
  url: "/api/users",
  singleUrl: "/api/user",
});

export const { setList, setPage, setSearch } = slice.actions;

export default slice.reducer;
