(function() {
'use strict',

    angular
        .module('app', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
    function HomeController($log) {
        var vm = this;
        vm.title = "Practice GIT";

        activate();

        function activate() { }
    }

})();
