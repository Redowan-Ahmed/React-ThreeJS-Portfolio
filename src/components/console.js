export const GlobalDebug = (function () {
    var savedConsole = console;
    /**
    * @param {boolean} debugOn
    * @param {boolean} suppressAll
    */
    return function (debugOn, suppressAll) {
        var suppress = suppressAll || false;
        if (debugOn === false) {
            console = {};
            console.log = function () { };
            if (suppress) {
                console.info = function () { };
                console.warn = function () { };
                console.error = function () { };
            } else {
                console.info = savedConsole.info;
                console.warn = savedConsole.warn;
                console.error = savedConsole.error;
            }
        } else {
            console = savedConsole;
        }
    };
})();