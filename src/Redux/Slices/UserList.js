import createItemListSlice from "./Generators/CreateItemListSlice";

export const SLICE_NAME = "userList";
export const { slice, 
    loadListAsync,
    selectList,
    selectPage,
    selectSearch,
    selectIsLoading, } =
  createItemListSlice({ sliceName: SLICE_NAME, url: "/users" });

export const { setList, setPage, setSearch } = slice.actions;

export default slice.reducer;