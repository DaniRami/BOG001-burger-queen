import firebase from 'firebase/app'
import 'firebase/firestore'
// import { getOrder } from './functions';
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
 

var  firebaseConfig = {
    apiKey: "AIzaSyBEbaNgHmvkx-U64rdzmFPq1CReIRq7q08",
    authDomain: "burgerqeen-e5933.firebaseapp.com",
    databaseURL: "https://burgerqeen-e5933.firebaseio.com",
    projectId: "burgerqeen-e5933",
    storageBucket: "burgerqeen-e5933.appspot.com",
    messagingSenderId: "833418667343",
    appId: "1:833418667343:web:1243cf00d2d3786c34513a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  db.settings({
    cacheSizeBytes: db.CACHE_SIZE_UNLIMITED,
  })


  db.enablePersistence().catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully
 
  export const createOrder = (order) => db.collection("orders").add(order)
  export const viewOrders = () => db.collection('orders').where('status', '==', 'in progress').orderBy('date', 'desc');
  export const viewDoneOrders = () => db.collection('orders').where("status", "==", "done");
  export const viewDelivers = () => db.collection('orders').where("status", "==", "ready");
const getData = []



 export const updateOrder = (id) => {
   console.log(id)
  db.collection('orders').doc(id).update({status: "done"}).then(() => {
      toast.success('pedido listo para entregar', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide
          });
  })
  .catch((error) =>{
    console.log(error)
      toast.error('Ocurrió un error, inténtalo de nuevo en un momento', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide
          });
  })   
}


export const updateDone = (id) => {
  console.log(id)
 db.collection('orders').doc(id).update({status: "ready"}).then(() => {
     toast.success('pedido entregado', {
         className: "rounder-edges",
         position: "top-center",
         autoClose: 4000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         transition: Slide
         });
 })
 .catch((error) =>{
   console.log(error)
     toast.error('Ocurrió un error, inténtalo de nuevo en un momento', {
         className: "rounder-edges",
         position: "top-center",
         autoClose: 4000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         transition: Slide
         });
 })   
}
