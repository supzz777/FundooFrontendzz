import {toggleView,drawer, TOGGLE_DRAWER} from "../Redux/ActionType.js"

// export const tOOgleView = () =>{
//     return{
//         type:toggleView ,
//         payload: , //value passed during calling action
//     }
// }


// export const draWer = () =>{
//     return{
//         type:drawer ,
//         payload:sdg ,
//     }
// }
 export const toggleDrawer =() =>{
     return{
         type: TOGGLE_DRAWER,
     }
 }