var armorComponent = Game.defineComponent({
    name: "armor",
    components: {
        item: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 308,
        protection: 0
    },
    listeners: {
        "player_damage": function(event) {
            event.damage -= this.protection; //I know this is inaccurate
        }
    }
});