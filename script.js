function orderPizza(pizza,Size,Crust,Topping)
{
    event.preventDefault();
    // var pizza ="";
    // var Size="";
    // var Crust="";
    // var Topping="";

    this.pizza = pizza;
    this.Size = Size;
    this.Crust = Crust
    this.Topping = Topping;
}

orderPizza.prototype.GetTotalcost= function(){
    return this.GetToppingscost() + this.GetSizecost() + this.GetCrustcost()
}

orderPizza.prototype.GetCrustcost= function(){
    if (this.type=="Margherita"){
        if(this.crust=="Crispy"){
            return 100
        }
        else if(this.crust=="Stuffed"){
            return 150;
        }else
            return 180;
    }
    else if (this.type=="Marinara"){
        if(this.crust=="Crispy"){
            return 120
        }
        else if(this.crust=="Stuffed"){
            return 170
        }
        else
            return 200
    }
    else(this.type=="Capricciosa")
        if(this.crust=="Crispy"){
            return 150
        }
        else if(this.crust=="Stuffed"){
            return 180
        }
        else
            return 200
}
orderPizza.prototype.GetToppingscost= function(){
    if (this.type=="Margherita"){
        if(this.topping=="Pepperoni"){
            return 70
        }
        else if(this.topping=="Sausage"){
            return 90
        }
        else
            return 120
    }
    else if (this.type=="Marinara"){
        if(this.topping=="Pepperoni"){
            return 80
        }
        else if(this.topping=="Sausage"){
            return 70
        }
        else
            return 110
        
    }
    else
        if(this.topping=="Pepperoni"){
            return 60
        }
        else if(this.topping=="Sausage"){
            return 90
        }
        else
            return 120
        
    
}

orderPizza.prototype.GetSizecost= function (){
    if (this.type=="Margherita"){
        if(this.size=="Small"){
            return 500
        }
        else if(this.size=="Medium"){
            return 800
        }
        else
            return 1000
        
    }
    else if (this.type=="Marinara"){
        if(this.size=="Small"){
            return 550
        }
        else if(this.size=="Medium"){
            return 850
        }
        else
            return 1050
    }
    else
        if(size=="Small"){
            return 600
        }
        else if(size=="Medium"){
            return 900
        }
        else
            return 1150
}

$(document).ready(function(){
    $("#pizzaPalace").submit(function(event){
        event.preventDefault();

        var selectedType = $("#pizza").val();
        var selectedSize = $("#selectSize").val();
        var selectedCrust = $("#selectCrust").val();
        var selectedTopping = $("#selectTopping").val();


    })
});
