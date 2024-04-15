import {EmployeeFactory, Company} from '../src/factory/Company'

const company = new Company();
const employeeFactory = new EmployeeFactory(company);

//Test para añadir un nuevo empleado. Chequeamos que se cree un developer.
test("Add a new dev", () =>{
     employeeFactory.create("Felix", 1);
     const typeOfEmployee = company.employees[0].type;
     expect(typeOfEmployee).toBe("Developer")
})

//Test para añadir un nuevo empleado. Chequeamos que se cree un tester.
test("Add a new tester", () =>{
     employeeFactory.create("Lauti", 2);
     const typeOfEmployee = company.employees[1].type;
     expect(typeOfEmployee).toBe("Tester")
})


