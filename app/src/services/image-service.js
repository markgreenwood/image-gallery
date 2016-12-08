imageService.$inject = [ '$http', 'apiUrl' ];

export default function imageService($http ,apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data);
    },
    remove(/* id */) {

    },
    add(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(res => res.data);
    }
  };
}