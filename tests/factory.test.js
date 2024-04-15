import {EmployeeFactory, Company} from '../src/factory/Company'

const company = new Company();
const employeeFactory = new EmployeeFactory(company);


test("Add a new dev", () =>{
     employeeFactory.create("Felix", 1);
     const typeOfEmployee = company.employees[0].type;
     expect(typeOfEmployee).toBe("Developer")
})

test("Add a new tester", () =>{
     employeeFactory.create("Lauti", 2);
     const typeOfEmployee = company.employees[1].type;
     expect(typeOfEmployee).toBe("Tester")
})


