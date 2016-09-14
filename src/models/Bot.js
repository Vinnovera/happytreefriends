export default class Bot {

  constructor (name){
    this.attributes = {
      strength     : 50,
      intelligence : 50,
      agility      : 50
    }

    this.states = {
      loyalty: 0,
      idle   : 0,
      cash   : 0
    }

    this.name = name;
  }

  update () {
    this.attributes.strength += 10;
  }
}
