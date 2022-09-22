const initialState = {
  contacts: {
    items: [],
    filter: '',
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContacts": 
      return {
        ...state,
        items: [
          ...state.contacts.items,
          action.payload,
        ],
      };
    case "contacts/deleteContacts":
      return {
        ...state,
        items: state.contacts.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

