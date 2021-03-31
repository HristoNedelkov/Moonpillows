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
    // let productsListRef = await firebase.database().ref('pillows')
    // console.log('out')
    // await productsListRef.on('value', (snapshot) => {
    //     const data = Object.entries(snapshot.val());
    //     return data
    // });
    const database = await firebase.database();

    let res = await database.ref().child('pillows').get()

    if (res.exists()) {
        let snap = await res.val()
        return  Object.entries(snap)
    } else {
        console.log("No data available");
    }
}


Object.defineProperty(Array.prototype, 'chunk', {
    value: function(n) {
  
      // ACTUAL CODE FOR CHUNKING ARRAY:
      return Array.range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));
  
    }
  });
  
export {
    getAll,
    addPillow
}
