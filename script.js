const student = "Лисиця Василий Евгеньевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...




const v1 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);

const s1 = Array(1).fill([0, 0, 2, 2, 0, 0, 0]);

const v2 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);

const s2 = Array(1).fill([0, 0, 2, 2, 2, 0, 0]);

const k = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);

const array = [v1, s1, k, v2, s2];



const bt = 120;    // buy_ticket

const be = 23500;  // buy_end 

const mft = 150; // money_for_ticket

const mfl = 250;  // money_for_lanch

let mebt = mft - bt; // money_end_buy_ticket
let mb = 0; // money_box

let day = 0;
let week = 0;




for (let i = 0; i < array.length; i++) {

  for (let l = 0; l < array[i].length; l++) {
    
    week = week + 1;
    
    console.log('Номер Недели: ' + week);

    for (let s = 0; s < array[i][l].length; s++) {

      let element = array[i][l][s];
      
      day = day + 1;
      
      console.log('Номер Дня: ' + day);
      
      if (element > 0) {
        
        mb = mb + mebt;
        
        if (element <= 3) {
          
            mb = mb + mfl;
          
            console.log('Остаток: ' + mb)
        }
        
      }
      
      if(be <= mb) break
    
    }
    
    if(be <= mb) break
 
}
  
if(be <= mb) break

}

if(be <= mb){console.log('Вы купили приствку!', mb, day )

}

else{
  
    console.log('Вы не смогли купить приставку', day, mb);

}




