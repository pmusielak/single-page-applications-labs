function sum(){
    numbers_array = [2, 3, 8];
    result = 0;
    numbers_array.forEach(n => {result += n})
    if(numbers_array.length == 0){
        console.log(NaN);
    }
    else{
        console.log(result);
    }
}

sum();