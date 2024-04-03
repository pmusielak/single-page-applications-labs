//Ex1.1
function square1(){
    number = 4;
    number *= number;
    console.log(number);
}

//Ex1.2 && Ex1.3
function square2(){
    numbers_array = [2, 4, 6, 7];
    forLoop(numbers_array);
    forOfLoop(numbers_array);
    forInLoop(numbers_array);
    forEachLoop(numbers_array);
}

function forLoop(numbers){
    console.log('For Loop results:');
    for (i = 0; i<numbers.length; i++){
        console.log(numbers[i] * numbers[i]);
    }
}

function forOfLoop(numbers){
    console.log('For Loop... of results:');
    for (let i of numbers){
        console.log(i*i);
    }
}

function forInLoop(numbers){
    console.log('For Loop... in results:');
    for (let i in numbers){
        console.log(numbers[i]*numbers[i]);
    }
}

function forEachLoop(numbers){
    console.log('For Each Loop results:');
    numbers.forEach((n) => console.log(n*n));
}

square2();