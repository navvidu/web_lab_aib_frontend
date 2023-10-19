
//№4
var arrayStudents = [{Name:'Петров А.А.', Mark: 5},
    {Name:'Иванов Б.Б.', Mark: 3.4},
    {Name:'Сидоров Г.Г.', Mark: 9},
    {Name:'Немолодой Д.Д', Mark: 2},
    {Name:'Молодой Е.Е', Mark: 3.4}];

var sumOfMarks = 0;
var numberOfStudents = 0;
var badStudents = [];

arrayStudents.forEach((student)=>{
    if(student.Mark > 5 || student.Mark < 0)
    {
        console.log(`${student.Mark}`);
        return;
    }
    if(student.Mark < 4) 
        badStudents.push(student);
    sumOfMarks += student.Mark;
    numberOfStudents++;
});
var avrgMark = 0;
avrgMark = sumOfMarks/numberOfStudents;
console.log('Средняя оценка: '+ avrgMark);
console.log('Плохие студенты:');
if(badStudents.length === 0 ) 
    console.log('Таких нет');
badStudents.forEach((student)=>{console.log('Фио: '+ student.Name +'; Оценка: '+ student.Mark)});
