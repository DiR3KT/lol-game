//Made by @DiiREKT
var p,q,w,e,r,html,bgURL;
var good=0;
var wrong=0;

document.getElementsByClassName('html')[0].style.backgroundImage = 'url(../assets/splash/' + bgimages[Math.floor(Math.random()*bgimages.length)] + ')';

function shuffle(array)
{
  var m = array.length, t, i;
  while (m > 0)
  {
    i = Math.floor(Math.random()*m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array
}

function printChamp()
{
  if (champions.length!==0){
    shuffle(champions);
    randomNumber = Math.floor(Math.random() * 5) + 1;
    if(randomNumber==1)
    {
      placeholder = "../assets/spells/" + champions[0] + "_p.jpg";
    }
    else if (randomNumber==2) {
      placeholder = "../assets/spells/" + champions[0] + "_q.jpg";
    }
    else if (randomNumber==3) {
      placeholder = "../assets/spells/" + champions[0] + "_w.jpg";
    }
    else if (randomNumber==4) {
      placeholder = "../assets/spells/" + champions[0] + "_e.jpg";
    }
    else if (randomNumber==5) {
      placeholder = "../assets/spells/" + champions[0] + "_r.jpg";
    }
  }
  else {
    alert("You won! You made "+wrong+" mistakes...");
    location.reload();
  }
  document.getElementById("placeholder").src=placeholder;
}

function validateGuess()
{
  playerGuess = document.getElementById("guess").value;
  playerGuess= playerGuess.toLowerCase();
  playerGuessRatio = compareTwoStrings(playerGuess,champions[0]);
  trueChampName(champions[0]);
  if (playerGuessRatio>0.6)
  {
    console.log("GOOD ANSWER");
    YESURL="../assets/icons/"+champions[0]+"_0.jpg";
    document.getElementById("yesno").src=YESURL;
    document.getElementById("yesno").style.opacity=1;
    document.getElementById("goodOne").style.color="rgb(83, 184, 76)";
    document.getElementById("goodOne").innerHTML="Yes! It was "+ trueChamp;
    good++;
    document.getElementById("goodAnswer").innerHTML=good;
    inputBox.classList.add('good');
    setTimeout(function(){inputBox.classList.add('blank');}, 300);
    setTimeout(function(){inputBox.classList.remove('good');}, 300);
    inputBox.classList.remove('blank');
  }
  else
  {
    console.log("WRONG ANSWER, IT WAS "+champions[0]);
    NOURL="../assets/icons/"+champions[0]+"_0.jpg";
    document.getElementById("yesno").src=NOURL;
    document.getElementById("yesno").style.opacity=1;
    document.getElementById("goodOne").style.color="rgb(187, 63, 63)";
    document.getElementById("goodOne").innerHTML="No! It was "+ trueChamp;
    wrong++;
    document.getElementById("wrongAnswer").innerHTML=wrong;
    inputBox.classList.add('wrong');
    setTimeout(function(){inputBox.classList.add('blank');}, 300);
    setTimeout(function(){inputBox.classList.remove('wrong');}, 300);
    inputBox.classList.remove('blank');
  }
  champions.shift();
  printChamp()
}
