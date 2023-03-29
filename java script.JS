// Создать переменную “item_1”
// Присвоить переменной item_1 цифру 5.
// Вывести в консоль item_1.
var item_1 = 5;
console.log(item_1);
// Создать переменную “item_2”
// Присвоить переменной item_2 цифру 3.
// Вывести в консоль item_2.
var item_2 = 3;
console.log(item_2);
// Создать переменную “item_3”
// Присвоить переменной item_3 сложение item_1 и item_2.
// Вывести в консоль item_3.
var item_3 = item_1+item_2;
console.log(item_3);
// Создать переменную “item_4”
// Присвоить переменной item_4 строку “Yolochka”
// Вывести в консоль item_4.
var item_4 ="Yolochk";
console.log(item_4);
// Вывести в консоль сложение item_3 и item_4.
// Вывести в консоль умножение item_3 и item_4.
console.log(item_3 + item_4);
console.log(item_4 * item_4);
// Создать переменную “item_5”
// Присвоить переменной item_5 переменную item_3
var item_5 = item_3;
// Создать переменную item_6.
// Создать переменную item_6_type
// Присвоить переменной item_6 значение 15
// Присвоить переменной item_6_type тип переменной item_6
// Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
var item_6 = 15;
var item_6_type = item_6;
console.log("item_6 ==", typeof(item_6));
console.log("item_6_type == ",typeof(item_6_type));
// Создать переменную item_7 и в ней преобразовать item_6 в String.
// Создать переменную item_7_type
// Присвоить переменной item_7_type тип переменной item_7
// Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——
var item_7 = String(item_6);
var item_7_type = item_7;
console.log("item_7 ==", typeof(item_7));
console.log("item_7_type == ",typeof(item_7_type));
// Создать переменную “age_1” и присвоить ей значение 10
// Создать переменную “age_2” и присвоить ей значение 18
// Создать переменную “age_3” и присвоить ей значение 60
var age_1 = 10;
var age_2 = 18;
var age_3 = 60;
// Создать if в котором будите проверять значение переменной age_1
var result = age_1 < age_2;
if(result){
    console.log(age_1)
  }else{
    console.log("no result")
  }
// Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// Иначе выводите “Technical work”.
var age_1 = 89;
var age_2 = 45;
var age_3 = 8;
var result1 = age_1 < age_2;
var result2 = age_1 >= age_2 && age_1 <  age_3;
var result3 = age_1 > age_3;
if(result1){
  console.log("You don`t have access cause your age is " + age_1 + " It`s less then")
}else if(result2){
  console.log("Welcome  !")
}else if(result3){
  console.log("Keep calm and look Culture channel!")
}else{
  console.log("Technical work");
};
