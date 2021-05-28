class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.xPos = 0;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      xPos : this.xPos
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsEnd(){
    database.ref("CarsEnd").on("value",(data)=>{
      this.rank = data.val();
    })
  }
  static UpdateCarsEnd(rank){
    database.ref("/").update({
      CarsEnd: rank
    })
  }
  
}
