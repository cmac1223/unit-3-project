ArticlesController.$inject = ['ArticlesService'];

function ArticlesController(ArticlesService) {

    const vm = this;

    vm.getArticles = getArticles;
    vm.articles = '';

    activate();

    function activate() {
        getArticles();
    }

    // HOW IT DOES STUFF
    function getArticles() {
        ArticlesService.getArticles()
            .then(function resolve(response) {
                console.log(response.data);
                vm.articles = response.data;
            });

    }

};

module.exports = ArticlesController;
