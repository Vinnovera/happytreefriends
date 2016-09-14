export default class Tile {

  constructor (){
    this.attributes = {
      maxBuyers : 5
    }

    this.states = {
      sentiment: 50,
      alert    : 50,
    }

    this.bots = {};
  }
}
