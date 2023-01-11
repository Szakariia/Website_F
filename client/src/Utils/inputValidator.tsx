interface errorMessageType {
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    repeatPassword: string
}


let errorMessage : errorMessageType = {
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: ""
}

const isEmail = (email: string) => {
    const emailRegex: RegExp =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    if (!email) return "no email";
    else {
      if (email.length > 50) return "long email";
      if (!email.match(emailRegex))
        return "invalid email" ;
    }
    return "";
  };
  
  const isUsername = (username: string) => {
    if (!username) return "no username";
    else if (username.length > 50)
      return "short username";
    return "";
  };
  
  const isFirstName = (firstName: string) => {
    if (!firstName) return "no firstName";
    else if (firstName.length > 50)
      return "short firstName" ;
    return "";
  };
  
  const isLastName = (lastName: string) => {
    if (!lastName) return "no lastName" ;
    else if (lastName.length > 50) return "short lastName";
    return "";
  };
  
  const isPassword = (password: string) => {
    const passwordRegex: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (!password) return "no password";
    else {
      if (password.length < 8)
        return "password must at least be 8 characters in length";
      if (!password.match(passwordRegex))
        return "password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    }
    return "";
  };

  interface FormValues {
    firstName : string,
    lastName : string,
    email : string,
    username: string,
    password : string,
    repeatPassword: string
    }

  const Validator = (data: FormValues, status: number) => {    
    
    console.log("++ DATA in Validator", data)

    if (data.email) errorMessage = { ...errorMessage, email: isEmail(data.email) }
    if (data.username) errorMessage = { ...errorMessage, username: isUsername(data.username) } 
    if (data.firstName) errorMessage = { ...errorMessage, firstName: isFirstName(data.firstName) } 
    if (data.lastName) errorMessage = { ...errorMessage, lastName: isLastName(data.lastName) } 
    if (data.password) errorMessage = { ...errorMessage, password: isPassword(data.password) } 
    
    console.log("++ Error in Validator", errorMessage)
    return errorMessage
  };
  
  export default Validator;