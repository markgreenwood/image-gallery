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

  $urlRouterProvider.otherwise('/');

}