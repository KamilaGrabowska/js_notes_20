// Redeklaracja zmiennych
//Deklaracja zmiennej to stworzenia  jej za pomoca np. let x;

// var x1 =42;
// var x1 =666;
//
// let x2 =42;
// let x2 =666; // nie mozna re-deklarować, bład
//
// const x3 =42;
// const x3 =666; //nie mozna re-deklarować, bład

//Reinicjalizacja
//Przypisanie nowej wartości do instnmiejacej zmiennej np. x =42;

// var x1 =42;
// x1 =666;
//
// let x2 =42;
// x2 =666;
//
// const x3 =42;
// x3 =666; // const nie mozna reinicjalizować


//Hoisting
// przenoszenie deklaracji zmiennych , deklaracji funkcji nazwanych, deklaracji klas
// na górę aktualnie przetwarzanego zasiegu. TDZ temporary dead zone(tymczsowa strefa smierci)

// function doSmthAwesome() {
//     var z1;
//     console.log(z1);
//     z1 = 42;
// }
// oSmthAwesome()

// Scope -zasieg
// Widoczność, dostepność indentyfikatorow (nazwy zmiennych, funkcji i klas)
//- global - wszędzie jest coś dostępne
//- loklany - dostępny tylko w katulanym zasiegu
// - funkcyjny -tworzony przez ciało finckcji
// - block scope - tworzony przez block, dowolna para 2 klamerek - {}

// function doSmth() {
//     var x1=42;
//     let x2=42;
//     const x3=42;
// }
// doSmth();
// console.log(x1, x2, x3) sa niedostepne w aktualnym scope, są zadeklarowane wew. funkcji

// if (true) {
//     var x1=42;
//     let x2=42;
//     const x3=42
// }
// console.log(x1);
// console.log(x1, x2, x3);

// let x =42;
// function doSmthMagic() {
    // x=666; kiedy nie ma deklarcji zmiennej to szuka w zasiegu otaczajacym/wyżej
    // let x = 666 ; kiedy jest deklaracja, to jest tworzona nowa zmienna, a ta wyzej nie jst używana
    // console.log(x);
// }
// doSmthMagic();
// console.log(x);


// for (let i=0; i<10; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, 0)
// }

