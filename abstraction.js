function Employee(name, salary, years){
    this.name = name;
    this.salary = salary;
    this.years = years;
    let bonus = 5000;

    

    let getBonus = function(){
        let finalsalary = salary + bonus
            
        console.log('Including Bonus the Final salary is RS: '+ finalsalary);
    }

    this.getSalary = function(){
      
      console.log('The Employee'+ ' ' + this.name + ' ' + 'has a experiance of' + ' ' + this.years + ' ' + 'years and get the salary of RS:'+ this.salary);
      getBonus();
    }
}



let Employee1 = new Employee('Justin', 40000, 3)


Employee1.getSalary();

