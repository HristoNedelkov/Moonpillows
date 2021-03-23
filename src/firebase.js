import  firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyAjPy-_P-jyW3gKLp3m_hC-Y7j1IkI9slg",
    authDomain: "moonpillows-676c2.firebaseapp.com",
    projectId: "moonpillows-676c2",
    storageBucket: "moonpillows-676c2.appspot.com",
    messagingSenderId: "1040908882334",
    appId: "1:1040908882334:web:b9cec53a710b54d606468f"
};
firebase.initializeApp(firebaseConfig);

export default firebase;