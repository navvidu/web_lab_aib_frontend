
//№3
var numberOfPeople = prompt('Введите кол-во человек ', undefined);
if (!isNaN(parseFloat(numberOfPeople)))
{
    numberOfPeople = parseFloat(numberOfPeople)
}
else{
    numberOfPeople = 0;
}
while(numberOfPeople === 0)
{ 
    var numberOfPeople = prompt('Введите кол-во человек ', undefined);
    if (!isNaN(parseFloat(numberOfPeople))) {
        numberOfPeople = parseFloat(numberOfPeople)        
    }else{
        numberOfPeople = 0;    
    }
}
var salaryOfAPerson = prompt('Введите зарплату на человека ', undefined);
if (!isNaN(parseFloat(salaryOfAPerson)))
{
    salaryOfAPerson = parseFloat(salaryOfAPerson);
} else 
{
    salaryOfAPerson = 0;
}
while(numberOfPeople === 0) 
{
    var salaryOfAPerson = prompt('Введите зарплату на человека ', undefined);
    if (!isNaN(parseFloat(salaryOfAPerson))) 
    {
        salaryOfAPerson = parseFloat(salaryOfAPerson)
    } else {
        salaryOfAPerson = 0;
    }
}
alert('Затраты на ЗП = ' + numberOfPeople * salaryOfAPerson);