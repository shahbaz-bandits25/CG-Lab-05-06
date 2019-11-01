class Square {

    constructor(origin, length, colour){

        this.origin = origin;
        this.length = length;
        this.colour = colour;
    }

    draw (ctx){

        ctx.beginPath();
        ctx.moveTo(this.origin.x , this.origin.y);
        ctx.lineTo(this.origin.x + this.length , this.origin.y);
        ctx.lineTo(this.origin.x + this.length , this.origin.y + this.length);
        ctx.lineTo(this.origin.x, this.origin.y + this.length);
        ctx.lineTo(this.origin.x , this.origin.y);

        ctx.strokeStyle = this.colour;
        ctx.fillStyle = this.colour;

        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        
    }
}