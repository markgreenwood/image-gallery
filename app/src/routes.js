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

  $stateProvider
    .state({
      name: 'album',
      url: '/albums/:id',
      abstract: true,
      default: '.details',
      resolve: {
        album: [ 'albumService', '$transition$', (albums, t) => {
          return albums.get(t.params().id);
        }],
        images: [ 'album', album => album.images ]
      },
      component: 'album'
    })
    .state({
      name: 'album.details',
      url: '/details',
      component: 'imageDetail'
    })
    .state({
      name: 'album.thumbnails',
      url: '/thumbnails',
      component: 'imageThumbnail'
    })
    .state({
      name: 'album.full',
      url: '/full',
      component: 'imageFull'
    });    

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