imageService.$inject = [ '$http', 'apiUrl' ];

export default function imageService($http ,apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
      // return Promise.resolve([
      //   {
      //     title: 'Cute Bunny',
      //     link: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      //     description: 'Really, really cute bunny'
      //   },
      //   {
      //     title: 'David Zabriskie time trial',
      //     link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg/1280px-Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg?1481125420015',
      //     description: 'David is a really fast time-trialist who\'s been clocked at 34 mph'
      //   }
      // ]);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/images/${id}`)
        .then(res => res.data);

    },
    add(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(res => res.data);
    }
  };
}