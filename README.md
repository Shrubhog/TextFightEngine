# TextFightEngine
A short Engine to randomize fighting monsters in Javascript
## How it works
I'm going to have a set of monsters with different attacks, cooldowns and names.
```javascript
var Monsters = {
  {
    name: "Orc",
    attack: 1,
    cooldown: 1
  },
  {
    name: "Wizard",
    attack: 2,
    cooldown: 0.5
  },
  ...,
  {
    name: "Programmer",
    attack: 0.01,
    cooldown: 5
  }
}
```
Choose one randomly, then display it.
UI is iffy right now.
# Todo
* Add actual javascript file (Done)
