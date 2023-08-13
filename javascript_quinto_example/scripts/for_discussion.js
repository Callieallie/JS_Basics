


let age = 1;

function tellAge(input_age) {
    console.log("My age is " + input_age);
}

tellAge(age);
tellAge(2);


let reaction_lambda = () => { console.log("Im a lambda") };
let reaction_anon = function() { console.log("Im an anonymous function") };

function identifyYourself(identification_function) {
    identification_function();
}

identifyYourself(reaction_lambda);
identifyYourself(reaction_anon);
identifyYourself(() => { console.log("Im an inline lambda (never stored in a variable)")});
identifyYourself(function() { console.log("Im an inline anonymous function (never stored in a variable)")});
