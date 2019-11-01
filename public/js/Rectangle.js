class Rectangle
{
  constructor(left , right ,bottom , top ,colour ,flag)
  {
    this.left=left;
    this.right=right;
    this.bottom=bottom;
    this.top=top;
    this.color=colour;
    this.flag=flag;
  }

  draw(ctx)
  {
    ctx.beginPath();
    ctx.moveTo(this.left.x , this.left.y);
    ctx.lineTo(this.right.x , this.right.y);
    ctx.lineTo(this.right.x , this.top.y);
    ctx.lineTo(this.left.x , this.top.y);

    ctx.strokeStyle = this.colour;
    ctx.fillStyle = this.colour;
    ctx.stroke();
    if(this.flag) ctx.fill();
    ctx.closePath();
  }
}