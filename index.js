//document
// .querySelector("button")
//  .addEventListener("click", ()=>handleClick("Hai"));

// function handleClick(greet){
  // alert('Hello FSW 2 + (greet)');
//}

//handleClick;

console.log(document.querySelectorAll("button")[3]);

//Array.Length()

let totalButton = document.querySelectorAll("button").length;

for (let i = 0; i < totalButton; i++ ) {
  console.log(i);
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    
    //alert("Hallo FSW 2 dari button" + 1);
    //let audio = new Audio("sounds/tom-1.mp3");
    //audio.play();

    //this = <button class="w drum">w</button>

    //console.log
    this.style.color = "yellow";

    switch(i) {
      case "w" :
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a" :
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;
      case "s" :
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom1.play();
        break;
      case "d" :
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom1.play();
        break;
      case "j" :
        let snare = new Audio("sounds/snare.mp3");
        tom1.play();
        break;
      case "k" :
        let crash = new Audio("sounds/crash.mp3");
        tom1.play();
        break;
      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        tom1.play();
        break;
      default:
    }
  });
}