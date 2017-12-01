import { PublicPage } from './public.po';

describe('protractor-tutorial - Public page', () => {
  let page: PublicPage;

  beforeEach(() => {
    page = new PublicPage();
  });

  it('when user browses to our app he should see the default “public” screen', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('Public');
  });
});
