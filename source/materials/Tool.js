var toolComponent = Game.defineComponent({
    name: "tool",
    components: {
        item: {
            notchId: this.notchId
        }
    },

    properties: {
        notchId: 292,
        durability: 0
    }
});