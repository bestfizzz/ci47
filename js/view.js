const view={}
view.setActiveScreen=(screenName)=>{
    switch (screenName){
        case 'registerPage':
            document.getElementById('app').innerHTML=component.registerPage
            const registerForm= document.getElementById('register-form')
            registerForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                const data={
                    firstName:registerForm.firstName.value,
                    lastName:registerForm.lastName.value,
                    email:registerForm.email.value,
                    password:registerForm.password.value,
                    confirmPassword:registerForm.confirmPassword.value,
                }
                controler.register(data)
            })
            document.getElementById('redirect-to-login').addEventListener('click',()=>{
                view.setActiveScreen('loginPage')
            })
        break;
        case 'loginPage':
            document.getElementById('app').innerHTML=component.loginPage
            const loginForm=document.getElementById('login-form')
            loginForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                const data={
                    email:loginForm.email.value,
                    password:loginForm.password.value,
                }
                controler.login(data)
            })
            document.getElementById('redirect-to-register').addEventListener('click',()=>{
                view.setActiveScreen('registerPage')
            })
        break;
        case 'chatPage':
            document.getElementById('app').innerHTML=component.chatPage
            const sendMessageForm=document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                const message={
                    content:sendMessageForm.message.value,
                    owner:model.currentUser.email
                }
                const messageFromBot={
                    content:sendMessageForm.message.value,
                    owner:'bot'
                }
                view.addMessage(message)
                view.addMessage(messageFromBot)
            })
            break;
    }
}
view.setErrorMessage=(elementId,context)=>{
    document.getElementById(elementId).innerText=context}
view.addMessage=(message)=>{
    if(!(message.content==='')){
        const messageWrapper=document.createElement('div')
        messageWrapper.classList.add('message')
        if(message.owner===model.currentUser.email){
            messageWrapper.classList.add('mine')
            messageWrapper.innerHTML=`
            <div class="content">${message.content}</div>
            `
        }else{
            messageWrapper.classList.add('their')
            messageWrapper.innerHTML=`
            <div class="owner">${message.owner}</div>
            <div class="content">${message.content}</div>
            `
        }
        document.querySelector('.list-messages').appendChild(messageWrapper)}
}