var isFetching = true;
var isLoading = false;
var int = 23;
var float = 2.3;
var num = 3e10;
var myDogName = 'Ricky';
var myDogHasLegs = 4;
myDogHasLegs = 'Has 4 legs';
var someMessage = 'Hello TypeScript';
var numberArray = [1, 2, 3, 4, 5, 6];
var tuplesArray = [10, 20, 30, 40, 50];
var someArr = ['Hello', 23, true];
var variable = 100;
variable = 'New String';
console.log(variable);
var showMyName = function (userName) {
    console.log(userName);
};
showMyName('Roman');
var throwMessage = function (message) {
    for (var i = 0; i < 10; i++) {
        if (i <= 5) {
            throw new Error(message);
        }
    }
};
throwMessage('Loops Error');
