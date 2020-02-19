import {
  toggleView,
  drawer,
  TOGGLE_DRAWER
} from "../Redux/ActionType.js"

const initialState = {
  openDrawer: false,
  display: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_DRAWER: {
      return {
        ...state,
        openDrawer: !state.openDrawer
      };
    }

    // case TOGGLE_VIEW: {
    //   return {
    //     ...state, //spread operator(copying) = ...
    //     view: !state.view
    //   };
    // }

  }
};

export default reducer;