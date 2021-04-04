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

    
    let j
    let chunk = n;
    let arr = []
    for (let i = 0, j = array.length; i < j; i += chunk) {
    let  temparray = array.slice(i, i + chunk);
        // do whatever
        arr.push(temparray)
    }
    console.log(arr)
    return arr
}


export {
    getAll,
    addPillow,
    onChunks,

}
