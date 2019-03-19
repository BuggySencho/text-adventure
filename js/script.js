const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');
const stats = document.getElementById('stats');
let hitbox = document.getElementById('hitbox');
let health_stat = document.getElementById('health_stat');
let audio = document.getElementById('audio');

let currentLocation = 0;
let health = 100;

// audio.play();

let itemsA = [];
itemsA[0] = "key";
itemsA[1] = "weapon";

let inventory = [];



let locations = [];
locations[0] = "entrance (1)";
locations[1] = "breakfast room (2)";
locations[2] = "guest room (3)";
locations[3] = "closet (4)";
locations[4] = "porch (5)";
locations[5] = "art gallery (6)";
locations[6] = "toilet1 (7)";
locations[7] = "toilet2 (8)";
locations[8] = "front hall (9)";
locations[9] = "music hall (10)";
locations[10] = "library (11)";
locations[11] = "weapons room (12)";
locations[12] = "boiler room (13)";
locations[13] = "kitchen (14)";
locations[14] = "bar (15)";
locations[15] = "dining hall (16)";
locations[16] = "cellar entance (17)";
locations[17] = "hallway (18)";
locations[18] = "wine cellar (19)";
locations[19] = "d'aby gameroom (20)";
locations[20] = "warehouse storage room (21)";
locations[21] = "billiard room (22)";
locations[22] = "2nd floor gallery (23)";
locations[23] = "prayer room (24)";
locations[24] = "tower1 (25)";
locations[25] = "bathroom1 (26)";
locations[26] = "bathroom2 (27)";
locations[27] = "botanical garden (28)";
locations[28] = "master bedroom (29)";
locations[29] = "tower2 (30)";
locations[30] = "study room (31)";
locations[31] = "small bedroom 1 (32)";
locations[32] = "small bedroom 2 (33)";
locations[33] = "costume hall (34)";
locations[34] = "tofu shop";

images = [];
images[0] = "hallway.jpg";
images[1] = "breakfast_key.png";
images[2] = "guest.jpg";
images[3] = "closte.jpg";
images[4] = "porch.png";
images[5] = "art.jpg";
images[6] = "toilet.jpg";
images[7] = "toilet.jpg";
images[8] = "hall.jpg";
images[9] = "music.jpg";
images[10] = "library.jpg";
images[11] = "weapon_room_weapon.png";
images[12] = "boiler.jpg";
images[13] = "kitchen_phaser.png";
images[14] = "bar_blackPearl.png";
images[15] = "dining.jpg";
images[16] = "stairway.jpg";
images[17] = "basement-hall.jpg";
images[18] = "wine.jpg";
images[19] = "game.jpg";
images[20] = "storage.jpg";
images[21] = "billiard_fd.png";
images[22] = "2nd-floor-gallery_lightsaber.png";
images[23] = "CoffinRoom_ae86.png";
images[24] = "tower.jpg";
images[25] = "bathroom.jpg";
images[26] = "bathroom.jpg";
images[27] = "garden.jpg";
images[28] = "master-bedroom.jpg";
images[29] = "tower.jpg";
images[30] = "study_gaunlet.png";
images[31] = "bedroom.jpg";
images[32] = "bedroom.jpg";
images[33] = "costume-room.jpg";
images[34] = "eastereggs/tofu-shop.jpg"

directions = [];
directions[0] = ["go right", "go left", "go forward"];
directions[1] = ["go back"];
directions[2] = ["go right", "go back"];
directions[3] = ["go left", "go forward", "go back"];
directions[4] = ["go back"];
directions[5] = ["go back", "go left", "go right", "go forward"];
directions[6] = ["go back"];
directions[7] = ["go back"];
directions[8] = ["go back", "go left"];
directions[9] = ["go back", "go left", "go right"];
directions[10] = ["go back", "go left"];
directions[11] = ["go back", "go left"];
directions[12] = ["go back"];
directions[13] = ["go back", "go forward", "go right"];
directions[14] = ["go back"];
directions[15] = ["go back", "go right"];
directions[16] = ["go left", "go right", "go upstairs", "go downstairs"];
directions[17] = ["go left", "go right"];
directions[18] = ["go forward", "go back"];
directions[19] = ["go back"];
directions[20] = ["go forward"];
directions[21] = ["go upstairs", "go back"];
directions[22] = ["go back", "go left", "go right", "go forward",];
directions[23] = ["go back"];
directions[24] = ["go back", "go right"];
directions[25] = ["go back"];
directions[26] = ["go back"];
directions[27] = ["go back", "go left"];
directions[28] = ["go back", "go left"];
directions[29] = ["go back"];
directions[30] = ["go back", "go left", "go right"];
directions[31] = ["go back", "go forward"];
directions[32] = ["go back", "go forward"];
directions[33] = ["go back"];
directions[34] = ["go back"];

//forward, left, right, back
adjacent = [];
adjacent[0] = [5,2,1,-1];
adjacent[1] = [-1,-1,-1,0];
adjacent[2] = [-1,-1,3,0];
adjacent[3] = [4,2,8,0];
adjacent[4] = [-1,-1,-1,3];
adjacent[5] = [9,8,7,0];
adjacent[6] = [-1,-1,-1,5];
adjacent[7] = [-1,-1,-1,5];
adjacent[8] = [-1,3,-1,-1];
adjacent[9] = [-1,16,10,5];
adjacent[10] = [-1,11,-1,9];
adjacent[11] = [-12,13,-1,10];
adjacent[12] = [-1,13,-1,11];
adjacent[13] = [15,16,12,11];
adjacent[14] = [-1,-1,-1,15];
adjacent[15] = [-1,16,14,13];
adjacent[16] = [22,9,-1,17];
adjacent[17] = [-1,20,18,16];
adjacent[18] = [19,-1,-1,17];
adjacent[19] = [-1,-1,-1,18];
adjacent[20] = [21,-1,-1,17];
adjacent[21] = [22,-1,-1,20];
adjacent[22] = [30,24,16,-1];
adjacent[23] = [-1,-1,-1,22];
adjacent[24] = [-1,-1,27,22];
adjacent[25] = [-1,-1,-1,22];
adjacent[26] = [-1,-1,-1,22];
adjacent[27] = [-1,24,-1,22];
adjacent[28] = [-1,31,-1,22];
adjacent[29] = [-1,-1,-1,30];
adjacent[30] = [-1,29,-1,22];
adjacent[31] = [28,-1,-1,30];
adjacent[32] = [28,-1,-1,30];
adjacent[33] = [-1,-1,30,-1];
adjacent[34] = [-1,-1,-1,20];

descriptions = [];
descriptions[0] = "Dare you enter Dio's mansion?, this is your last chance to back out. (you can pick up items by clicking on them, you gain health when you find a new item, you can go any given direction by typing go and the direction you want to travel).";
descriptions[1] = "You could definetly enjoy some breakfast in this room, actualy you are quite hungry.";
descriptions[2] = "This guest room is even bigger than your living room, damn.";
descriptions[3] = "this is just a normal closet, nothing to see here, althoug it's quite big.";
descriptions[4] = "What a nice porch!";
descriptions[5] = "There's a lot of art, you don't understand everything.";
descriptions[6] = "It's a toilet.";
descriptions[7] = "It's another toilet.";
descriptions[8] = "This hall is seriously big, you could have a elephant walk around in here.";
descriptions[9] = "You hear some music in the distance, sounds like something you could drift on!";
descriptions[10] = "There are a lot of books here, you can't read though.";
descriptions[11] = "Now here is something you can use, try and pick up a weapon, it may prove usefull eventualy.";
descriptions[12] = "It's too hot in here, let's get out quick.";
descriptions[13] = "Finaly a place to regain some strength, you should take some food with you just in case you'l need it.";
descriptions[14] = "This is a bar, there is some wiskey here, but some voice in your head asks you why the rum is always gone, just ignore him.";
descriptions[15] = "This dining hall is perfect for eating some delicious food, but you'd better safe it.";
descriptions[16] = "This is a stairway, you can go upstairs or downstairs, but nobody likes basements.";
descriptions[17] = "This is the downstairs hallway, its pretty long.";
descriptions[18] = "A wine cellar!?, wel what a pleasant suprise.";
descriptions[19] = "A game room, how nice.";
descriptions[20] = "This storage room could hide some secrets, or maby not.";
descriptions[21] = "The billiard room, every man's dream.";
descriptions[22] = "This is the second floor gallery, you got some chills up your spine, that's never a good sign.";
descriptions[23] = "This looks like a prayer room, but no normal one though.";
descriptions[24] = "This is one of the two towers, looks empty.";
descriptions[25] = "This is one of the bathrooms, it looks gorgeous!";
descriptions[26] = "This is the other bathroom, it look nice.";
descriptions[27] = "This is the botanical garden, there are some weird plants in here. That sign over there says pirahna plant";
descriptions[28] = "This is the master bedroom, you look like you could take a nap.";
descriptions[29] = "This is the second tower, just the same as the other one.";
descriptions[30] = "This is the study room, looks like there was a lot of studying going on in here.";
descriptions[31] = "This is one of the smaller bedrooms, it's still pretty big though.";
descriptions[32] = "This is the other small bedroom, nothing to see here.";
descriptions[33] = "This is the costume hall, you can see yellow clothing and a green headband in here.";

myInput.addEventListener('keydown', getInput, false);

var newLocation;

let once = true;
let two = true;
let three = true;
let four = true;
let five = true;
let six = true;
let seven = true;
let eight = true;

hitbox.addEventListener('click',()=>
{
  if (currentLocation == 1) {
    if (once) {
      alert("Achievment unlocked: Get the key!");
      items.innerHTML += "<li>key</li>";
      health = max_health;
      health_stat.innerHTML = max_health;
      images[1] = "breakfast.jpg";
      once = false;
    }
  }
if (currentLocation == 11) {
  if (two) {
    alert("Achievment unlocked: Get Star Platinum (weapon)!");
    items.innerHTML += "<li>Star platinum</li>";
    health = max_health;
    playerDamage += 3;
    giveLocation();
    health_stat.innerHTML = max_health;
    images[11] = "weapon_room.jpg";
    two = false;
  }
}
else if (currentLocation == 14) {
  if (three) {
   alert("Achievement unlocked: You've got to be the best pirate i've ever seen!");
   health = max_health;
   health_stat.innerHTML = max_health;
   images[14] = "bar.jpg";
   three = false;
  }
}
else if (currentLocation == 23) {
  if (four) {
   alert("Achievment unlocked: Ghost of Akina!");
   health = max_health;
   health_stat.innerHTML = max_health;
   images[23] = "coffinRoom.jpg";
   four = false;
  }
}
else if (currentLocation == 13) {
  if (five) {
   alert("Achievment unlocked: Live long and prosper!");
   health = max_health;
   health_stat.innerHTML = max_health;
   images[13] = "kitchen.jpg";
   five = false
  }
}
else if (currentLocation == 21) {
  if (eight) {
  alert("Achievement onlocked: Team redsuns!")
  health = max_health;
  health_stat.innerHTML = max_health;
  currentLocation = 34;
  images[21] = "billiard.jpg"
  giveLocation();
  eight = false;
}
}
else if (currentLocation == 22) {
  if (six) {
   alert("Achievment unlocked: May the force be with you!");
   health = max_health;
   health_stat.innerHTML = max_health;
   images[22] = "2nd-floor-gallery.jpg";
   six = false;
  }
}
else if (currentLocation == 30) {
  if (seven) {
   alert("Achievment unlocked: It was....And it was beatifull!");
   health = max_health;
   health_stat.innerHTML = max_health;
    images[30] = "study.jpg";
   seven = false;
  }
}
})

let oldLocation;

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "go") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "forward":
          newLocation = adjacent[currentLocation][0];
          console.log(newLocation);
          if (newLocation == -2) {
            myDescription.innerHTML = blockedquote[currentLocation];
          }
            oldLocation = currentLocation;
            currentLocation = newLocation;
            break;
          case "back":
          if (adjacent[currentLocation] [3] !== -1) {
          newLocation = adjacent[currentLocation][3];
          console.log(newLocation);
          if (newLocation == -2) {
            myDescription.innerHTML = blockedquote[currentLocation];
          }
            oldLocation = currentLocation;
            currentLocation = newLocation;
          }
            break;
          case "right":
          newLocation = adjacent[currentLocation][2];
          console.log(newLocation);
          if (newLocation == -2) {
            myDescription.innerHTML = blockedquote[currentLocation];
          }
            oldLocation = currentLocation;
            currentLocation = newLocation;
            break;
          case "left":
          newLocation = adjacent[currentLocation][1];
          console.log(newLocation);
          if (newLocation == -2) {
            myDescription.innerHTML = blockedquote[currentLocation];
          }
            oldLocation = currentLocation;
            currentLocation = newLocation;
            break;
            case "upstairs":
            newLocation = adjacent[currentLocation][0];
            console.log(newLocation);
            if (newLocation == -2) {
              myDescription.innerHTML = blockedquote[currentLocation];
            }
            oldLocation = currentLocation;
            currentLocation = newLocation;
            break;
            case "downstairs":
            newLocation = adjacent[currentLocation][3];
            console.log(newLocation);
            if (newLocation == -2) {
              myDescription.innerHTML = blockedquote[currentLocation];
            }
              oldLocation = currentLocation;
              currentLocation = newLocation;
              break;
        }

      } else {
        feedback.innerHTML = "We don't do that here";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation(currentLocation);
      myInput.value = "";
      showEnemy();
    }

    if (inputArray[0] == "attack"){
      switch (currentLocation) {
        case 1:
      enemyAttack(0)
        break;
        case 3:
      enemyAttack(0);
        break;
        case 5:
      enemyAttack(0);
        break;
        case 7:
      enemyAttack(0);
        break;
        case 9:
      enemyAttack(0);
        break;
        case 11:
      enemyAttack(0);
        break;
        case 13:
      enemyAttack(0);
        break;
        case 15:
      enemyAttack(0);
        break;
        case 17:
      enemyAttack(0);
        break;
        case 19:
      enemyAttack(0);
        break;
        case 21:
      enemyAttack(0);
        break;
        case 23:
      enemyAttack(1);
        break;
        case 25:
      enemyAttack(0);
        break;
        case 27:
      enemyAttack(0);
        break;
        case 29:
      enemyAttack(0);
        break;
        case 31:
      enemyAttack(0);
        break;
        case 33:
      enemyAttack(0);
        break;
        default: enemyImage.style.display = "none";

      }
      myInput.value = "";
    }

    if (inputArray[0] != "go" && inputArray[0] != "attack" ){
      feedback.innerHTML = "The posible commands are go and attack!";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

let itemsT;
let playerDamage = 5;

function giveLocation() {
  health_stat.innerHTML = health;
  player_damage.innerHTML = playerDamage ;
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  enemyHealth = 20;
  myDirections = "posible directions are: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  switch (currentLocation) {
    case 1:
      hitbox.style.display = "inline";
      hitbox.style.top = "430px";
      hitbox.style.left = "570px";
      hitbox.style.width = "70px";
      hitbox.style.height = "50px";
      break;
      case 11:
      hitbox.style.display = "inline";
      hitbox.style.top = "200px";
      hitbox.style.left = "600px";
      hitbox.style.width = "170px";
      hitbox.style.height = "261px";
      break;
      case 14:
      hitbox.style.display = "inline";
      hitbox.style.top = "215px";
      hitbox.style.left = "660px";
      hitbox.style.width = "50px";
      hitbox.style.height = "40px";
        break;
     case 23:
      hitbox.style.display = "inline";
      hitbox.style.top = "345px";
      hitbox.style.left = "545px";
      hitbox.style.width = "80px";
      hitbox.style.height = "80px";
        break;
        case 13:
      hitbox.style.display = "inline";
      hitbox.style.top = "415px";
      hitbox.style.left = "840px";
      hitbox.style.width = "40px";
      hitbox.style.height = "40px";
          break;
          case 22:
      hitbox.style.display = "inline";
      hitbox.style.top = "320px";
      hitbox.style.left = "590px";
      hitbox.style.width = "40px";
      hitbox.style.height = "30px";
      if (!once) {
        adjacent[22] [3] = 23;
      }
            break;
            case 30:
      hitbox.style.display = "inline";
      hitbox.style.top = "305px";
      hitbox.style.left = "860px";
      hitbox.style.width = "40px";
      hitbox.style.height = "35px";
            break;
            case 21:
      hitbox.style.display = "inline";
      hitbox.style.top = "418px";
      hitbox.style.left = "542px";
      hitbox.style.width = "60px";
      hitbox.style.height = "50px";
            break;
    default:
      hitbox.style.display = "none";
  }
}

function removeFeedback() {
  feedback.innerHTML = "";
}

let enemyImage = document.getElementById('enemyImage');

let enemyNumber = 0;
let dioNumber = 1;

let enemies = [];
enemies[0] = "Foe";
enemies[1] = "Dio";

let enemy_images = [];
enemy_images[0] = "media/enemies/foe.png";
enemy_images[1] = "media/enemies/dio.png";

let enemyHealth = 20;

let dioHealth = 100;

 function waiting() {
   console.log('waiting');
 }

let dioStrength = dioHealth;

function showEnemy(enemyNumber){
  if (currentLocation % 2 != 0) {
    enemyImage.style.display = "inline";
    enemyImage.width = "100";
    enemyImage.title = "strength: " + enemyHealth;
    enemyImage.src = enemy_images[0];
    feedback.innerHTML= "your enemy is: " + enemies[0] + " strength: " + enemyHealth;
  }
  if (currentLocation == 23) {
    enemyImage.style.display = "none";
  }
  if (currentLocation % 2 == 0 || currentLocation == 23) {
    enemyImage.style.display = "none";
  }

  if (currentLocation == 23) {
    enemyImage.style.display = "inline";
    enemyImage.width = "150";
    enemyImage.title = "strength: " + dioHealth;
    enemyImage.src = enemy_images[1]
    feedback.innerHTML= "your enemy is: " + enemies[1] + " strength: " + dioHealth;
  }
}



function enemyAttack(enemyNumber){
  if (currentLocation == 23) {
  enemyImage.scr = enemyImage[1];
}

  if (currentLocation !== 23) {
    enemyImage.src = enemy_images[0];
}

 // deze waarde later vanuit de maincharacter laten komen
  if (currentLocation !== 23) {
  enemyHealth -= playerDamage;
  if (enemyHealth !== 0 || enemyHealth > 0)
  {
    feedback.innerHTML= enemies[0] + " is hurting";
    setTimeout(removeFeedback, 1000);
    feedback.innerHTML= enemies[0] + " is attacking you!";
    health -= 12;
    checkDeath();
    health_stat.innerHTML = health;
    console.log(enemyHealth);
    setTimeout(waiting, 1000);
  }
  if (enemyHealth <= 0) {
    exp += 10;
    checkLvl();
    checkDeath();
    enemyImage.style.display = "none";
    feedback.innerHTML= enemies[0] + " died";
    setTimeout(waiting, 1000);
  }
}


  if (currentLocation == 23) {
    dioStrength -= playerDamage;
  if (dioStrength > 0)
  {
    feedback.innerHTML = enemies[1] + " is hurt";
    setTimeout(removeFeedback, 1000);
    feedback.innerHTML = enemies[1] + " is attacking you!";
    health -= 20;
    checkDeath();
    health_stat.innerHTML = health;
        console.log(dioStrength);
    setTimeout(waiting, 1000);
  }
  if (dioStrength <= 0) {
        exp += 100000;
        checkLvl();
        checkDeath();
        enemyImage.style.display = "none";
        feedback.innerHTML = enemies[1] + " died." + "You completed the game!";
        setTimeout(waiting, 3000);
  }
}
}
let max_exp = 30;
let exp = 0;
let max_health = 100;

function lvlUp() {
max_health += 30;
health = max_health;
 exp = 0;
 max_exp += 10;
playerDamage += 3;
health_stat.innerHTML = health;
player_damage.innerHTML = playerDamage;
}

function checkLvl() {
  if (exp >= max_exp) {
    lvlUp();
  }
}

function checkDeath() {
  if (health <= 0) {
 currentLocation = oldLocation;
 enemyImage.style.display = "none";
 giveLocation();
  }
}


giveLocation();
