import { email, google, facebook } from "../controller/view-Controller.js";

export default () => {
  const formLogin = document.createElement("div");
  const templateFormLogin = `
  <div class= 'col-12 col-xs-12'>
  <aside class = 'col-lg-6 col-xs-12 center'>
  <header><img src="./image/apego.jpg" alt="educacion" class='block center'>
  </aside>
  <form class= 'col-lg-6 col-xs-12 center'>
  <img src="./image/logo.png" alt="educacion" class='block center'>
  <h2 class='center'> < Edu-Resp > </h2></header>
  <article>
  <input type="email" id="email-id" class='style-input center block border' placeholder ='Email'/>
    <input type="password" id="password-id" class='style-input center block border' placeholder ='Password'/>
    <button type="button" id="btn-sing-in" class='center style-btn-login block border' >Log in</button>
    <p>O bien ingresa con...</p>
   <span class = 'center'>
   <button type="button" id="btn-google" class='center btn-google-login btn-rss color-go'>G</button>
   <button type="button" id="btn-facebook" class='center btn-rss color-fb'>f</button>   
   </<span>
  </article>
    <button id = 'btn-new-page' class='style-login'>holaaa</button> 
  <footer><span><p class= 'style-register'>No tienes una cuenta</p> <a href='' class= 'style-register'>Regístrate</a></span></footer>
        
    </form>
  </div>
  `;
  formLogin.innerHTML = templateFormLogin;
  // document.getElementById("root").appendChild(formLogin);
  const btnSingIn = formLogin.querySelector("#btn-sing-in");
  const valueEmail = formLogin.querySelector("#email-id").value;
  const password = formLogin.querySelector("#password-id").value;
  const btnFacebook = formLogin.querySelector('#btn-facebook');
  const btnGoogle = formLogin.querySelector('#btn-google');
  btnSingIn.addEventListener("click", email(valueEmail, password));
  btnGoogle.addEventListener("click", google);
  btnFacebook.addEventListener("click", facebook);
  // const btnNewPage = formLogin.querySelector('#btn-new-page');
  // btnNewPage.addEventListener('click', newVista());
  return formLogin;
};