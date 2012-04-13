mm.definePartType("Tool", {
    description: "Represents a usable item that is made of a material.",
    author: "AlbireoX",
    revision: 1
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

});