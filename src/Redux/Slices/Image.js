import { createSlice } from "@reduxjs/toolkit";
import APIConnection from "../../Common/APIConnection";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    src: "",
    id: null,
    chance: 0,
    description: "",
    bboxes: [],
  },
  reducers: {
    uploadImage: (state, action) => {
      const { id, chance, src, description, bboxes } = action.payload;
      state.src = src;
      state.id = id;
      state.chance = chance;
      state.description = description;
      state.bboxes = bboxes;
    },
  },
});

export const { uploadImage } = imageSlice.actions;

export const uploadImageAsync = (userId, image) => async (dispatch, getState) => {
  const {
    user: { token },
  } = getState();

  const formData = new FormData()

  formData.append('image', image);

  const connection =
    await new APIConnection(`${process.env.REACT_APP_API_URL}/api/patients/${userId}/prediction`)
      .setBody(formData, 'form')
      .authorizeJWT(token)
      .connectPOST();

  const { src, description, bboxes, chance, id } = connection;

  return dispatch(
    uploadImage({ src: src, description: description, bboxes: bboxes, chance: chance, id: id })
  );
};

export const selectSrc = (state) => state.image.src;
export const selectBBoxes = (state) => state.image.bboxes;
export const selectDescription = (state) => state.image.description;
export const selectId = (state) => state.image.id;
export const selectChance = (state) => state.image.chance;

export default imageSlice.reducer;
