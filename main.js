// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;
    if(x!=0){
        console.log('Вірно')      ///???????????? Не можу зрозуміти останнє речення:Перевірте
                                  // скрипт при a, що дорівнює 1, 0, -3 (Що конкретно вимагається)
    } else {
        console.log('Невірно')
    }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, 
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
    let time=16;
    if (time<=15){
        console.log('Перша чверть')
    } else if(time<=30){
        console.log('Друга чверть')
    }else if(time<=45){
        console.log('Третя чверть')
    }else if(time<=60){
        console.log('Четверта чверть')
    }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) 
// місяця потрапляє це число (у першу, другу чи третю).    

    let day=11;
    if(day<=10){
        console.log('First decade')
    }else if(day<=20){
        console.log('Second decade')
    }else if(day<=30){
        console.log('Third decade')
    }else{
        console.log('More than thirty')
    }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані 
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//     let week=+prompt('Choose number of day of week');
let week=2;
    switch(week){
        case 1:
            document.write('Programming');
            break;
        case 2:
            document.write('at work');
            break;
        case 3:
            document.write('Gym');
            break;
        case 4:
            document.write('go to the cinema at 10pm');
            break;
        case 5:
            document.write('pub');
            break;
        case 6:
            document.write('Football');
            break;
        case 7:
            document.write('Weekend');
            break;
        default:
            document.write('Sorry, but you can tap from 1 to 7');
    }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

    let num=20;
    let num2=458; 
    
    if (num>num2){
        console.log(num)
    }else if(num<num2){
        console.log(num2)
    }else{
        console.log('Numbers are equal')
    }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, 
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy 
// (хибноподыбне, тобто кастується до false)
let b=''|| "default";
    console.log(b);
