//Employee es la clase
//Extrasalary es el visitor de la clase (la funcion extension)

import {Employee, ExtraSalary} from '../src/visitor/Employee'

const felix = new Employee ('Felix Toledo', 100);
const gonza = new Employee ('Gonzalo Cabral', 100);

//Chequeamos que sin utilizar el visitor, nos devuelva la función normal del empleado.
test("Check without visitor", () =>{
     const salary = felix.getSalary()
     expect(salary).toBe(100)
})

//Chequeamos que con el visitor, nos devuelva la función extendida del empleado.
test("Check with visitor", () =>{
     gonza.accept(ExtraSalary)
     const salary = gonza.getSalary()
     expect(salary).toBe(200)
})
