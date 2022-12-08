//------------------------------------1---------------------------------
let notification=document.querySelector(".content1");
notification.addEventListener("click", (event)=> {
    if(event.target.className==='href'){
        let answer=prompt("Вы хотите покинуть страницу?");
        if (answer.toLocaleLowerCase()!=='да'){
            event.preventDefault();
        }
    }
})
//------------------------------------2---------------------------------
let photos=document.querySelector(".photos");
let photo=document.querySelector(".mainImg");
photos.addEventListener("click", (event)=> {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href);
    event.preventDefault();
})

function showThumbnail(href) {
    photo.src = href;
}
//------------------------------------3---------------------------------
let list=document.querySelector(".list");
list.addEventListener("click", (event)=> {
    if (event.target.className !== "one") return;

    if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }

})
list.onmousedown = function() {
    return false;
}
function toggleSelect(tag) {
    tag.classList.toggle('gray');
}
function singleSelect(tag) {
    let selected = list.querySelectorAll('.gray');
    for(let elem of selected) {
        elem.classList.remove('gray');
    }
    tag.classList.add('gray');
}
//------------------------------------4---------------------------------
let field = document.querySelector('.field');
let line = field.querySelector('.line');

line.onmousedown = function(event) {
    event.preventDefault();
    let scale = event.clientX - line.getBoundingClientRect().left; // возвращает позицию
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    function onMouseMove(event) {
        let scaleL = event.clientX - scale - field.getBoundingClientRect().left;
        if (scaleL < 0) {
            scaleL = 0;
        }
        let scaleR = field.offsetWidth - line.offsetWidth;
        if (scaleL > scaleR) {
            scaleL = scaleR;
        }
        line.style.left = scaleL + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};
//------------------------------------5---------------------------------
let allGoods = document.getElementById("ex5");
let goodsForSale = document.getElementById("goods-for-sale");
let goodsInBasket = document.getElementById("goods-in-basket");
let takedGood;
let isTaked = false;
let result = document.getElementById("result");
goodsForSale.addEventListener("mousedown", (event)=>{
    takedGood = event.target.closest(".goods");
    if(takedGood !== null && takedGood !== undefined ) {
        isTaked = true;
    }
});
allGoods.addEventListener("mouseup", (event)=> {
    let foundedSaleBlock = event.target.closest("#goods-in-basket");
    if(foundedSaleBlock !== null && foundedSaleBlock !== undefined) {
        if(isTaked) {
            let alreadyInBasket = false;
            let foundedChilren;
            for(let i  = 2 ;  i < goodsInBasket.childElementCount;i++) {
                if(goodsInBasket.children[i].children[1].textContent === takedGood.children[1].textContent) {
                    alreadyInBasket = true;
                    foundedChilren = goodsInBasket.children[i];
                    break;
                }
            }
            if(alreadyInBasket) {
                foundedChilren.children[3].textContent = Number(foundedChilren.children[3].textContent) + 1;
                result.textContent = Number(result.textContent) + Number(foundedChilren.children[2].textContent);
            }
            else {
                let newGoodInBasket = document.createElement("div");
                newGoodInBasket.className = "goods";

                let img = document.createElement("img");

                img.setAttribute("src", takedGood.children[0].getAttribute("src"));
                img.setAttribute("width", "100px");
                img.setAttribute("height", "100px");
                newGoodInBasket.appendChild(img);

                let name = document.createElement("h3");
                name.textContent = takedGood.children[1].textContent;
                newGoodInBasket.appendChild(name);


                let price = document.createElement("h4");
                price.textContent = takedGood.children[2].textContent;
                newGoodInBasket.appendChild(price);

                let count = document.createElement("h5");
                count.textContent = "1";
                newGoodInBasket.appendChild(count);


                goodsInBasket.appendChild(newGoodInBasket);
                result.textContent = Number(result.textContent) + Number(takedGood.children[2].textContent);
            }
        }
    }

    isTaked = false;
});
