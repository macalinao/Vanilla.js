//Vanilla.js - https://github.com/simplyianm/Vanilla.js

var vanillaMaterials = mm.defineMod("VanillaMaterials", {
    description: "A Javascript mod that contains all materials found in Vanilla Minecraft.",
    author: "AlbireoX",
    revision: 1
}, function(mod) {

    //Armor
    //Leather
    mod.createArmor("leather_cap", {
        name: "Leather Cap",
        vanillaId: 298,
        protection: 1
    }, function(part){});
    mod.createArmor("leather_tunic", {
        name: "Leather Tunic",
        vanillaId: 299,
        protection: 3
    }, function(part){});
    mod.createArmor("leather_pants", {
        name: "Leather Pants",
        vanillaId: 300,
        protection: 2
    }, function(part){});
    mod.createArmor("leather_boots", {
        name: "Leather Boots",
        vanillaId: 301,
        protection: 1
    }, function(part){});
    //Chain
    mod.createArmor("chain_helmet", {
        name: "Chain Helmet",
        vanillaId: 302,
        protection: 2
    }, function(part){});
    mod.createArmor("chain_chestplate", {
        name: "Chain Chestplate",
        vanillaId: 303,
        protection: 5
    }, function(part){});
    mod.createArmor("chain_leggings", {
        name: "Chain Leggings",
        vanillaId: 304,
        protection: 4
    }, function(part){});
    mod.createArmor("chain_boots", {
        name: "Chain Boots",
        vanillaId: 305,
        protection: 1
    }, function(part){});
    //Iron
    mod.createArmor("iron_helmet", {
        name: "Iron Helmet",
        vanillaId: 306,
        protection: 2
    }, function(part){});
    mod.createArmor("iron_chestplate", {
        name: "Iron Chestplate",
        vanillaId: 307,
        protection: 6
    }, function(part){});
    mod.createArmor("iron_leggings", {
        name: "Iron Leggings",
        vanillaId: 308,
        protection: 5
    }, function(part){});
    mod.createArmor("iron_boots", {
        name: "Iron Boots",
        vanillaId: 309,
        protection: 2
    }, function(part){});
    //Diamond
    mod.createArmor("diamond_helmet", {
        name: "Diamond Helmet",
        vanillaId: 310,
        protection: 3
    }, function(part){});
    mod.createArmor("diamond_chestplate", {
        name: "Diamond Chestplate",
        vanillaId: 311,
        protection: 8
    }, function(part){});
    mod.createArmor("diamond_leggings", {
        name: "Diamond Leggings",
        vanillaId: 312,
        protection: 6
    }, function(part){});
    mod.createArmor("diamond_boots", {
        name: "Diamond Boots",
        vanillaId: 313,
        protection: 3
    }, function(part){});
    //Gold
    mod.createArmor("gold_helmet", {
        name: "Gold Helmet",
        vanillaId: 314,
        protection: 2
    }, function(part){});
    mod.createArmor("gold_chestplate", {
        name: "Gold Chestplate",
        vanillaId: 315,
        protection: 5
    }, function(part){});
    mod.createArmor("gold_leggings", {
        name: "Gold Leggings",
        vanillaId: 316,
        protection: 3
    }, function(part){});
    mod.createArmor("gold_boots", {
        name: "Gold Boots",
        vanillaId: 317,
        protection: 1
    }, function(part){});

});


vanillaMaterials.defineFactory("Armor", {
    properties: {
        name: null,
        vanillaId: 300,
        protection: 0
    },
    methods: {}
}, function(part) {
    //We don't know
});


vanillaMaterials.defineFactory("food", {
    properties: {
        name: null,
        vanillaId: 300,
        effectType: "health",
        amount: 0
    },

    methods: {}
}, function(part) {
    part.createItem("food", {
        name: part.name,
        vanillaId: part.vanillaId
    });
});


vanillaMaterials.defineFactory("weapon", {
    properties: {
        name: null,
        vanillaId: 300,
        durability: 0,
        damage: 0,
        rangedDamage: 0
    },

    methods: {}
}, function(part) {
    part.createWeapon("weapon", {
        name: part.name,
        vanillaId: part.vanillaId,
        durability: part.durability,
        damage: part.damage
    })
});


vanillaMaterials.defineFactory("tool", {
    properties: {
        name: null,
        vanillaId: 300,
        durability: 0,
        strengthModifiers: []
    },

    methods: {
        getStrengthModifier: function(part, block, modifier) {
            if (part.props.strengthModifiers[block] == null) {
                return 1.0;
            }
            return part.props.strengthModifiers[block];
        },
        setStrengthModifier: function(part, block, modifier) {
            part.props.strengthModifiers[block] = modifier;
        }
    }

}, function(part) {
    part.createItem("tool", {
        name: part.name,
        vanillaId: part.vanillaId
    }, function(item) {
        //TODO add durability etc.
    });
});


vanillaMaterials.defineFactory("weapon", {
    properties: {
        name: null,
        vanillaId: 300,
        durability: 0,
        damage: 0
    },

    methods: {}
}, function(part) {
    part.createTool("weapon", {
        name: part.name,
        vanillaId: part.vanillaId,
        durability: part.durability
    })
});