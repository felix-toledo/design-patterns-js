import {Materia} from '../src/state/Materias'

// Creamos una materia para que a medida que vayamos cargando notas, vaya cambiando de estado.
const ingenieriaDeSoftware = new Materia('Ing. de Software');

//Añadimos la primer nota y chequeamos que el estado sea "promocionar"
test("Add first nota, has to promote", () =>{
     ingenieriaDeSoftware.agregarNotas(8);
     const estado = ingenieriaDeSoftware.state.stateName;
     expect(estado).toBe("promocionar")
})

//Añadimos la segunda nota y chequeamos que el estado sea "regular"
test("Add second nota, has to be regular", () =>{
     ingenieriaDeSoftware.agregarNotas(6);
     const estado = ingenieriaDeSoftware.state.stateName;
     expect(estado).toBe("regular")
})

//Añadimos la tercer nota y chequeamos que el estado sea "desaprobar"
test("Add third nota, has to disapproved", () =>{
     ingenieriaDeSoftware.agregarNotas(1)
     const estado = ingenieriaDeSoftware.state.stateName;
     expect(estado).toBe("desaprobar")
})