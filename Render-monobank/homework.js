//Отрендерить инфо-блок, аналог блока «Мобільний додаток» на сайте https://www.monobank.ua/.
var menu = [{
                0 : {
                    tab: 'Платежі',
                    title: 'Ну де ще ви бачили безкоштовні перекази?',
                    description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
                    icon: 'payment'
                },
                1 : {
                    tab: 'Виписка',
                    title: 'Усі ваші витрати на кінчиках пальців',
                    description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
                    icon: 'extract'
                },
                2 : {
                    tab: 'Налаштування картки',
                    title: 'Забудьте все, що ви знали про банкінг',
                    description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
                    icon: 'settings'
                }
}
]
let panel = document.querySelector(".tab-panel"),
    info = document.querySelector(".tab-content")

tabRender(menu)

function tabRender(arr){
    let i = 1;
    if(Array.isArray(arr)){
        arr.forEach(el => {
            for(let key in el){
                el[key]?.tab && createPanel(el[key]?.tab,i);
                el[key]?.title && el[key]?.description  && createContent(el[key].title,el[key].description,i);
                i++
                
            }
        })
    }
}


function createContent(el,el1,index){
    const div = document.createElement("div");
    div.innerHTML = `<h1>${el}</h1><p>${el1}</p>`
    div.classList.add("div-content")
    div.setAttribute("data-id", index)
    info.append(div)
}

function createPanel(el,index){
    const crateDiv = document.createElement("button")
    crateDiv.innerHTML = `${el}`
    crateDiv.classList.add("tab-link",index)
    crateDiv.setAttribute("data-id", index)
    panel.append(crateDiv)
}

userChoise(panel)
function userChoise(arr){
    const linkTab = [...arr.children]
        linkTab.forEach(el => {
            let dataId = el.getAttribute('data-id')
                el.addEventListener("click",(e) => {
                    e.preventDefault()
                    if(dataId){
                    toggleActiveClass(dataId)
                    }
                })
            })
        }
              
function toggleActiveClass(dataIdElem){
    let alldivContent = info.querySelectorAll('.div-content')
    alldivContent.forEach(el => {
        el.classList.remove('active')
        console.log(el.getAttribute('data-id'))
        if(el.getAttribute('data-id')=== dataIdElem){
            el.classList.add('active')
        }
    })
}