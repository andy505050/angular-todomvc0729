import { AngularTodomvc0729Page } from './app.po';

describe('angular-todomvc0729 App', () => {
  let page: AngularTodomvc0729Page;

  beforeEach(() => {
    page = new AngularTodomvc0729Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
