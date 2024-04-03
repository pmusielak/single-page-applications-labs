var count = (function () {
    var bool = false;
    return function () {console.log(bool); bool = !bool; return bool;}
    })();

count();
count();