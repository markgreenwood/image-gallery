
describe('Image Gallery App', () => {
  it ('has a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Mark\'s Image Gallery');
  });
});