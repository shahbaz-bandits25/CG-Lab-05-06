class point {

   // constructor(x,y){

     //   this.x = x;
     //   this.y = y;
   // }
    constructor(x , y , h , colour){
        this.x = x;
        this.y = y;
        this.h = h;
        this.colour = colour;
    }

    getXY(){

        return this.x +" " + this.y;

    }

    drawpoint(ctx){

      //  var square = new Square(new point(320 , 240), 50, '#177b4b');
       // square.draw(ctx);
      // var a = 0 , b = 255;
     //  var h = Math.floor(a + Math.random()*(b-a));
       var f = true;
       console.log(this.h);

       var rect = new Rectangle(new point(this.x-3 , this.y),
                                new point(this.x+3 , this.y),
                                new point(this.x+3 , this.y-this.h),
                                new point(this.x-3 , this.y-this.h)
                                ,this.colour,f);

        var rect2 = new Rectangle(new point(this.x-1 , this.y),
                                  new point(this.x+1 , this.y),
                                  new point(this.x+1 , this.y-this.h),
                                  new point(this.x-1 , this.y-this.h)
                                  ,"black",!f);

        rect.draw(ctx);
        rect2.draw(ctx);

    }
}