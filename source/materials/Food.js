var foodComponent = Game.defineComponent({
    name: "food",
    components: {
        item: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 1,
        health: 0
    },
    listeners: {
        "consume": function(event) { 
            event.actor.health += event.target.getProperty("health");  
            if (event.entity.type == "player") {
                player.sendSound("omnom.ogg");
            }
        },
        "click": function(event) {
            game.dispatchEvent("consume", {
                "actor": player,
                "target": this    
            });
        }
    }
});