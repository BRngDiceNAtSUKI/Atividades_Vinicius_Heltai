// Classes para cada parte da pizza
class Tamanho {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Borda {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Sabor {
  constructor(nome) {
    this.nome = nome;
  }
}

// Classe principal Pizza
class Pizza {
  constructor(tamanho, borda, sabores) {
    if (sabores.length > 3) {
      throw new Error("Você só pode escolher até 3 sabores!");
    }
    this.tamanho = tamanho;
    this.borda = borda;
    this.sabores = sabores;
  }

  montarPizza() {
    console.log(`Pizza ${this.tamanho.tipo}, borda ${this.borda.tipo}, sabores: ${this.sabores.map(s => s.nome).join(", ")}`);
  }
}

// Exemplo de uso
const tamanho = new Tamanho("Grande");
const borda = new Borda("Catupiry");
const sabores = [new Sabor("Calabresa"), new Sabor("Mussarela"), new Sabor("Frango")];

const minhaPizza = new Pizza(tamanho, borda, sabores);
minhaPizza.montarPizza();
