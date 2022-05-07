const signupName = document.getElementById("name");
const signupEmail = document.getElementById("email1");
const signupPassword = document.getElementById("password1");
const accountType = document.getElementById("account-type");
const signupButton = document.getElementById("signup-button");

const signinEmail = document.getElementById("email2");
const signinPassword = document.getElementById("password2");
const signinButton = document.getElementById("signin-button");

signupButton.addEventListener("click", async()=>{
    if(signupName.value.length !== 0 && 
        signupEmail.value.length !== 0 &&
        signupPassword.value.length !== 0 &&
        JSON.stringify(accountType.value) !== JSON.stringify("")){
        if(regexTest(signupEmail.value)){ //if email regex works
            if(signupPassword.value.length >= 8){   //Password should be longer than 8
                if(JSON.stringify(accountType.value) === JSON.stringify("user")){
                    //user request
                    await userRequest(signupName.value, signupEmail.value, signupPassword.value);
                }
                else{
                    //company request
                    await companyRequest(signupName.value, signupEmail.value, signupPassword.value);
                }
            }
            else{
                signupPassword.classList.add("invalid");
                alert("Password should be at least 8-characers long.");
            }
        }
        else{
            signupEmail.classList.add("invalid");
            alert("Not a valid e-mail address. Should look like example@lancer.com");
        }
    }
    else{
        alert("Incomplete or missing credentials.");
    }
});

signinButton.addEventListener("click", async()=>{
    if(signinEmail.value.length !== 0 &&
        signinPassword.value.length !== 0){
        if(regexTest(signinEmail.value)){ //if email regex works
            await signInRequest(signinEmail, signinPassword);
        }
        else{
            signinEmail.classList.add("invalid");
            alert("Not a valid e-mail address. Should look like example@lancer.com");
        }
    }
    else{
        alert("Incomplete or missing credentials.");
    }
});

function regexTest(emailStr){
    const regex = /.+@.+\..+/;    //matches: string @ string . string
    return regex.test(emailStr);
}

async function userRequest(userName, emailAddress, userPassword){
await fetch(`/signup/user`,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({userName, emailAddress, userPassword})
});
}

async function companyRequest(companyName, emailAddress, companyPassword){
    await fetch(`/signup/company`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({companyName, emailAddress, companyPassword})
    });
    }

    async function signInRequest(emailAddress, generalPassword){
    await fetch(`/signin`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({emailAddress, generalPassword})
    });
    }