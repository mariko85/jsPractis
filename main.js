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

// let inputNumberi = prompt(`ჩაწერე რიცხვი`)
// if(inputNumberi %2 ===0 ){
//     alert(`რიცხვი ლუწია`)

// }
// else{
//     alert(`რიცხვი კენტია`)

// }



//	დავალება N10 (JS)
// let inputString = prompt(`დაწერე სიტყვა`)
// if (inputString[0] === 'A' || inputString[0]=='E' || inputString[0]=='I'  || inputString[0]=='O' || inputString[0] =='U' ){
//     console.log("სიტყვა იწყება ხმოვანით, რომელიც არის "+inputString[0])
// }
// else{
//      console.log("სიტყვა არ იწყება ხმოვანით, რომელიც არის "+inputString[0])

// }


	
// დავალება N11 (JS)
// # ჩელენჯის ინსტრუქცია
// // 

// let player1 = prompt ("Player 1, enter rock, paper, or scissors:").toLowerCase()
// let player2 =prompt("Player 2, enter rock, paper, or scissors:")

// function rockPaperScissors (player1,player2){


// if (player1 == 'rock' && player2 == 'scissors' ){


//    console.log('player1 is  winnder') 
// }
// else if (player1 == 'scissors' && player2 == 'paper' ){
// console.log('player1 is  winnder') 
// }

// else if (player1 == 'paper' && player2 == 'rock' ){
// console.log('player1 is  winnder') 
// }

// else{
//     console.log('player2 is  winnder') 
// }


// }

// rockPaperScissors(player1,player2)


//დავალება N12 (JS)

let age = Number(prompt('Enter your age'))
let type =prompt('Enter movie type (regular or 3D):')
let time =prompt('Enter time of day (matinee or evening):')
let tiket=0;
switch (true)  {
    case age <10:
        console.log(tiket=5)
        break;
        case age >10 && age <65:
         console.log(tiket=15)
        break;    
         case age >65 :
         console.log(tiket=10)
        break;   
       
        case type == '3D':
            console.log(tiket=tiket+5)
            break;
            case time=='evening':
                console.log(tiket=tiket+5)
                break
                 default:
   console.log('მონაცემები არ მოიძებნა') 
}



switch(true){
       case type == '3D':
            console.log(tiket=tiket+5)
            break;
            
                 default:
   console.log('მონაცემები არ მოიძებნა') 
}


switch(true){
       
            case time=='evening':
                console.log( 'ბილეთის ფასი თქვენთვის არის'+ (tiket=tiket+5))
                break;
                 default:
   console.log('მონაცემები არ მოიძებნა') 
}
let sale=true;
if(sale ==true){
    console.log('ფასდაკლება   ' +5)
     console.log('სულ ფასი   ' +(tiket=tiket-5))
}

