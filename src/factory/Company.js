class Developer {
     constructor(name) {
          this.name = name;
          this.type = "Developer";
     }
}

class Tester {
     constructor(name) {
          this.name = name;
          this.type = "Tester";
     }
}

export class Company{
     constructor(){
          this.employees = [];
     }
}

export class EmployeeFactory {
     constructor(company) {
          this.create = (nameOf, type) => {
               switch (type) {
                    case 1:
                         company.employees.push(new Developer(nameOf))
                         break;
                    case 2:
                         company.employees.push(new Tester(nameOf))
                         break;
               }
          };
     }
}

