/*Сеть фастфудов предлагает несколько видов гамбургеров:
маленький (5$, 20 калорий)
большой (10$, 40 калорий)
Гамбургер может быть с одним из нескольких видов начинок:

сыром (+ 1$, + 20 калорий)
салатом (+ 2$, + 5 калорий)
картофелем (+ 1,5$ , + 10 калорий)

Можно добавить добавки:

посыпать приправой (+ 1,5$, 0 калорий)
полить майонезом (+ 2$, + 5 калорий).

Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Используйте ООП подход (подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин). */

// const HAMBURGER = {
//     big : {
//         price: 5,
//         calories:20
//     },
//     small : {
//         price: 10,
//         calories:40
//     },

//     cheese : {
//         price: 1,
//         calories:20
//     },
//     salad : {
//         price: 2,
//         calories:5
//     },
//     potato : {
//         price: 1.5,
//         calories:10
//     },

//     priprava : {
//         price: 1.5,
//         calories:0
//     },
//     mayo : {
//         price: 1.5,
//         calories:0
//     }
// }

class Ingredient {
    constructor(name,price,calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }

    getName(){
        return this.name
    }

    getPrice(){
        return this.price
    }

    getCalories(){
        return this.calories
    }

}

class Burger {
    constructor(ingredientsList){
        this.ingredientsList = ingredientsList;
    }

    price(){
        return this.ingredientsList.reduce((sum,next) =>{
          return sum+=next.getPrice()
        },0)
    }

    caloriesHambueger(){
        return this.ingredientsList.reduce((sum,next) =>{
            return sum+=next.getCalories()
          },0)
    }
}

//Можно без глобального обьекта, так гибкая логика.

let user = new Burger([
    new Ingredient("big bulka", 10, 40),new Ingredient("cheese", 1, 20),new Ingredient("potato", 1,5, 10)
 
])

console.log(user.price())
