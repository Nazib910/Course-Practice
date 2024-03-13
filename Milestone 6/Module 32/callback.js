function greeting(greetingHandler, name){
    greetingHandler(name); 
}

// const number = 45;


function greetingHandler(name){
    console.log('Good morning', name);
}
function greetingNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Asriel');