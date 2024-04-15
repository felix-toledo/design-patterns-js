//Creamos clase developer.
class Developer {
     constructor(name) {
          this.name = name;
          this.type = "Developer";
     }
}

//Creamos clase tester.
class Tester {
     constructor(name) {
          this.name = name;
          this.type = "Tester";
     }
}

//Creamos clase company (su unica funcion es alojar empleados)
export class Company{
     constructor(){
          this.employees = [];
     }
}

//Ahora utilizamos el patron de diseño factory para crear empleados.
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

