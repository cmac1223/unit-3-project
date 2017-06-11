ArticleController.$inject = ['ArticleService'];

function ArticleController(ArticleService) {
    const vm = this;

    vm.getArticle = getArticle;
    vm.article = '';

    // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW

    // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
    activate();

    function activate() {
        getTrivia();
    }

    // HOW IT DOES STUFF
    function getArticle() {
        ArticleService.getArticle()
            .then(function resolve(response) {
                console.log(response.data);
                vm.article = response.data[0];
            });
    }

};

module.exports = ArticlesController;
