/* eslint-disable import/no-cycle */
/* ------ AQUI VAN ELEMENTOS PARA CREAR POST------ */
// import { onNavigate } from '../main.js';

export const home = () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Holi, en contrucción :)';
  return paragraph;
};
