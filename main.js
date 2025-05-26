// //დავალება N4 (JS)

// //
// let age = 15;

// if (age < 18){
//     console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
// }

//      else  if  (age>18) {
//         console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება"); }

//         else {
//             console.log("მითითებული ასაკი არასწორია!") }
        


// //დავალება N5 (JS)
          
     
// let temperature = Number(prompt('ჩაწერე ტემპერატურა'))
// switch(true){
//     case temperature <0:
//         console.log("ყინავს!");
//         break;
//         case temperature >=0 && temperature<=10:
//             console.log('ძალიან ცივა')
//             break;
//             case temperature >=11 && temperature <=20:
//                 console.log('ცივა');
//                 break;
//                 case temperature >=21 && temperature<=30:
//                     console.log('თბილა')
//                     break;
//                     case temperature >30:
//                         console.log('ცხელა')
//                     break;
//                     default:
//                         console.log('მონაცემები არ მოიძებნა')
            
//             }




            



//             // დავალება 6
            
// const array = [10, 20, 30, 40, 50];
// const valueToFind = 31;

// if (array.includes(valueToFind)){
// console.log('რიცხვი ნაპოვნია')
// }
// else{
//  console.log('"რიცხვი არ მოიძებნა"')   

// }


// //დავალება N7 (JS) 
// let qustion=prompt('"ჩაწერე შენი სახელი')

// console.log(`"გამარჯობა, "${qustion}" , რით შემიძლია დაგეხმაროთ?"`) 



// //დავალება N8 (JS) 
// let colors = ['Red', 'Green', 'Blue'];
// console.log(alert(`პირველი ფერი არის : ${colors.shift()} , ბოლო ფერი არის : ${colors.pop()}`))


//დავალება N9 (JS)
// მომხარებელს შევეკითხოთ რომ ჩაწეროს რიცხვი,

// თუ ჩაწერილი რიცხვი კენტია გამოვიდეს შეტყობინება ეკრანზე : "რიცხვი 

// კენტია" 

// თუ ჩაწერილი რიცხვი ლუწია გამოვიდეს შეტყობინება ეკრანზე : "რიცხვი ლუწია"

let inputNumberi = prompt(`ჩაწერე რიცხვი`)
if(inputNumberi %2 ===0 ){
    alert(`რიცხვი ლუწია`)

}
else{
    alert(`რიცხვი კენტია`)

}