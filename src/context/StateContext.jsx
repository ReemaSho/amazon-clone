import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
//export const BasketContext = createContext();
// const BasketProvider = ({ children }) => {
//   const [basket, setBasket] = useState([]);
// i use this fun in single product
// const addToBasket()=>{
//const newItem = {id:productId}
// setBasket([...basket,newItem])
// }

// const controllerFun= (action)=>{
// switch(action ){
//   case "ADD_TO_BASKET"
//   //some logic

//   break;
//   case "REMOVE_FROM_BASKET"
//   //some logic

//   break;
//   default;
//   return;
// }
// }
// return (
//   <BasketContext.Provider value={{basket, addFunction , removeFunction}} >
//     {children}
//   </BasketContext.Provider>
// );
// };

//export { BasketContext, BasketProvider}

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
