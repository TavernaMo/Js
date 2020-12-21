/*Забираем json c https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json.
При нажатии на цветной квадратик отображаем соответствующего цвета машину.*/


const teslaJ='https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json',
      showTesla=document.querySelector('div.show'),
      showColorsBoard = document.querySelector('div.collors-stend')

async function getResponse (file){
    const request = await fetch(file)
    if(request.ok){
       let response = await request.json()
       return response
    }else {
        console.error('Server is not response')
    }
}

let requestTesla = getResponse(teslaJ)
                .then(data => {
                    let count = 0
                    for(let key in data){
                        createImgTesla(data[key],count)
                        createColorsBoard(key,count)
                        count++
                    }
                eventColors()
                })

function createImgTesla(el,index){
    const div = document.createElement("div");
    div.innerHTML = `<img src='${el}'></img>`
    div.setAttribute("data-id", index)
    div.classList.add('showImg')
    if(index == 0){
        div.classList.add('active')
    }
    showTesla.append(div)
}

function createColorsBoard (el,index){
    const span = document.createElement('span');
    span.classList.add(`${el}`)
    span.setAttribute('data-id',index)
    span.style.backgroundColor=`${el}`
    span.style.height='40px';
    span.style.width='40px';
    span.style.marginRight="15px"
    showColorsBoard.append(span)
}

function eventColors (){
    let spans =document.querySelectorAll('span') 
            .forEach(el => {
                el.addEventListener('click',(e)=>{
                    let dataId = el.getAttribute('data-id')
                    dataId && toggleActiveClass(dataId)
            })
    });
}

function toggleActiveClass (idElem){
    let imgTesla = document.querySelectorAll('.showImg')
                .forEach(el => {
                    el.classList.remove('active')
                    if(el.getAttribute('data-id')===idElem){
                        el.classList.add('active')
                    }
                });
}