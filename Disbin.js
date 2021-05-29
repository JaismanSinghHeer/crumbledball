class Distbin{
    constructor (x, y, width, hight){
        var options = {
            isStatic: true ,
            'restitution' : 0.3 ,
            'friction' : 0.3 ,
            'density' : 1.4 
        }
            this.body = Bodies.rectangle(x,y,width,hight,options);
            this.width = width ;
            this.hight = hight ;
         
            World.add(world , this.body);
         }
            display(){
                rectMode(CENTER);
    
               fill(500);
    
    
                rect(this.body.position.x, this.body.position.y, this.width, this.hight);
            }
    
    
    
    
    
    
        
    
        
    };