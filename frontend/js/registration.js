const signupName = document.getElementById("name");
const signupEmail = document.getElementById("email1");
const signupPassword = document.getElementById("password1");
const accountType = document.getElementById("account-type");
const signupButton = document.getElementById("signup-button");

const signinEmail = document.getElementById("email2");
const signinPassword = document.getElementById("password2");
const signinButton = document.getElementById("signin-button");

signupButton.addEventListener("click", ()=>{
    if(signupName.value.length !== 0 && 
        signupEmail.value.length !== 0 &&
        signupPassword.value.length !== 0 &&
        JSON.stringify(accountType.value) !== JSON.stringify("")){
        if(regexTest(signupEmail.value)){ //if email regex works
            if(signupPassword.value.length >= 8){   //Password should be longer than 8
                if(JSON.stringify(accountType.value) === JSON.stringify("user")){
                    //user request
                }
                else{
                    //company request
                }
            }
            else{
                console.error("Password should be at least 8-characers long.");
            }
        }
        else{
            console.error("Not a valid e-mail address. Should look like example@lancer.com");
        }

    }
    else{
        console.error("Incomplete or missing credentials.");
    }
});

signinButton.addEventListener("click", ()=>{
    if(signinEmail.value.length !== 0 &&
        signinPassword.value.length !== 0){
        if(regexTest(signinEmail.value)){ //if email regex works

        }
        else{
            console.error("Not a valid e-mail address. Should look like example@lancer.com");
        }

    }
    else{
        console.error("Incomplete or missing credentials.");
    }
});

function regexTest(emailStr){
    const regex = /.+@.+\..+/;    //matches: string @ string . string
    return regex.test(emailStr);
}