// Definimos la clase State que representa el estado del personaje
class State {
  constructor(materia) {
      this.stateName;
      this.materia = materia;
  }

  regular() {}

  desaprobar() {}

  promocionar() {}
}

// Definimos la clase Regular que hereda de State
class Regular extends State {
  constructor(materia) {
      super(materia);
      super.stateName = "regular";
  }

  desaprobar() {
      this.materia.changeState(new Desaprobar(this.materia));
  }

  promocionar() {
      this.materia.changeState(new Promocionar(this.materia));
  }
}

// Definimos la clase Desaprobar que hereda de State
class Desaprobar extends State {
  constructor(materia) {
      super(materia);
      super.stateName = "desaprobar";
  }

  regular() {
      this.materia.changeState(new Regular(this.materia));
  }

  promocionar() {
      this.materia.changeState(new Promocionar(this.materia));
  }
}

// Definimos la clase Promocionar que hereda de State
class Promocionar extends State {
  constructor(materia) {
      super(materia);
      super.stateName = "promocionar";
  }

  regular() {
      this.materia.changeState(new Regular(this.materia));
  }

  desaprobar() {
      this.materia.changeState(new Desaprobar(this.materia));
  }
}

// Definimos la clase Materia que contiene el estado actual de la materia en base a las notas obtenidas
export class Materia {
  constructor(name) {
      this.name = name;
      this.state = new Regular(this);
      this.notas = []; 
  }

  agregarNotas(nota) {
      this.notas.push(nota);
      let total = 0;
      let estado;
      for (let i = 0; i < this.notas.length; i++) { 
          total += this.notas[i];
          if (i === this.notas.length - 1) { 
              total = total / (i + 1);
          }
      }
      if (total >= 7.5) {
          estado = this.promocionar();
      } else if (total < 7.5 && total >= 5.5) { 
          estado = this.regular();
      } else if (total < 5.5) {
          estado = this.desaprobar();
      }

      return estado;
  }

  changeState(newState) {
      this.state = newState;
  }

  regular() {
      this.state.regular();
  }

  desaprobar() {
      this.state.desaprobar();
  }

  promocionar() {
      this.state.promocionar();
  }
}