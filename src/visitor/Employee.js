//Vamos a crear la clase employee
export class Employee {
     constructor(name, salary) {
         this.name = name;
         this.salary = salary;
     }

     getSalary(){
          return this.salary;
     }
     setSalary(sal){
          this.salary = sal;
     }

     //Metodo que da acceso al visitor
     accept(visitorFunction){
          visitorFunction(this)
     }
 }

 ///////////////////////////////////////
//Tenemos la funcion extrasalary que va a ser el visitor.
export function ExtraSalary(emp){
     emp.setSalary(emp.getSalary() * 2);
}
