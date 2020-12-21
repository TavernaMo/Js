/*Сделать 3 асинхронные операции (симулируем при помощи функции getPromise(), внутри которой находится setTimeout(resolve(),timer)). В каждом промисе (getPromise) возвращается число от 0 до 100.
Создать обертку runAfter(), которая получает в качестве аргумента – 3 функции в массиве, которые выполнятся после окончания всех 3-х асинхронных операций. */

function getRandomInt(max=100) {
    return Math.floor(Math.random() * Math.floor(max))
  }

function getPromise() {
    return new Promise( resolve => setTimeout( () => resolve(getRandomInt()),1000))
}

Promise
        .all([
            getPromise()
                        .then(data => {
                            return afterFirstPromise(data)
                        }),
            getPromise()
                        .then(data => {
                            return afterSecondPromise(data)
                        }),
            getPromise()
                        .then(data => {
                            return afterThirdPromise(data)
                        })
        ])
            .then(data => {
                console.log(data)
                return runAfter(data)
            })

function afterFirstPromise(n){
    let num = n*5
    return num
}

function afterSecondPromise(n){
    let num = n*3
    return num
}

function afterThirdPromise(n){
    let num = n*4
    return num
}

function runAfter(array) {
    array.forEach(element => {
        element + 20
    });
}