import { signInWithEmail, signInWithGoogle, signInWithFacebook ,createEmailAndPassword} from "../lib/lib-firebase.js";
import { dataBaseUser } from '../model/model.js'
// import { changeHash } from '../Utils/util.js'

export const registerUser = () => {
const emailRegister = document.querySelector('#email-register').value;
const passwordRegister = document.querySelector('#password-register').value;
return  createEmailAndPassword(emailRegister,passwordRegister)
  .then(()=> {
    console.log("ya te registraste")
  }).catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage)
    // ...
  });
}

export const email = () => {
  const valueEmail = document.querySelector("#email-id").value;
  const password = document.querySelector("#password-id").value;
  return signInWithEmail(valueEmail, password)
    .then(() => {
      console.log("todo ha ido bien");
      }).catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    
    });
};

export const google = () => {
  return signInWithGoogle().then(result => {
    dataBaseUser(result.user);
    // console.log(result);
    //       // let imgUser = document.createElement("img");
    //       // imgUser.src = `${result.user.photoURL}`;
    //       // document.body.appendChild(imgUser);
  });
}

export const facebook = () => {
  return signInWithFacebook().then(result => {
    dataBaseUser(result.user)
  })
}

/*export const newVista = () => {
  changeHash('/welcomeUser');
}*/
