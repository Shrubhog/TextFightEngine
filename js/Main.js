
var Monsters = [
    {
      name:"Orc",
      health:5,
      attack:2,
      cooldown:2
    },
    {
      name:"Goblin",
      health:3,
      attack:1,
      cooldown:0.5
    },
    {
      name:"Pizza Guy",
      health:2,
      attack:0,
      cooldown:10
    }
]
var Modifiers = [
  {
    modifier:"Slow",
    cooldown:0.5
  },
  {
    modifier:"Buff",
    attack:1
  },
  {
    modifier:"Healthy",
    health: 1
  },
  {
    modifier:"Sickly",
    health:-1
  }
]
function pickMonster() {
  var monster =  Monsters[Math.round(Math.random * Monsters.length)]
  document.getElementById("MonsterName").innerHTML = monster.name
  document.getElementById("MonsterAttack").innerHTML = monster.attack
  document.getElementById("MonsterHP").innerHTML = monster.health
  document.getElementById("MonsterCooldown").innerHTML = monster.cooldown
  var modifier = Modifiers[Math.round(Math.random * Modifiers.length)]
  document.getElementById("Modifier").innerHTML = modifier.modifier
  if (typeof modifier.attack !== "undefined") {
    document.getElementById("MonsterAttack").innerHTML = monster.attack + " + " + modifier.attack
  } else if (typeof modifier.health !== "undefined") {
    document.getElementById("MonsterHP").innerHTML = monster.health + " + " + modifier.health
  } else if (typeof modifier.cooldown !== "undefined") {
    document.getElementById("MonsterCooldown").innerHTML = monster.cooldown + " + " + modifier.cooldown
  }
}
