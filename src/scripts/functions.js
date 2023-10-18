// function sum(a, b){
//     return a + b;
// }
// const result = sum(1,2);
// console.log(result);
// console.log(sum(1, 2));

// napisz fukcję, która zwraca "Cześć, Janusz", przy czym
//Janusz to parametr


 function greetings (name){
 return "Cześć, " + name;
}
console.log(greetings("Janusz"));

function getDayName(day){
 if (day === 0) {
 return "niedziela";
}
if (day ===1){
 return "poniedziałek";
 }
}
console.log(getDayName(0));  niedziela


// wypisz 6 licz z zakresu 0-49
let min =0;
let max = 49;
function drawDigit (quantity) {
const temp = [];

while (temp.length < quantity ) {
const digit  = Math.floor(Math.random() * 48 + 1);
if(!temp.includes(digit)){
temp.push(digit)
 }

 }
return temp;
}
console.log(drawDigit(8));



//fn, do zwracania intersection 2 tablic
//algorytm postępowania
// 1.stworz fn, która przyjmuje mu dwa parametry
// 2.Stwórz pustą tablicę, do zapisu powtarzających się danych
// 3.Przeliteruj po pierwszej tablicy -for
// 4. Sprawdz w iteracji kazdy element, czy jest w drugiej -includes
// 5.Jeżeli jest do dodaj do pustej tablicy -push
// 6.Po interacji zwróc tanlicę z pkt 2




function arrayIntersection (arr1, arr2) {
    let result = [];

    for (let  i =0; i<= arr1.length; i++){
        if (arr2.includes(arr1[i])){
            result.push(arr1[i]);

        }
    }
    return result;
}
// console.log(arrayIntersection([1, 2, 3, 4,], [2, 4, 11]))

// myLord - Witaj mój Panie!, Co jeszcze mogę dla Ciebie zrobić.
// Pięknie dzisiaj wygladasz!

// 1. Stwórz fn, które nie ma arg
// 2.Stworz tablicę z tekstami i przypisz do zmiennje
// 3.Zwróć losowy test zalezny od indeksu z tablicy


function myLord () {
    const sentense = ["Witaj mój Panie!", "Co jeszcze mogę dla Ciebie zrobić", "Pięknie dzisiaj wygladasz!"];
    return sentense[Math.round(Math.round() * (sentense.length -1 ))];
}


console.log (myLord())



