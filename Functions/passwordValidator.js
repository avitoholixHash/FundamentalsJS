function passwordValidator(password){

    let regexChar = /[A-z]/g;
    let regexNumbers = /\d+/g;

    let allLengthOfPassward = Number(password.length);

    let splitThepassword = [];

    let howNumbers = '';
    let howChar = '';

    for (let index = 0; index < password.length; index++) {
        
        splitThepassword[index] = password[index];
        howNumbers = splitThepassword[index].match(regexNumbers);
        //howChar = splitThepassword.match(regexChar);
        
    }
   
    howChar = splitThepassword.match(regexChar);

    console.log(howNumbers);
    console.log(howChar);
  



   
}
passwordValidator('logIn22');