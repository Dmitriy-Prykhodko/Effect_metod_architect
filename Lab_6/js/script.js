class Component{
    accept(visitor){}
}

class Company extends Component{
    department_list = []

    constructor(department){
        super()
        this.department_list = department
    }

    accept(visitor){
        visitor.visitCompany(this)
    }
}

class Department extends Component{
    employee_list = []

    constructor(employees){
        super()
        this.employee_list = employees
    }

    accept(visitor){
        visitor.visitDepartmen(this)
    }
}

class Employee{
    position_name = ""
    salary = 0

    constructor(name_pos, salary){
        this.position_name = name_pos
        this.salary = salary
    }
}

class Visitor{
    visitCompany(component){
        let i = 1
        console.log(`Зарплатна відомість компанії`);
        component.department_list.forEach(element => {
            console.log(`Департамент ${i}`)
            element.employee_list.forEach(element => {
                console.log(`Співробітник ${element.position_name} зарплата ${element.salary}`);
            });
            i++
        });
    }

    visitDepartmen(component){
        console.log(`Зарплатна відомість департаменту`);
        component.employee_list.forEach(element => {
            console.log(`Співробітник ${element.position_name} зарплата ${element.salary}`);
        });
    }
}

let employee_1 = new Employee('pos_1', 100)
let employee_2 = new Employee('pos_2', 200)
let employee_3 = new Employee('pos_3', 300)
let employee_4 = new Employee('pos_4', 120)
let employee_5 = new Employee('pos_5', 220)
let employee_6 = new Employee('pos_6', 320)

let department_1 = new Department([employee_1, employee_2, employee_3])

let department_2 = new Department([employee_4, employee_5, employee_6])

let company = new Company([department_1, department_2])

let visitor = new Visitor()
department_1.accept(visitor)
department_2.accept(visitor)

company.accept(visitor)