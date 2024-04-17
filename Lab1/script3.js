var change = (function () {
    var bool = false;
    return function () {console.log(bool); bool = !bool; return bool;}
    })();

change();
change();
change();