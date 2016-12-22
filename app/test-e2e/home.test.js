
describe('Image Gallery App', () => {

  // Home page loads with a title
  it ('has a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Mark\'s Image Gallery');
  });

  describe ('albums link navigates to albums state/url', () => {

    // Going to 'albums' state navigates to /albums url
    it ('goes to the albums url', () => {
      const navlinks = element.all(by.css('nav a'));
      navlinks.get(1).click();

      expect(browser.getLocationAbsUrl()).toBe('/albums');
    });

    it ('uses the albums component', () => {
      expect(element(by.css('main ui-view')).all(by.css('*')).first().getTagName()).toEqual('albums');
    });

  });

});