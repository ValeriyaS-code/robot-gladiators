var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    //random number function
  var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

    var damage = randomNumber(playerAttack -3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);

    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

//Start function
var startGame = function() {

  playrHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

};
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    var pickedEnemyName = enemyNames[i];

    enemyHealth = randomNumber(40, 60);
    fight(pickedEnemyName);
  }
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
  startGame();
};


startGame()