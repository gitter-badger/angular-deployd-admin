app.factory('Posts', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
    return $resource(BASE_URL + '/posts/:id', {
        id: "@id"
    });
}]);

app.factory('Comments', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
    return $resource(BASE_URL + '/comments/:id', {
        id: "@id"
    });
}]);