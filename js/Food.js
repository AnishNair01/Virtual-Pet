class Food {
    constructor(){
        this.foodStock = 0
        this.image = loadImage("Images/Milk.png")
        this.image1 = loadImage("Images/milkImage.png")
    }
    getFoodStock() {
        var ref = database.ref("foodStock")
        ref.on("value",  (data)=> {
            fs = data.val()
        })
       
    }

    updateFoodStock(stock) {
        var ref = database.ref("/")
        ref.update({ foodStock: stock })
        
    }

    
    display(){
        var x = 80,y = 100

        imageMode(CENTER)
        image(this.image,720,220,20,20)

        if(this.foodStock!=0){
            for(var i=0; i < this.foodStock; i++){
                if(i%10 == 0){
                    x = 80
                    y = y+50
                }
                image(this.image1,x,y,50,50)
                x = x+30
                
            }

        }

    }
}