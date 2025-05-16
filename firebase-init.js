const config = {
  apiKey: "AIzaSyAVGQi8Shm9nxyDKupuQCYMPT6PpRlSlBU",
  authDomain: "tripchat2.firebaseapp.com",
  databaseURL: "https://tripchat2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tripchat2",
  storageBucket: "tripchat2.firebasestorage.app",
  messagingSenderId: "565535776882",
  appId: "1:565535776882:web:e4914cee470759d95e22eb",
  measurementId: "G-JZ8HJR4DS8"
};

firebase.initializeApp(config)

const database = firebase.database().ref()

export { database }
