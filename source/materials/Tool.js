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