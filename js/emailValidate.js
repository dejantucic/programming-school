const EMAIL_REQUIRED = 'Please enter your email address.'

const validateEmail=input=>{
    const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = input.value.trim();

        if(!email){
            alert(EMAIL_REQUIRED);
            return;
        }
        if(!emailRegex.test(email)) {
            alert(EMAIL_INVALID);
        }
    
        return true;
}


export default validateEmail;