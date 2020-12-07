const functions = require('firebase-functions')
const admin = require('firebase-admin')

var  firebaseConfig = {
    apiKey: "AIzaSyBEbaNgHmvkx-U64rdzmFPq1CReIRq7q08",
    authDomain: "burgerqeen-e5933.firebaseapp.com",
    databaseURL: "https://burgerqeen-e5933.firebaseio.com",
    projectId: "burgerqeen-e5933",
    storageBucket: "burgerqeen-e5933.appspot.com",
    messagingSenderId: "833418667343",
    appId: "1:833418667343:web:1243cf00d2d3786c34513a"
  };

var defaultApp = admin.initializeApp(firebaseConfig);
var defaultAuth = defaultApp.auth();
var defaultDatabase = defaultApp.firestore();
admin.firestore().settings({ timestampsInSnapshots: true });

//const collectionOrders = admin.firestore().collection('orders');

export const getOrder = async () => {
  try {
    debugger
    var firebaseStore = await defaultDatabase.collection("orders").get().then((res) => console.log(res));
    console.log(firebaseStore)
  } catch (error) {
    console.error(error)
  }

}
  

// export const createOrder = async () => {
//    return await collectionOrders.doc().get()
// }

// exports.createProfile = functions.auth.user().onCreate(
//   user => admin.firestore().doc(`users/${user.uid}`).collection().get.set({
//     email: user.email,
//     displayName: user.displayName,
//     photoURL: user.photoURL,
//     createdAt: new Date(),
//   })
// );


// exports.deleteProfile = functions.auth.user().onDelete(
//   user => admin.firestore().doc(`users/${user.uid}`).delete()
// );
