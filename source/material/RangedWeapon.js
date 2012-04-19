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