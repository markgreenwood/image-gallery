albumService.$inject = [ '$http', 'apiUrl' ];

export default function albumService($http ,apiUrl) {
  return {
    get(album_id) {
      if (!album_id) {
        return this.getAll();
      }
      else {        
        return $http.get(`${apiUrl}/albums/${album_id}`)
          .then(res => res.data);
      }
    },
    getAll() {
      return $http.get(`${apiUrl}/albums`);
    },
    remove(id) {
      return $http.delete(`${apiUrl}/albums/${id}`)
        .then(res => res.data);
    },
    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data);
    }
  };
}