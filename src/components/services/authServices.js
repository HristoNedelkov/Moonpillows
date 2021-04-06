import firebase from '../../firebase'

function login(username, password) {
   return firebase.auth().signInWithEmailAndPassword(username, password)
}

function register(username, password) {
    return firebase.auth().createUserWithEmailAndPassword(username, password)
}

export {
    login,
    register
}