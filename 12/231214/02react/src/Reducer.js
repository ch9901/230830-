const initialState = { contactList: [], keyword: "" };

function Reducer(state = initialState, action) {
  // console.log(action);
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case "ADD_CONTACT":
      // return {
      //   ...state,
      //   contactList: [
      //     ...state.contactList,
      //     { name: payload.name, phoneNumber: payload.phoneNumber },
      //   ],
      // };
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_USERNAME":
      // return {
      //   ...state,
      //   contactList: [...state.contactList],
      //   keyword: payload.keyword,
      // };
      state.keyword = payload.keyword;
      break;
    // default:
    //   return { ...state };
  }
  return { ...state };
}

export default Reducer;
