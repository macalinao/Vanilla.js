vanillaMaterials.defineFactory("Food", {
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