routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums'
  });

  $stateProvider.state({
    name: 'albums.images',
    url: '/:album_id',
    params: { albums: null },
    resolve: {
      albumId: [ '$transition$', t =>  { 
        console.log('Passed in album_id ', t.params().album_id);
        return t.params().album_id; 
      } ],
      albumList: [ '$transition$', t => {
        console.log('t.params ', t.params());
        return t.params().albums;
      }]
    },
    component: 'images'
  });

  // $stateProvider.state({
  //   name: 'images',
  //   url: '/images',
  //   component: 'images'
  // });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.mark',
    url: 'mark',
    component: 'aboutMark'
  });

  $stateProvider.state({
    name: 'about.shadow',
    url: 'shadow',
    component: 'aboutShadow'
  });

  $urlRouterProvider.otherwise('/');

}