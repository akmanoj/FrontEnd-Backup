Kinetic.Image = function(config){
    this.image = config.image;
    this.border = config.border;
    this._showBorder = !!config.border;
    
    var x = config.x ? config.x : 0;
    var y = config.y ? config.y : 0;
    var width = config.width ? config.width : config.image.width;
    var height = config.height ? config.height : config.image.height;
    
    var draw = function(){
        var context = this.getContext();
        
        // draw border
        if (this.border && this._showBorder) {
            // half border width
            var bw = this.border.width / 2;
            context.fillStyle = this.border.color;
            context.fillRect(x - bw, y - bw, width + bw * 2, height + bw * 2);
        }
        
        context.drawImage(this.image, x, y, width, height);
        context.beginPath();
        context.rect(x, y, width, height);
        context.closePath();
    };
    
    // call super constructor
    Kinetic.Shape.apply(this, [draw, config.name]);
};
// Extend KineticJS Shape
Kinetic.Image.prototype = new Kinetic.Shape();

/*
 * set Image image
 */
Kinetic.Image.prototype.setImage = function(img){
    this.image = img;
};

/*
 * show border
 */
Kinetic.Image.prototype.showBorder = function(){
    this._showBorder = true;
};

/*
 * hide border
 */
Kinetic.Image.prototype.hideBorder = function(){
    this._showBorder = false;
};
/*
 * set border color
 */
Kinetic.Image.prototype.setBorderColor = function(color){
    this.border.color = color;
};
/*
 * set border width
 */
Kinetic.Image.prototype.setBorderWidth = function(width){
    this.border.width = width;
};
