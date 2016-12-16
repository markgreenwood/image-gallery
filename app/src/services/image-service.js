imageService.$inject = [ '$http', 'apiUrl' ];

export default function imageService($http ,apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    getAlbumImages(albumId) {
      return $http.get(`${apiUrl}/albums/${albumId}/images`)
        .then(res => res.data);
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