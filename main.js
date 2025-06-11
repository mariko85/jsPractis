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


// // დავალება N12 (JS)

// let age = Number(prompt('Enter your age'))
// let type =prompt('Enter movie type (regular or 3D):')
// let time =prompt('Enter time of day (matinee or evening):')
// let tiket=0;
// switch (true)  {
//     case age <10:
//         tiket=5 ;
//         break;

//          case age >10 && age<65 :
//         tiket= 15 ;
        

//          case age >65:
//         tiket=10 ;
        

//         default:
//         console.log('ბილეთის საწყისი ')
// }

// if(type ==='3D' && time ==='evening'){
//             tiket=tiket+10
//         }
//          else if(time == 'evening' || type =='3D' ){
//             tiket=tiket+5
//          }
//          else{
//             tiket=tiket
//          }
//          console.log(`ბილეთის საწყისი ფასი ${ tiket}`)

// let sale=true;
// if(sale ==true){
//     console.log('ფასდაკლება   ' + tiket*25/100)
//      console.log('სულ ფასი   ' +(tiket=tiket-5))
// }




// დავალება 13



// let choise =prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math')

//  let question =0;
//  let answer =0;


//  switch(true){
//     case (choise== 1):
//         question = "რა არის რა არის typeof(5)?"
//         answer= prompt(question)
//          if (answer.toLowerCase() === "number"){
            
//         alert('პასუხი სწორია')}
//         else {
//          alert("სამწუხაროდ ვერ გამოიცანით");
//         }
//         break;
//         case (choise ==2):
            
//             question =  "შეიძლება თუ არა let-ის რედეკლალირება"
//             answer =prompt(question)
//             if (answer.toLowerCase() === "yes"){
//                 alert('sworia')
//             }
//             else{
//                 alert('arasowria')
//             }
//             break;

//                case (choise ==3) :
            
//             question =  "რას აბრუნებს console.log(Math.floor(2.1)) "
//             answer =prompt(question)
//             if (answer.toLowerCase() === "ori"){
//                 alert('sworia')
//             }
//             else{
//                 alert('arasowria')
//             }
//             break;
           


//  }


//     //დავალება 14
// function getFeedback(num ,string){

//     if( num<51){

      
//        return `სამწუხაროდ ${string} თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${51-num} ქულა, უკეთესად მოემზადეთ`
//     }
//      else if (num>51 && num<90){

      
//        return `გილოცავთ ${string}  თქვენ  ${num-51} ქულით მეტი აიღეთ ბარიერზე, `

//     }  
    
//     else  if ( num>90){
      
//        return ` ${string} ძალიან კარგი შედეგია `

//     } 
//     else{
//         return "მონაცემები არ მოიძებნა"
//     }
     
   

// }

// getFeedback(60,'mari')

//  console.log(getFeedback(60,'mari'))


// davaleba 15
 //შექმენით ფუნქცია რომელიც 2 prompt-ით შეგეკითხებათ სახელს და პაროლს, თუ სახელი იქნება "admin" და პაროლი "1234", 
 // //დაწეროს ტექსტი Hello Admin, წინააღმდეგ შემთხვევაში Hello guest.

// let adminName=prompt (` რა გქვია?`)
//   let password = prompt(`დაწერე პაროლი`)
//   function greetAdmin(num, string ){
     
    
//      if( adminName == 'Admin' && password==1234){
//          return 'Hello Admin'
//      }
//      else{
//          return 'Hello guest'
//      }

//   }

//   greetAdmin( 1234,'Admin')
//   console.log (greetAdmin( 1234,'Admin'))


// davaleba 16
// ექმენით ფუნქცია რომელიც 2 prompt-ით მიიღებს საათს მაგ: 10:00 და მეორე PM ან AM , ამის
// მიხედვით გადაიყვანოს 22:00-ად ან უბრალოდ დატოვებს 10:00-ად(დამოკიდებული იქნება PM-ზე და AM-ზე


// function times (){
//     let time =Number(prompt(`დაწერე მიმდინარე საათი`))
// let timeAmPm =prompt(`დაწერე PM ან AM`)
//     if(timeAmPm == 'PM'){

//         return time = time+ 12
        
//     }
// else {
//     return time
//     console.log(time)
// }

// }

// times()



// davaleba 17
//ფუნქცია რომელსაც გადავცემთ ორ სიტყვას და უნდა შეადაროს ასოების რაოდენობა.
//თუ დაემთხვევა პირველი სიტყვის ასოები მეორეს დააბრუნოს true თუ არა false .

// let string1 = prompt(`ჩაწერე პირველი სიტყვა `)
//  let string2 = prompt(`ჩაწერე მეორე სიტყვა `)
// function chaleng(){
 
//     let array1 = string1.split('')
//     let array2 =string2.split('')
    
// if (array1[0]=== array2[0]){
//         return true
//         }
//     else {
//         return false
//     }

// }
// chaleng()
// console.log(chaleng())

//davaleba 18
// დაწერე პროგრამა, რომელიც მასივში არსებულ ყველა string-ს გამოიტანს კონსოლში.
// თუ სტრინგი იქნება ჩაწერილი HeLLo-ს სახით, ჯერ ჩაწეროს პატარა ასოებით და შემდეგ გამოიტანოს. // hello

let subject= ['MATH' ,'FISIX', 'GEOGRAFI', 'BIOLOGY']
// for (let i=0; i<subject.length; i++){
   
//    console.log(subject[i].toLowerCase())

// }

//an
// for (let i=0; i<subject.length; i++){
   
//    let m=subject[i][0].toUpperCase()+subject[i].slice(1,subject[i].length).toLowerCase()
//   console.log(m) 
// }
 

//davaleba 19

// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მისი ყველა გამყოფის მასივს.
// მაგალითად :
// console.log(getDivisors(12)); // 12-ის გადაცემის შემდეგ მივიღოთ ასეთი შედეგი [1, 2, 3, 4, 6, 12]

// მინიშნება:ერთი რიცხვის მეორეზე გაყოფისას თუ ნაშთი უდრის 0-ს მაშინ ეს მისი გამყოფია.

// დაგჭირდებათ for loop-ი და if ოპერატორი.
// ასევე მეთოდი რომელიც ელემენტებს array-ში ამატებს.

// function getDivisors(number){
//     let array =[]
//     for( let i=0; i <=number; i++){
//         if(number% i === 0){
//             array.push(i)
//         }
//     }
//     return array
// }



// console.log(getDivisors(5))


//დავალება20

//შექმენი ობიექტი, რომელიც შეიცავს რამდენიმე წიგნის მონაცემებს (title, author, year)
// //  და ფუნქცია, რომელიც დააბრუნებს წიგნის სათაურს.

// let books = {
//     title:'ჩემი თავგადასავალი',
//     author: "ი. ჭავჭავაძე",
//     year: 2005,
      
// }

// function getBook(){
//     return books.title
// }

// console.log(getBook())



// //დავალება  21
// აღწერა: შექმენი ღილაკი და p ელემენტი. როდესაც ღილაკს დააჭერ, p-ში ტექსტი უნდა შეიცვალოს

// let text= document.getElementById("textArea")
// let button =document.getElementById("changeTextB")

// button.addEventListener('click', function(){
//     text.textContent="დავალება 21"
// })


// davaleba 22
//აღწერა: შექმენი input ველი და ღილაკი. როდესაც ღილაკს დააჭერ, გვერდზე გამოჩნდეს ის ტექსტი, რაც მომხმარებელმა input-ში ჩაწერა.

let input =document.getElementById("inputtext")
let button =document.getElementById("changebutton")
let text= document.getElementById('text')

input.addEventListener("keydown",function(event){
        let x=event.key
        console.log(x)
  button.addEventListener('click',function(){
        text.textContent = x
    })
    })
    
   

