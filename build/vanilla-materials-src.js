//Vanilla.js - https://github.com/simplyianm/Vanilla.js

var vanillaMaterials = mm.defineMod("VanillaMaterials", {
    description: "A Javascript mod that contains all materials found in Vanilla Minecraft.",
    author: "AlbireoX",
    revision: 1
}, function(mod) {

    //Armor
    //Leather
    mod.registerArmor("leather_cap", {
        name: "Leather Cap",
        vanillaId: 298,
        protection: 1
    }, function(part){});
    mod.registerArmor("leather_tunic", {
        name: "Leather Tunic",
        vanillaId: 299,
        protection: 3
    }, function(part){});
    mod.registerArmor("leather_pants", {
        name: "Leather Pants",
        vanillaId: 300,
        protection: 2
    }, function(part){});
    mod.registerArmor("leather_boots", {
        name: "Leather Boots",
        vanillaId: 301,
        protection: 1
    }, function(part){});
    //Chain
    mod.registerArmor("chain_helmet", {
        name: "Chain Helmet",
        vanillaId: 302,
        protection: 2
    }, function(part){});
    mod.registerArmor("chain_chestplate", {
        name: "Chain Chestplate",
        vanillaId: 303,
        protection: 5
    }, function(part){});
    mod.registerArmor("chain_leggings", {
        name: "Chain Leggings",
        vanillaId: 304,
        protection: 4
    }, function(part){});
    mod.registerArmor("chain_boots", {
        name: "Chain Boots",
        vanillaId: 305,
        protection: 1
    }, function(part){});
    //Iron
    mod.registerArmor("iron_helmet", {
        name: "Iron Helmet",
        vanillaId: 306,
        protection: 2
    }, function(part){});
    mod.registerArmor("iron_chestplate", {
        name: "Iron Chestplate",
        vanillaId: 307,
        protection: 6
    }, function(part){});
    mod.registerArmor("iron_leggings", {
        name: "Iron Leggings",
        vanillaId: 308,
        protection: 5
    }, function(part){});
    mod.registerArmor("iron_boots", {
        name: "Iron Boots",
        vanillaId: 309,
        protection: 2
    }, function(part){});
    //Diamond
    mod.registerArmor("diamond_helmet", {
        name: "Diamond Helmet",
        vanillaId: 310,
        protection: 3
    }, function(part){});
    mod.registerArmor("diamond_chestplate", {
        name: "Diamond Chestplate",
        vanillaId: 311,
        protection: 8
    }, function(part){});
    mod.registerArmor("diamond_leggings", {
        name: "Diamond Leggings",
        vanillaId: 312,
        protection: 6
    }, function(part){});
    mod.registerArmor("diamond_boots", {
        name: "Diamond Boots",
        vanillaId: 313,
        protection: 3
    }, function(part){});
    //Gold
    mod.registerArmor("gold_helmet", {
        name: "Gold Helmet",
        vanillaId: 314,
        protection: 2
    }, function(part){});
    mod.registerArmor("gold_chestplate", {
        name: "Gold Chestplate",
        vanillaId: 315,
        protection: 5
    }, function(part){});
    mod.registerArmor("gold_leggings", {
        name: "Gold Leggings",
        vanillaId: 316,
        protection: 3
    }, function(part){});
    mod.registerArmor("gold_boots", {
        name: "Gold Boots",
        vanillaId: 317,
        protection: 1
    }, function(part){});

});


var armorComponent = Game.defineComponent({
    name: "armor",
    components: {
        item: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 308,
        protection: 0
    },
    listeners: {
        "player_damage": function(event) {
            event.damage -= this.protection; //I know this is inaccurate
        }
    }
});


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


var liquidComponent = Game.defineComponent({
    name: "liquid",
    components: {
        block: {
            mesh: "deform",
            collision: "liquid",
            notchId: this.notchId
        }
    },
    properties: {
        placementObstacle: false,
        notchId: 1
    }
});


var rangedWeaponComponent = Game.defineComponent({
    name: "weapon",
    components: {
        weapon: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 1,
//Technically we should only modify the weapon component
//        durability: 0,
//        damage: 0,
//        rangedDamage: 0
    }
});


var toolComponent = Game.defineComponent({
    name: "tool",
    components: {
        item: {
            notchId: this.notchId
        }
    },

    properties: {
        notchId: 292,
        durability: 0
    }
});


var weaponComponent = Game.defineComponent({
    name: "weapon",
    components: {
        item: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 1,
        durability: 0,
        damage: 0
    }
});