/**
 * @jest-environment jsdom
 */

import { loginGoogle } from '../src/lib/auth.js';
import {
  googleFirebase,
  login,
} from '../src/templates/login.js';

const mockNavigation = jest.fn();
// // import { auth } from '../src/lib/index.js';
// let wrapper;
// const signInWithPopup = jest.fn(() => Promise.resolve('results for signInWithPopup'));
// const initializeApp = jest.spyOn(firebase, 'initializeApp')
//   .mockImplementation(() => ({
//     auth: () => ({
//       signInWithPopup,
//     }),
//   }));
// initializeApp();
// import { register, registerFirebase } from '../src/templates/register.js';
// import { auth } from '../src/lib/index.js';

// especificar el modulo a mockear
describe('login', () => {
  test('esto es una funcion', () => {
    expect(typeof login).toBe('function');
  });
  test('hay un boton', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const boton = html.querySelector('#btnLogin');

    expect(boton).not.toBe(null);
  });
  test('hay un boton con click', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const boton = html.querySelector('#btnLogin');
    boton.click();

    expect(boton).not.toBe(null);
  });
  test('have a google button', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const button = html.querySelector('#btnGoogle');

    expect(button).not.toBe(undefined);
  });
  test('Verifica el elemento link', () => {
    const html = document.createElement('div');
    html.appendChild(login(mockNavigation));
    const element = html.querySelector('#linkRegister');
    element.click();
    expect(element).toBeDefined();
  });
  test('Verifica el click en el input email', () => {
    const html = document.createElement('div');
    html.appendChild(login(mockNavigation));
    const email = html.querySelector('#email');
    email.click();
    expect(email).toBeDefined();
  });
  test('Verifica el click en el input password', () => {
    const html = document.createElement('div');
    html.appendChild(login(mockNavigation));
    const password = html.querySelector('#password');
    password.click();
    expect(password).toBeDefined();
  });
  // t
  // test('tests methods', () => {
  //   const mockfbLogin = jest.spyOn(wrapper.vm, 'fbLogin');
  //   wrapper.vm.$on('click', mockfbLogin);
  //   wrapper.vm.$emit('click');
  //   expect(mockfbLogin).toHaveBeenCalled();
  //   expect(signInWithPopup).toHaveBeenCalled();
  // });
});

// Función de google

describe('googleFirebase', () => {
  test('this is a function', () => {
    expect(typeof googleFirebase).toBe('function');
  });
  test('is a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  test('deberia llamar a mockNavigation', () => {
    const html = document.createElement('div');
    html.append(login(mockNavigation));
    const btnGoogle = html.querySelector('#btnGoogle');
    btnGoogle.click();
    expect(mockNavigation).toHaveBeenCalledTimes(1);
  });
});