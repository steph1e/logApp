import { LogAppPage } from './app.po';

describe('log-app App', function() {
  let page: LogAppPage;

  beforeEach(() => {
    page = new LogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
