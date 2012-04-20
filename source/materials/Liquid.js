vanillaMaterials.defineFactory("liquid", {
    properties: {
        name: null,
        flowing: false
    },

    methods: {}
}, function(part) {
    part.createBlock("liquid", {
        name: part.name,
        placementObstacle: false
    }, function(part) {
        
    });
});