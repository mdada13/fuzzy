var wrapperEle = document.body.querySelector(".wrapper");
var increaseEle = document.body.querySelector(".increase");
var numberEle = document.body.querySelector(".number");

var number = 0;


var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i < list.length; i++)
{
  var ele = document.createElement("div");
    ele.innerHTML =
      list[i].name +
      "    " +
      list[i].age +
      "   ";
  if(list[i].age > 40 ){
     ele.style.color= "Red"
     }
  if(list[i].age < 20 ){
     ele.style.color= "blue"
     }
wrapperEle.appendChild(ele);
}

function increase(num, color){
  number=number+num;
  numberEle.innerHTML=number;
  numberEle.style.color=color;
}

increaseEle.addEventListener("click", function(){
  increase(1);
})