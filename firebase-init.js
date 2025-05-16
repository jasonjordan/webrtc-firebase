const config = {
    apiKey: "AIzaSyAVGQi8Shm9nxyDKupuQCYMPT6PpRlSlBU",
    authDomain: "tripchat2.firebaseapp.com",
    projectId: "tripchat2",
    storageBucket: "tripchat2.firebasestorage.app",
    messagingSenderId: "565535776882",
    appId: "1:565535776882:web:bffaf1fc7506470e5e22eb",
    measurementId: "G-WED154QNSP",
    databaseUrl: "https://tripchat2-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(config)

const database = firebase.database().ref()

export { database }
