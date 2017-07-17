import { Angular4HerosPage } from './app.po';

describe('angular4-heros App', () => {
  let page: Angular4HerosPage;

  beforeEach(() => {
    page = new Angular4HerosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
