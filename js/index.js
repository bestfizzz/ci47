window.onload=()=>{
    var firebaseConfig = {
        apiKey: "AIzaSyC2qW7fi4PQ6Y37ElycLN4VIV-20HypV4M",
        authDomain: "chat-appppp-7354a.firebaseapp.com",
        databaseURL: "https://chat-appppp-7354a.firebaseio.com",
        projectId: "chat-appppp-7354a",
        storageBucket: "chat-appppp-7354a.appspot.com",
        messagingSenderId: "477317833660",
        appId: "1:477317833660:web:da3b23362dbab2dd3ac1b9",
        measurementId: "G-HQWHMNWPLF"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        model.currentUser={
          displayName:user.displayName,
          email:user.email
        }
        if(user.emailVerified){
          view.setActiveScreen('chatPage')
        }else{
          alert('Pleas')
          firebase.auth().signOut()
          view.setActiveScreen('loginPage')
        }
      }else{
        view.setActiveScreen('registerPage')
      }
    })
    // templateFirestore()
}
const templateFirestore= async()=>{
  // get one
  const docID='zsv1RueYHweTcjpNhFrw'
  const response=await firebase.firestore().collection('users').doc(docID).get()
  // const user =getOneDocument(response)
  // get many
  const responseMany=await firebase.firestore().collection('users').where('phone','==','098').get()
  // console.log(responseMany)
  const firstUser=responseMany
  // console.log(getManyDocument(firstUser))
  //create
  const dataToCreate={
    age:100,
    name:'abc'
  }
  // firebase.firestore().collection('users').add(dataToCreate)
  //update
  const idToUpdate='cVDLo5h4mb52T6Lvg0jS'
  const dataToUpdate={
    name:'Updated',
    phone:firebase.firestore.FieldValue.arrayUnion('098')
  }
  firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate)
  //delete
  const idToDelete='zsv1RueYHweTcjpNhFrw'
  firebase.firestore().collection('users').doc(idToDelete).delete()
}
const getOneDocument=(response)=>{
  const data=response.data()
  data.id=response.id
  return data
}
const getManyDocument=(response)=>{
  const listData=[]
  for(const doc of response.docs){
    listData.push(getOneDocument(doc))
  }
  return listData
}
// const mess=async()=>{
//   const messageSend=await firebase.firestore().collection('conversations').doc('Lhumtg7LGVmaElqWwIYF').get()
//   console.log(getOneDocument(messageSend))
//   view.addMessage(getOneDocument(messageSend))
// }