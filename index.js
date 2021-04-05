// Write your solution here!


let drivers = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendDriver(name) {
    drivers.push(name);
}


function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    new_array = [...drivers,name];
}

function prependDriver(name) {
    new_array = [name,...drivers];
}

function removeLastDriver() {
    array = drivers.slice(-1);
}

function removeFirstDriver( ){
    array = drivers.slice(0);
}