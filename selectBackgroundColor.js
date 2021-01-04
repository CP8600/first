/* >>>>>>>>>>>>>>>>>>>>SELECT CAR COLOR FOR BOX1 AND ALERTS ANSWER <<<<<<<<<<<<*/



let selectColor = function () {
  let answer;
  const car = document.getElementById("car").value;
  let bgColor = document.getElementById('box1')

  let h3 = document.getElementById("h3");


  switch (car) {
    case "red":
      answer = "My car is red";

      break;
    case "green":
      answer = "My car is green";
      break;
    case "blue":
      answer = "My car is blue";
      break;
    case "black":
      answer = "My car is black";
      break;

    default:
      break;
  }
  h3.innerHTML = answer;


  bgColor.style.backgroundColor = car /* THIS CHANGES COLOR FOR BACKGROUND OF BOX1*/
  console.log(car)
  console.log(answer);
};


selectColor()

