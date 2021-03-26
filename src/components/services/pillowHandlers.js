import firebase from '../../firebase'

function addPillow([text, label, src, description]) {
    const pillowData = {
        text,
        label,
        src,
        description,
    };

    const newPostKey = firebase.database().ref().child('pillows').push().key;
    const updates = {};
    updates['/pillows/' + newPostKey] = pillowData;

    return firebase.database().ref().update(updates);

}
export default addPillow
