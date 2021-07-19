/**
 * Loads application state from Local Storage
 * @returns undefined|object
 */
export const loadState = () => {
  try {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state === null) {
      throw Error("Application state not found");
    }
    return state;
  } catch (error) {
    return undefined;
  }
};

/**
 * Saves application state in Local Storage.
 * Returns true on success, false otherwise.
 * @param {object} state
 * @returns bool
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
    return true;
  } catch (error) {
    return false;
  }
};
