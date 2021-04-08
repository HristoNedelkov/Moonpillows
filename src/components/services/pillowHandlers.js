import firebase from '../../firebase'

function addPillow([text, label, src, description]) {
    const pillowData = {
        text,
        label,
        src,
        description,
        owners: ['some value'],
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
async function getAllForUser(uid) {

    const database = await firebase.database();

    let res = await database.ref().child('pillows').get()

    if (res.exists()) {
        let snap = await res.val()
        let result = Object.entries(snap).filter(([id, all]) => {
            if (all.owners.includes(uid)) {
                return [id, all]
            } else {
                return ''
            }
        })
        return result
    } else {
        console.log("No data available");
    }
}
async function getOne(id) {
    const database = await firebase.database();

    let res = await database.ref().child('pillows/' + id).get()

    if (res.exists()) {
        let snap = await res.val()
        return snap
    } else {
        console.log("No pillow found with this id!");
    }
}

// async function addUser () {
//     userRef.child('mike').update({'dateOfBirth': moment(value.dateOfBirth).toDate().getTime()})
// }

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

async function addCreator(id, creator) {
    const ref = await firebase.database().ref().child('pillows/' + id);
    let res = await (await ref.get()).val()
    if (!res.owners.includes(creator)) {

        res.owners.push(creator)
        await ref.set(res);
    }
}

async function deleteFromBasket(id, owner) {
    console.log(id)
    console.log(owner)
    //https://moonpillows-676c2-default-rtdb.europe-west1.firebasedatabase.app/pillows/-MXhz8_4eP49SBW-gRVW/owners
    const ref = await firebase.database().ref().child('pillows/' + id + '/owners');
    let res = await (await ref.get()).val()
    if (res.includes(owner)) {
        let indexOf = res.indexOf(owner)
        res.splice(indexOf, 1)
        await ref.set(res);
    }
}

function getPrice() {

}
export {
    deleteFromBasket,
    getAll,
    addPillow,
    onChunks,
    getOne,
    addCreator,
    getAllForUser,
}
