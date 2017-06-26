import { AngularHeroesPage } from './app.po';

describe('angular-heroes App', () => {
  let page: AngularHeroesPage;

  beforeEach(() => {
    page = new AngularHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
