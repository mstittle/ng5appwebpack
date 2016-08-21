import { Ng5appwebpackPage } from './app.po';

describe('ng5appwebpack App', function() {
  let page: Ng5appwebpackPage;

  beforeEach(() => {
    page = new Ng5appwebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
