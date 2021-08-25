angular.module("myapp",[])
.controller('ctrl1',ctrl1)
.controller('ctrl2',ctrl2)
.service('service',service);

ctrl1.$inject=['service']

function ctrl1(service) {
    
    var c1=this
    
    c1.items=service.getitems()
        
    
    c1.bought=function(index){
        
        
        var temp=service.removeitem(index)
        if (temp==0){
            c1.msg="Everything is bought!"
        }
        

    }


}
ctrl2.$inject=['service']
function ctrl2(service){
    var c2=this
    
    c2.bitems=service.getbitems()
    c2.len=0
    console.log(c2.len)
    
    
}

function service() {
    var service=this
    var items=[{
        name:'Cookies',
        q:10
    },
    {
        name:"Bread packet",
        q:3
    },
    {
        name:"Drink bottles",
        q:3

    },
    {
        name:"Sugar packet",
        q:3
    },
    {
        name:"Cheese packet",
        q:2

    }
    
    ]
    
    var bitems=[]
    
    service.removeitem=function(index){
        
        var temp=items.splice(index,1)
        var len=items.length
        
        bitems.push(temp[0])
        return len
    }
    service.getbitems=function(){
        service.l=bitems.length
        return bitems
    }
    service.getitems=function(){
        return items
    }
    service.getlen=function(){
        return bitems.length
    }
}


