import { loginEmail, loginGoogle } from '../lib/auth.js';

const loginFirebase = (email, password) => {
  const loginPrevent = (e) => {
    e.preventDefault();
    loginEmail(email, password);
  };
  return loginPrevent;
};

const googleFirebase = () => {
  loginGoogle();
};

export function login(navigation) {
  const section = document.createElement('section');

  const html = `
  <div class='contenedor'>
    <div class="contenedorLogo">
      <img class="imgLogo" src="img/logo.png" alt="logo">
    </div>
    <main>
      <div class="contenedorIngreso">
        <form class="contenedorInput">
        <span id="errorUsuario" class="errorUsuario"></span>
          <label>
            <span>Correo electrónico</span>
            <input type="email" autocomplete="off" name="email" class="email" id="email">
          </label>
          <label>
            <span>Contraseña</span>
            <input type="password" class="password" id="password">
          </label>  
        </form>   
        <button class="btnLogin" id="btnLogin">Iniciar sesión</button>
        <button class="btnGoogle" id="btnGoogle"> <img class="logoGoogle" src="./img/logogoogle.png" alt="Logo Google"></img>Continuar con google</button>
        <span class="textRegistro">Si no tienes cuenta <button class="btnRegistro" id="btnRegistro">Regístrate</button></span>
      </div>
    </main>
  </div>`;
  section.innerHTML = html;

  // Labels dinámicos

  const inputs = section.querySelectorAll('input');

  inputs.forEach((input) => {
    input.onfocus = () => {
      input.previousElementSibling.classList.add('top');
      input.previousElementSibling.classList.add('focus');
      input.parentNode.classList.add('focus');
    };
    input.onblur = () => {
      input.value = input.value.trim();

      if (input.value.trim().length === 0) {
        input.previousElementSibling.classList.remove('top');
      }

      input.previousElementSibling.classList.remove('focus');
      input.parentNode.classList.remove('focus');
    };
  });

  // Evento del botón Registrar
  const btnRegistrar = section.querySelector('#btnRegistro');

  btnRegistrar.addEventListener('click', () => {
    navigation('/register');
  });

  // Evento del botón Iniciar Sesiòn

  const btnLogin = section.querySelector('#btnLogin');
  const password = section.querySelector('#password');
  const email = section.querySelector('#email');

  btnLogin.addEventListener('click', loginFirebase(email, password));

  // Google inicio

  const btnGoogle = section.querySelector('#btnGoogle');

  btnGoogle.addEventListener('click', googleFirebase);
  return section;
}
