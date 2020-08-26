const component={}
component.registerPage=`
<div class="register-container">
<form id="register-form">
    <div class="register-header">MindX chat</div>
        <div class="name-wrapper">
        <div class="input-wrapper">
            <input type="text" placeholder="First name" name='firstName'>
            <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Last name" name="lastName">
            <div class="error" id="last-name-error"></div>
    </div>
    </div>
    <div class="input-wrapper">
        <input type="email" placeholder='Email' name="email">
        <div class="error" id="email-error"></div>    
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Password" name="password">
        <div class="error" id="password-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Confirm password" name="confirmPassword">
        <div class="error" id="confirm-password-error"></div>
    </div>
    <div class="form-action">
        <div>Already have an account?<span class="cursor-pointer" id='redirect-to-login'>Login</span></div>
        <button type="submit" class="btn cursor-pointer">register</button>
    </div>
</form>
</div> 
`
component.loginPage=`
<div class="login-container">
<form id="login-form">
    <div class="login-header">MindX chat</div>
    <div class="input-wrapper">
        <input type="email" placeholder='Email' name="email">
        <div class="error" id="email-error"></div>    
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Password" name="password">
        <div class="error" id="password-error"></div>
    </div>
    <div class="form-action">
        <div>Don't have an account?<span class="cursor-pointer" id='redirect-to-register'>Register</span></div>
        <button type="submit" class="btn cursor-pointer">sign in</button>
    </div>
</form>
</div>
    `
component.chatPage=`
<div class="chat-container">
<div class="chat-container">
<div class="header">
    minchat
</div>
<div class="main">
    <div class="conversation-detail">
        <div class="conversation-title">First conversation</div>
        <div class="list-messages">

        </div>
        <form action="submit" id="send-message-form">
            <div class="input-wrapper">
            <input type="text" placeholder="Type a message" name="message"></input>
            </div>
            <button><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
</div>
</div> 
</div>
</div> 
`