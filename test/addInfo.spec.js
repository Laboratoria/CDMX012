import { addInfoPage } from '../src/pages/add-info.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of signInPage', () => {
  it('render signInPage', () => {
    const renderAddInfo = addInfoPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderAddInfo);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('OnNavigate funciona bien', () => {
    expect(window.location.pathname).toBe('/');
  });
});
