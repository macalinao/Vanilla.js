var weaponComponent = Game.defineComponent({
    name: "weapon",
    components: {
        item: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 1,
        durability: 0,
        damage: 0
    }
});
