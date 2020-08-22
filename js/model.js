const model={}
model.currentUser=undefined
model.register=async(data)=>{
    try{
    await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
    firebase.auth().currentUser.updateProfile({
        displayName: data.firstName+' '+data.lastName
    })
    firebase.auth().currentUser.sendEmailVerification()
    }catch(err){
        alert(err.message)
        console.log(err)
    }
}
model.login=async({email,password})=>{
    try{
        const response=await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log(response)
        if(response && response.user.emailVerified){
            model.currentUser={
                email:response.user.email,
                displayName:response.user.displayName
            }
        view.setActiveScreen('chatPage')
        }else{
            alert('Please verify your email')
        }
    }catch(err){
        alert(err.message)
        console.log(err)
    }
    
}