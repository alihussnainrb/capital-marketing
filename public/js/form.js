

const form=document.getElementById('form')
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('ph-no');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');






form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validate();
})



const sendData = (sRate,count) => {
    if(sRate === count){
        alert('Registeration Successfull');
        location.href = 'home.html?';
    }
}



const SuccessMsg = () => {
    let FormCon=document.getElementsByClassName("form-control");

    var count = FormCon.length - 1;
    for(var i=0; i<FormCon.length;i++){
        if(FormCon[i].className === "form-control success"){
            var sRate = 0 + i;
        }
        else
        {
            return false
        }
    }
}



const isEmail = (emailval) =>
{
    var atSymbol = emailval.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailval.indexOf('.');
    if( dot <= atSymbol + 3) return false;
    if( dot === emailval.length - 1) return false;
    return true;
}

const validate = () =>{
    const usernameval =username.value.trim();
    const emailval =email.value.trim();
    const phoneval =phone.value.trim();
    const passwordval =password.value.trim();
    const cpasswordval =cpassword.value.trim();


    if(usernameval === "")
    {
        setErrormsg(username, 'Username field cannot be blank');
    }
    else if(usernameval.length <= 2)
    {
        setErrormsg(username, 'Username min 3 char');
    }
    else
    {
        setSuccessmsg(username)
    }



    if(emailval === "")
    {
        setErrormsg(email, 'Email field cannot be blank');
    }
    else if(! isEmail(emailval))
    {
        setErrormsg(email, 'Not a valid Email');
    }
    else
    {
        setSuccessmsg(email)
    }


    if(phoneval === "")
    {
        setErrormsg(phone, 'Phone field cannot be blank');
    }
    else if(phoneval.length != 11)
    {
        setErrormsg(phone, 'Not a valid phone number');
    }
    else
    {
        setSuccessmsg(phone)
    }



    if(passwordval === "")
    {
        setErrormsg(password, 'Password field cannot be blank');
    }
    else if(passwordval.length <= 7)
    {
        setErrormsg(password, 'Password must contains at least 8 characters');
    }
    else
    {
        setSuccessmsg(password)
    }


    if(cpasswordval === "")
    {
        setErrormsg(cpassword, 'Confirm password field cannot be blank');
    }
    else if(passwordval != cpasswordval)
    {
        setErrormsg(cpassword, 'Password and confirm password should be same');
    }
    else
    {
        setSuccessmsg(cpassword)
    }
}


function setErrormsg(input,errormsgs)
{
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control error";
    small.innerText = errormsgs;
}




function setSuccessmsg(input)
{
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}












