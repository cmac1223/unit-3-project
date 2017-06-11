//Your QUOTES CONTROLLER HERE!

TriviaController.$inject = ['TriviaService'];

function TriviaController(TriviaService) {
    const vm = this;
    
    vm.getTrivia = getTrivia;
    vm.trivia = '';

    // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW

    // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
    activate();

    function activate() {
        getTrivia();
    }

    // HOW IT DOES STUFF
    function getTrivia() {
        let visible = true;
        TriviaService.getTrivia()
            .then(function resolve(response) {
                console.log(response.data);
                vm.trivia = response.data[0];
            });
    }

};

module.exports = TriviaController;