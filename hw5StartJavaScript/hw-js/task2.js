// // A function which returns reversed string. //

function reverse(n) {                   // !==>!    // наша функция     n - строка которую мы будем выводить в обратном порядке
    let reverseStr = '';                // !==>!    // переменная для создания строки реверса
    for (i =-- n.length; i >= 0; i--){  // !==>!    // (i = n.length - 1; i >= 0; i--) переберает строку 
        reverseStr += n[i];             // !==>!    // записывает новую строку
    }
    console.log(reverseStr);            // !==>!    // выводит обратную строку
}
reverse(`cursor:)>`);                   // !==>!    // запись того что мы хотим получить в обратном порядке
reverse(`iOld`);

// Сапорты напишите если я что-то не правильно записал


// Ниже пробные варианты. //


// function reverse(n) {
//     let reverseStr = '';
//     for (i =-- n.length; i >= 0; i = i - 1) {
//         reverseStr = reverseStr + n[i];
//     }
//     console.log(reverseStr);
// }
// reverse(`cursor:)>`);                   
// reverse(`iOld`);