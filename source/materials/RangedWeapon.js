var rangedWeaponComponent = Game.defineComponent({
    name: "weapon",
    components: {
        weapon: {
            notchId: this.notchId
        }
    },
    properties: {
        notchId: 1,
//Technically we should only modify the weapon component
//        durability: 0,
//        damage: 0,
//        rangedDamage: 0
    }
});
