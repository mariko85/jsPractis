//დავალება N4 (JS)

//
let age = 15;

if (age < 18){
    console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
}

     else  if  (age>18) {
        console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება"); }

        else {
            console.log("მითითებული ასაკი არასწორია!") }
        


//დავალება N5 (JS)
          
     
let temperature = Number(prompt('ჩაწერე ტემპერატურა'))
switch(true){
    case temperature <0:
        console.log("ყინავს!");
        break;
        case temperature >=0 && temperature<=10:
            console.log('ძალიან ცივა')
            break;
            case temperature >=11 && temperature <=20:
                console.log('ცივა');
                break;
                case temperature >=21 && temperature<=30:
                    console.log('თბილა')
                    break;
                    case temperature >30:
                        console.log('ცხელა')
                    break;
                    default:
                        console.log('მონაცემები არ მოიძებნა')
            
            }



