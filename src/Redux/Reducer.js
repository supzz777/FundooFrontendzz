import {toggleView,drawer} from "../Redux/ActionType.js"

export const initialState={
    openDrawer=false,
    display:true,
};

const reducer = (State = initialState, action) => {
    switch (action.type) {

        case DRAWER: {
            return {
              ...State,
              openDrawer: !State.openDrawer
            };
          }
      
       
          case TOGGLE_VIEW: {
            return {
              ...State,
              view: !State.view
            };
          }
      


    }
};
