
function firstTask (){
  let ans = prompt('Желаете пройти регистрацию на сайте?');
  if(ans.toLocaleLowerCase()==="да")
  {
    alert("Круто!");
  }
  else
  {
    alert("Попробуй еще раз");
    firstTask();
  }
}
function secondTask(){
  let login = prompt('Введите логин:');
  if(login === "Админ")
  {
    let password = prompt("Введите пароль");
    if(password === "Я главный")
      alert("Здравствуйте!");
    else if(password === null)
      alert("Отменено");
    else
      alert("Неверный пароль!");
  }
  else
    alert("Отменено");
}



let count = 0;
let mouseX = 0, mouseY = 0;

const escHandler = ()=>{
  document.keydown(function(e) {
    if (e.keyCode == 27) {
      return true
    }
    return false
  });

}

const mousemove = ()=>{
  addEventListener('mousemove',(e)=>{
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.borderRadius = "50%";

    div.style.backgroundImage = "url('/img/whiteHeart.png')";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "0";

    div.style.color = "white";
    div.style.position="absolute"
    mouseX = e.pageX;
    mouseY = e.pageY;
    div.style.left = mouseX+20+'px'
    div.style.top = mouseY+20+'px'

    setTimeout(() => {
      document.body.appendChild(div)
    }, 2);
    setTimeout(() => {
      document.body.removeChild(div)
    }, 2000);
  })
}

function thirdTask() {
  let like = document.querySelector(".like");
  if(like.style.background !== 'red') {
    like.style.background = 'red';
    like.style.color = 'white';
    like.style.borderColor='white';
    addEventListener("click", mousemove);
  }
  else {
    like.style.background = '#b3d4fc';
    like.style.color = 'black';
    like.style.borderColor='black';
    removeEventListener("click", mousemove);
  }
}


