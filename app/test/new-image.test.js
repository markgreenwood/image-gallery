describe ('new-image component', () => {

  const { expect } = chai;
  
  beforeEach(
    angular.mock.module('components')
  );

  let newImage = null;

  beforeEach(angular.mock.inject($componentController => {
    newImage = $componentController(
      'newImage',
      null,
      { add(img) { addedImage = img; }}
    );
  }));

  const image = {
    title: 'Bean walking on the Moon',
    link: 'http://www.armaghplanet.com/blog/wp-content/uploads/2011/09/Image-of-as12-46-6728.jpg',
    description: 'Alan Bean leaves the lunar module and walks on the Moon',
    album: 'Space'
  };

  let addedImage = null;

  // test that inputs are blank to start with
  it ('all inputs except album are blank on load', () => {
    expect(newImage.title).to.equal('');
    expect(newImage.link).to.equal('');
    expect(newImage.description).to.equal('');
  });

  it ('adds an image', () => {
    Object.assign(newImage, image);
    newImage.addNew();
    expect(addedImage).to.deep.equal(image);
  });

});