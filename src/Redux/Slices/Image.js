import { createSlice } from "@reduxjs/toolkit";
import APIConnection from "../../Common/APIConnection";
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

  const connection = await new APIConnection(`${process.env.REACT_APP_API_URL}/api/prediction`).setBody(imageBinaryData, 'binary').addHeader('Content-Length', size).authorizeJWT(token).connectPOST();

  const { src, description, bboxes } = connection;

  return dispatch(
    uploadImage({ src: src, description: description, bboxes: bboxes })
  );
};

export const selectSrc = (state) => state.image.src;
export const selectBBoxes = (state) => state.image.bboxes;
export const selectDescription = (state) => state.image.description;

export default imageSlice.reducer;
