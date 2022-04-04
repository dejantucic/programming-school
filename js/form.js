import showPopup from "./popup.js";
import validateEmail from "./emailValidate.js";
const form = document.querySelector('.form-wrapper__form');

const EMAIL_INVALID = 'Please enter a correct format of your email address.'

function formValidate(){

    form.addEventListener('submit',e=>{
        e.preventDefault();
        let fName=form.elements[0].value.trim()
        let lName=form.elements[1].value.trim()
        let emailIsValid=validateEmail(form.elements[2],EMAIL_INVALID);
        let email;
        let option=form.elements[3].value;
        let msg=form.elements[4].value.trim();
        if(emailIsValid){
            email=form.elements[2].value.trim();
        }
        if(!fName || !lName || !email){
            alert('Something is missing. Please try again!');
            return;
        }
        showPopup(fName,lName,email,option,msg);
        form.reset();
    })
}



export default formValidate;