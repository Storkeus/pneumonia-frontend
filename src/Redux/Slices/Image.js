import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "image",
  initialState: {
    src: "",
  },
  reducers: {
    uploadImage: (state, action) => {
      const { src } = action.payload;
      state.src = src;
    },
  },
});

export const { uploadImage } = userSlice.actions;

export const uploadImageAsync = (image) => async (dispatch, getState) => {
  const {
    user: { token },
  } = getState();

  const { size } = image;
  const reader = new FileReader();
  reader.onload = async function (event) {
    const imageBinaryData = event.target.result;
    console.log(imageBinaryData.length);
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

    const result = await connection.text();
  };
  reader.readAsArrayBuffer(image);
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
