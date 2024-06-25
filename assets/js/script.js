// // const job1 = document.getElementById("j1");
// // const job2 = document.getElementById("j2");
// // const job3 = document.getElementById("j3");
// // const job4 = document.getElementById("j4");

// // const bdj = document.getElementById("bdj");
// // const bdj2 = document.getElementById("bdj2");
// // const bdj3 = document.getElementById("bdj3");
// // const bdj4 = document.getElementById("bdj4");

// // job1.addEventListener("click", (e) => {
// //   e.preventDefault();

// //   location.href = "../../privact-job/privetJoc.html";
// //   bdj2.style.display = "none";
// //   bdj3.style.display = "none";
// //   bdj4.style.display = "none";
// //   bdj.style.display = "none";
// // });
// // Import the Firebase SDK
// import firebase from 'firebase/app';
// import 'firebase/messaging';

// // Initialize Firebase with your credentials
// // const firebaseConfig = {
// //   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_AUTH_DOMAIN",
// //   projectId: "YOUR_PROJECT_ID",
// //   storageBucket: "YOUR_STORAGE_BUCKET",
// //   messagingSenderId: "YOUR_SENDER_ID",
// //   appId: "YOUR_APP_ID"
// // };

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBLdnMNkwaH_ljIBybU5N-fxKlOQQQmzlw",
//   authDomain: "dailycakrirkhoj.firebaseapp.com",
//   projectId: "dailycakrirkhoj",
//   storageBucket: "dailycakrirkhoj.appspot.com",
//   messagingSenderId: "296771586724",
//   appId: "1:296771586724:web:c1acc6b0c1edd42c127431",
//   measurementId: "G-3CS93NVZF3"
// };

// firebase.initializeApp(firebaseConfig);

// // Retrieve the messaging object
// const messaging = firebase.messaging();

// // Request permission from the user to receive notifications
// messaging.requestPermission()
//   .then(() => {
//     console.log('Notification permission granted.');

//     // Get the token
//     return messaging.getToken();
//   })
//   .then(token => {
//     console.log('Token:', token);
//     // Send the token to your server to associate it with the user
//   })
//   .catch(err => {
//     console.log('Unable to get permission to notify.', err);
//   });

// // Handle received messages
// messaging.onMessage(payload => {
//   console.log('Message received:', payload);
//   // Handle the received message
// });
