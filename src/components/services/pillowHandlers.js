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

async function getAll() {

    const database = await firebase.database();

    let res = await database.ref().child('pillows').get()

    if (res.exists()) {
        let snap = await res.val()
        return Object.entries(snap)
    } else {
        console.log("No data available");
    }
}

function onChunks(array, n) {
    let all = [];
    while (array.length > 0) {
        if (array.length <= n) {
            all.push(array)
            array = []
        } else {
            let part = array.splice(1, n)

            all.push(part)
        }

    }
    return all;

}


export {
    getAll,
    addPillow,
    onChunks,

}
