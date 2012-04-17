//Vanilla.js - https://github.com/simplyianm/Vanilla.js

mm.defineMod("VanillaMaterials", {
    description: "A Javascript mod that contains all materials found in Vanilla Minecraft.",
    author: "AlbireoX",
    revision: 1
}, function(mod) {
    mod.addArmor("")

});


mm.definePartType("Armor", {
    description: "Armor item",
    author: "AlbireoX",
    revision: 1
}, {
    protection: 0
}, {
    //No methods
}, function(part) {
    //Nothing to initialize yet
});


mm.definePartType("Tool", {
    description: "Represents a usable item that is made of a material.",
    author: "AlbireoX",
    revision: 1,
    uses: ["Item"]
}, {
    durability: 0,
    strengthModifiers: []
}, {
    getStrengthModifier: function(part, block, modifier) {
        if (part.props.strengthModifiers[block] == null) {
            return 1.0;
        }
        return part.props.strengthModifiers[block];
    },
    setStrengthModifier: function(part, block, modifier) {
        part.props.strengthModifiers[block] = modifier;
    }
}, function(part) {
    part.addItem("tool", {
        name: part.props.name
    }, function(item) {
        //TODO add durability etc.
    });
});