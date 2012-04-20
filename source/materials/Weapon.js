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