import { SignalpathCodetestPage } from './app.po';

describe('signalpath-codetest App', () => {
  let page: SignalpathCodetestPage;

  beforeEach(() => {
    page = new SignalpathCodetestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
