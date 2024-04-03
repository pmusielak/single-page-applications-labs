function Iteration(value){
    if(value<0 || value==''){
        window.alert('podana wartość nie jest obsługiwana');
        return;
    }
    value = Math.floor(value);
    document.getElementById('nb').value = value;
    score = 1;
    for(let i = value; i>0; i--){
        score *= i;
    }
    document.getElementById('score').value = score;
    return
}

function Recurrent_Start(value){
    score = 1;
    if(value<0 || value==''){
        window.alert('podana wartość nie jest obsługiwana');
        return;
    }
    value = Math.floor(value);
    document.getElementById('nb').value = value;
    Recurrent(value, score);
}

function Recurrent(value, score){
    if(value==0){
        document.getElementById('score').value = score;
        return 1;
    }
    else{
        score *= value;
        return value * Recurrent(value-1, score);
    }
}