class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo =  tipo;
    }

    atacar(){
    let ataque;

    if (this.tipo === 'mago') {
      ataque = 'usou magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'usou espada';
    } else if (this.tipo === 'monge') {
      ataque = 'usou artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'usou shuriken';
    } else {
      ataque = 'não possui um tipo de ataque definido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
    

}
const heroi1 = new Heroi('Fulano1', 30, 'guerreiro');
heroi1.atacar();
const heroi2 = new Heroi('Fulano1', 30, 'ninja');
heroi2.atacar();