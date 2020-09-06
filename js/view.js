const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controler.register(data)
            })
            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controler.login(data)
            })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            break;
        case 'chatPage':
            document.getElementById('app').innerHTML = component.chatPage
            const sendMessageForm = document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const message = {
                    content: sendMessageForm.message.value,
                    owner: model.currentUser.email,
                    createdAt: new Date().toISOString()
                }
                if (!(message.content.trim() === '')) {
                    model.addMessage(message)
                    sendMessageForm.message.value = ''
                }
            })
            document.getElementById('create-conversation').addEventListener('click', () => {
                view.setActiveScreen('createConversation')
            })
            model.getConversations()
            model.listenConversationChange()
            break;
        case 'createConversation':
            document.getElementById('app').innerHTML = component.createConversation
            const createConversationForm = document.getElementById('create-conversation-form')
            createConversationForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data={
                    title:createConversationForm.title.value,
                    email:createConversationForm.email.value,
                    createdAt:new Date().toISOString()
                }
                controler.createConversation(data);
            })
            document.getElementById('redirect-to-chat').addEventListener('click', () => {
                view.setActiveScreen('chatPage')
            })
            break;
}
}
view.setErrorMessage = (elementId, context) => {
    document.getElementById(elementId).innerText = context
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>
        `
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    document.querySelector('.list-messages').appendChild(messageWrapper)
}
view.showCurrentConversation = () => {
    document.querySelector('.conversation-title').innerHTML = model.currentConversation.title
    document.querySelector('.list-messages').innerHTML = ''
    for (message of model.currentConversation.messages) {
        view.addMessage(message)
    }
    view.scrollToEndElement()
}
view.scrollToEndElement = () => {
    const element = document.querySelector('.list-messages')
    element.scrollTop = element.scrollHeight
}
view.showConversations = () => {
    for (conversation of model.conversations) {
        // console.log(model.conversations);
        view.addConversation(conversation)
    }
}
view.addConversation = (conversation) => {
    const conversationWrapper = document.createElement('div')
    conversationWrapper.classList.add('conversation')
    conversationWrapper.classList.add('cursor-pointer')
    if (conversation.id === model.currentConversation.id) {
        conversationWrapper.classList.add('current')
    }
    conversationWrapper.innerHTML = `
    <div class="conversation cursor-pointer">
        <div class="left-conversation-title">${conversation.title}</div>
        <div class="num-of-user">${conversation.users.length} users</div>
    </div>
    `
    conversationWrapper.addEventListener('click', () => {
        model.currentConversation = conversation
        view.showCurrentConversation()
        document.querySelector('.conversation.current').classList.remove('current')
        conversationWrapper.classList.add('current')
    })
    document.querySelector('.list-conversations').appendChild(conversationWrapper)
}