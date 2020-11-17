const initalState = { nextNo: 0 };
export default function rootReducer(state = initalState, action) {
  switch (action.type) {
    case "next":
      if (action.payload.nextNo !== 2) {
        return { nextNo: action.payload.nextNo + 1 };
      } else {
        return { nextNo: 0 };
      }
    default:
      return state;
  }
}
