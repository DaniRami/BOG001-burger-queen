// import React from "react";
// import { useState } from "react";
// import Extras from "../extra";
 
// import "../ventanas/modal.css";

// const Modall = ({item, carrito, addProducto}) => {
//   const extrasList = [
//     "Meat",
//     "Chicken",
//     "Vegetarian",
//     "cheese",
//     "Onion rings",
//     "egg",
//     "French fries",
//   ];

//   function getDefaultExtras() {
//     return extrasList.map((extra) => ({
//       ingrediente: extra,
//       checked: false,
//     }));
//   }

//   const extras = useExtras()
//   function useExtras(defaultExtra) {
//     const [extras, setExtras] = useState(defaultExtra || getDefaultExtras());

//     function checkExtra(i) {
//       const newExtras = [...extras];
//       newExtras[i] = { ...newExtras[i], checked: !newExtras[i].checked };
//       setExtras(newExtras);
//     }

//     function resetExtras() {
//       setExtras(getDefaultExtras());
//     }

//     return {
//       checkExtra,
//       extras,
//       resetExtras,
//     };
//   }

//   const order = {
//     ...item,
//     extras: extras.extras,
//   };
//   const [state, setState] = useState({
//     visible: false,
//   });

//   const addToOrder = () => {
//     addProducto(order);
//     extras.resetExtras();
//     setState({
//       visible: false,
//     });
//   };

//   const handleCancel = (e) => {
//     setState({
//       visible: false,
//     });
//     extras.resetExtras();
//   };

//   function hasExtras(item) {
//     return item.extras === "extras";
//   }

//   return (
//     <div
//       className="modal-content"
//       key={item.id}
//       visible={state.visible}>
//       <header className="modal-header" id="closeModal">
//         <h1 id="headerModal">{item.name}</h1>
//         <span className="close" onClick={handleCancel}>&times;</span>
//       </header>
//       <article className="modal-body">
//         <section className="contentElement">
//           <img src={item.photo} alt="comidas" />

//           <h2>{item.price}</h2>
//           {hasExtras(item) && (
//             <>
//               <h4>Agregar Extras:</h4>
//               <Extras {...extras} />
//             </>
//           )}
//           <button className="order-modal" onClick={addToOrder}>
//             order
//           </button>
//         </section>
//       </article>
//     </div>
//   );
// };

// export default Modall;
