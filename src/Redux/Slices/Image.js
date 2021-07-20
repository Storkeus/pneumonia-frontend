import { createSlice } from "@reduxjs/toolkit";
import { readFile } from "../../Common/ReadFile";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    src: "",
    description: "",
    bboxes: [],
  },
  reducers: {
    uploadImage: (state, action) => {
      const { src, description, bboxes } = action.payload;
      state.src = src;
      state.description = description;
      state.bboxes = bboxes;
      console.log("ZAPISUJĘ!");
    },
  },
});

export const { uploadImage } = imageSlice.actions;

export const uploadImageAsync = (image) => async (dispatch, getState) => {
  const {
    user: { token },
  } = getState();

  const { size } = image;
  const imageBinaryData = await readFile(image);

  const connection = await fetch(
    `${process.env.REACT_APP_API_URL}/api/prediction`,
    {
      mode: "cors", // no-cors, *cors, same-origin
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/octet-stream",
        "Content-Length": size,
      },
      body: imageBinaryData,
    }
  );

  const { src, description, bboxes } = await connection.json();

  return dispatch(
    uploadImage({ src: src, description: description, bboxes: bboxes })
  );
};

export const selectSrc = (state) => state.image.src;
export const selectBBoxes = (state) => state.image.bboxes;
export const selectDescription = (state) => state.image.description;

export default imageSlice.reducer;
