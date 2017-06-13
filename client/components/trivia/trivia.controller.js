//Your QUOTES CONTROLLER HERE!

TriviaController.$inject = ['TriviaService'];

function TriviaController(TriviaService) {
    const vm = this;
    
    vm.getTrivia = getTrivia;
    vm.trivia = '';

    activate();

    function activate() {
        getTrivia();
    }

    function getTrivia() {
        TriviaService.getTrivia()
            .then(function resolve(response) {
                console.log(response.data);
                vm.trivia = response.data[0];
            });
    }

};

module.exports = TriviaController;