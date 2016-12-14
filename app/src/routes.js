routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'images'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.mark',
    url: 'mark',
    template: '<p>Mark is a full-stack developer with experience in JavaScript, Python, and C++.'
  });

  $stateProvider.state({
    name: 'about.shadow',
    url: 'shadow',
    template: '<p>Shadow is Mark\'s dog. Shadow is a shelter rescue dog, and is part Australian Shepherd and part Flat-Coated Retriever. He prefers to navigate during pair programming because his lack of opposable thumbs hinders his ability to be the driver.'
  });

  $urlRouterProvider.otherwise('/');

}