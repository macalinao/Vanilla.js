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

//Armor
//Leather
Game.registerArmor("leather_cap", {
    name: "Leather Cap",
    notchId: 298,
    protection: 1
});
Game.registerArmor("leather_tunic", {
    name: "Leather Tunic",
    notchId: 299,
    protection: 3
});
Game.registerArmor("leather_pants", {
    name: "Leather Pants",
    notchId: 300,
    protection: 2
});
Game.registerArmor("leather_boots", {
    name: "Leather Boots",
    notchId: 301,
    protection: 1
});
//Chain
Game.registerArmor("chain_helmet", {
    name: "Chain Helmet",
    notchId: 302,
    protection: 2
});
Game.registerArmor("chain_chestplate", {
    name: "Chain Chestplate",
    notchId: 303,
    protection: 5
});
Game.registerArmor("chain_leggings", {
    name: "Chain Leggings",
    notchId: 304,
    protection: 4
});
Game.registerArmor("chain_boots", {
    name: "Chain Boots",
    notchId: 305,
    protection: 1
});
//Iron
Game.registerArmor("iron_helmet", {
    name: "Iron Helmet",
    notchId: 306,
    protection: 2
});
Game.registerArmor("iron_chestplate", {
    name: "Iron Chestplate",
    notchId: 307,
    protection: 6
});
Game.registerArmor("iron_leggings", {
    name: "Iron Leggings",
    notchId: 308,
    protection: 5
});
Game.registerArmor("iron_boots", {
    name: "Iron Boots",
    notchId: 309,
    protection: 2
});
//Diamond
Game.registerArmor("diamond_helmet", {
    name: "Diamond Helmet",
    notchId: 310,
    protection: 3
});
Game.registerArmor("diamond_chestplate", {
    name: "Diamond Chestplate",
    notchId: 311,
    protection: 8
});
Game.registerArmor("diamond_leggings", {
    name: "Diamond Leggings",
    notchId: 312,
    protection: 6
});
Game.registerArmor("diamond_boots", {
    name: "Diamond Boots",
    notchId: 313,
    protection: 3
});
//Gold
Game.registerArmor("gold_helmet", {
    name: "Gold Helmet",
    notchId: 314,
    protection: 2
});
Game.registerArmor("gold_chestplate", {
    name: "Gold Chestplate",
    notchId: 315,
    protection: 5
});
Game.registerArmor("gold_leggings", {
    name: "Gold Leggings",
    notchId: 316,
    protection: 3
});
Game.registerArmor("gold_boots", {
    name: "Gold Boots",
    notchId: 317,
    protection: 1
});
