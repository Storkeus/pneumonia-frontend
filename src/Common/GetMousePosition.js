export const getMousePositionRelativeTo = (event, ref) => {

    const { left: offsetLeft, top: offsetTop } = ref.current.getBoundingClientRect();

    const currentCoord = { x: event.clientX - offsetLeft, y: event.clientY - offsetTop };
    return currentCoord;

};
