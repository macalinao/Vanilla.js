mm.defineMod("VanillaMaterials", {
    description: "A Javascript mod that contains all materials found in Vanilla Minecraft.",
    author: "AlbireoX",
    revision: 1
}, function(mod) {

    //Armor
    //Leather
    mod.addArmor("leather_cap", {
        name: "Leather Cap",
        vanillaId: 298,
        protection: 1
    }, function(part){});
    mod.addArmor("leather_tunic", {
        name: "Leather Tunic",
        vanillaId: 299,
        protection: 3
    }, function(part){});
    mod.addArmor("leather_pants", {
        name: "Leather Pants",
        vanillaId: 300,
        protection: 2
    }, function(part){});
    mod.addArmor("leather_boots", {
        name: "Leather Boots",
        vanillaId: 301,
        protection: 1
    }, function(part){});
    //Chain
    mod.addArmor("chain_helmet", {
        name: "Chain Helmet",
        vanillaId: 302,
        protection: 2
    }, function(part){});
    mod.addArmor("chain_chestplate", {
        name: "Chain Chestplate",
        vanillaId: 303,
        protection: 5
    }, function(part){});
    mod.addArmor("chain_leggings", {
        name: "Chain Leggings",
        vanillaId: 304,
        protection: 4
    }, function(part){});
    mod.addArmor("chain_boots", {
        name: "Chain Boots",
        vanillaId: 305,
        protection: 1
    }, function(part){});
    //Iron
    mod.addArmor("iron_helmet", {
        name: "Iron Helmet",
        vanillaId: 306,
        protection: 2
    }, function(part){});
    mod.addArmor("iron_chestplate", {
        name: "Iron Chestplate",
        vanillaId: 307,
        protection: 6
    }, function(part){});
    mod.addArmor("iron_leggings", {
        name: "Iron Leggings",
        vanillaId: 308,
        protection: 5
    }, function(part){});
    mod.addArmor("iron_boots", {
        name: "Iron Boots",
        vanillaId: 309,
        protection: 2
    }, function(part){});
    //Diamond
    mod.addArmor("diamond_helmet", {
        name: "Diamond Helmet",
        vanillaId: 310,
        protection: 3
    }, function(part){});
    mod.addArmor("diamond_chestplate", {
        name: "Diamond Chestplate",
        vanillaId: 311,
        protection: 8
    }, function(part){});
    mod.addArmor("diamond_leggings", {
        name: "Diamond Leggings",
        vanillaId: 312,
        protection: 6
    }, function(part){});
    mod.addArmor("diamond_boots", {
        name: "Diamond Boots",
        vanillaId: 313,
        protection: 3
    }, function(part){});
    //Gold
    mod.addArmor("gold_helmet", {
        name: "Gold Helmet",
        vanillaId: 314,
        protection: 2
    }, function(part){});
    mod.addArmor("gold_chestplate", {
        name: "Gold Chestplate",
        vanillaId: 315,
        protection: 5
    }, function(part){});
    mod.addArmor("gold_leggings", {
        name: "Gold Leggings",
        vanillaId: 316,
        protection: 3
    }, function(part){});
    mod.addArmor("gold_boots", {
        name: "Gold Boots",
        vanillaId: 317,
        protection: 1
    }, function(part){});

});