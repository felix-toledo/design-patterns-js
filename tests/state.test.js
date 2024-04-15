import {Materia} from '../src/state/Materias'

// Creamos un personaje y lo hacemos interactuar con diferentes estados
const ingenieriaDeSoftware = new Materia('Ing. de Software');

test("Add first nota, has to promote", () =>{
     ingenieriaDeSoftware.agregarNotas(8);
     const estado = ingenieriaDeSoftware.state.stateName;
     expect(estado).toBe("promocionar")
})

test("Add second nota, has to be regular", () =>{
     ingenieriaDeSoftware.agregarNotas(6);
     const estado = ingenieriaDeSoftware.state.stateName;
     expect(estado).toBe("regular")
})

test("Add third nota, has to disapproved", () =>{
     ingenieriaDeSoftware.agregarNotas(1)
     const estado = ingenieriaDeSoftware.state.stateName;
     expect(estado).toBe("desaprobar")
})