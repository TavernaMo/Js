/*на странице находятся элементы:
div - фигура, которая может принимать какие-то формы
select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
input для выбора цвета. При его изменении меняется цвет фигуры */

class Figura {
    renderFigure(block){
        block.style.width = this.width+"px"
        block.style.height = this.height+"px"
        block.style.borderRadius = 0;
    }

    static colorFigure(block,color){
        block.style.backgroundColor = color;
    }
}

class Square extends Figura {
    constructor(height = 100, width = 100 ){
        super();
        this.height = height;
        this.width = height
    }
}

class Rectangle extends Figura {
    constructor(height = 100, width = 200 ){
        super();
        this.height = height;
        this.width = width
    }
}

class Circle extends Figura {
    constructor(height=100,width=100){
        super();
        this.height = height;
        this.width = width;
    }

    renderFigure(block){
        super.renderFigure(block)
        block.style.borderRadius = "50%";
    }
}

let div = document.querySelector("div.figura")
    select = document.querySelector("select"),
    input = document.querySelectorAll("input");

select.addEventListener('change', figura);
    input
        .forEach(el => {
            el.addEventListener('change', function()  {
                Figura.colorFigure(div,this.value);
            })
        })

        let figures = {
            square: new Square(),
            rectangle: new Rectangle(),
            circle: new Circle()
        }

        function figura(){
            figures[this.value] && figures[this.value].renderFigure(div);
        }
 
