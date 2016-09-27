/**
 * Created by Samsung on 26.09.2016.
 */

(function() {

    var desktop,
        s = $("<div class='shape'></div>");

    $('document').ready(init);

    function init(){

        var countOfCircles = 0,
            countOfRectangles = 0;

        desktop = $('#desktop');
        $('#btnAddCircle').click(function(){
            if(!(countOfCircles % 2)){
                (new Circle(Math.random()*(desktop.width()-150),Math.random()*(desktop.height()-150),Math.random()*100+50))
                    .draw();
            }
            else{
                (new Circle(Math.random()*(desktop.width()-150),Math.random()*(desktop.height()-150),Math.random()*100+50))
                    .draw()
                    .changeBorderRadius()
                    .changeColor('Red');
            }
            countOfCircles++;
        });
        $('#btnAddRectangle').click(function(){
            if(!(countOfRectangles % 3)) {
                (new Rectangle(Math.random() * (desktop.width() - 150), Math.random() * (desktop.height() - 150), Math.random() * 100 + 50))
                    .draw()
                    .changeColor('Blue');
            }
            else if(countOfRectangles % 3 == 1){
                (new Rectangle(Math.random() * (desktop.width() - 150), Math.random() * (desktop.height() - 150), Math.random() * 100 + 50))
                    .changeColor('Green')
                    .draw()
                    .fill('Yellow');
            }
            else{
                (new Rectangle(Math.random() * (desktop.width() - 150), Math.random() * (desktop.height() - 150), Math.random() * 100 + 50))
                    .fill('Pink')
                    .changeColor('Cyan')
                    .draw();
            }
            countOfRectangles++;
        });
    }

    function Shape(x, y, r) {
        this.temp = s.clone()
            .offset({
                left: x,
                top: y
            })
            .width(r)
            .height(r);

        this.draw = function () {
            this.temp.appendTo(desktop);
            return this;
        };

        this.changeColor = function(color){
            this.temp.css({
               'border-color':color
            });
            return this;
        }
    }

    function Circle(x, y, r) {
        Shape.apply(this, arguments);

        this.temp.css({
            'border-radius':this.temp.width()+'px'
        });

        this.changeBorderRadius = function(){
            this.temp.css({
                'border-radius':'30px'
            });
            return this;
        }
    }

    function Rectangle(x, y, r) {
        Shape.apply(this, arguments);

        this.fill = function(color){
            this.temp.css({
                'background-color':color
            });
            return this;
        }
    }
}());