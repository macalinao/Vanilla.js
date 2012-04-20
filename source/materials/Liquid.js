var liquidComponent = Game.defineComponent({
    name: "liquid",
    components: {
        block: {
            mesh: "deform",
            collision: "liquid",
            notchId: this.notchId
        }
    },
    properties: {
        placementObstacle: false,
        notchId: 1
    }
});
