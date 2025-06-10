import { registerProfile } from "@/profile_registry";
import { EnchantmentType, EquipmentSlot, ItemStack } from "@minecraft/server";

registerProfile({
	names: ["a", "a1"],
	description: "Equip a very strong set of diamond armors.",
	callback(arg) {
		const head = new ItemStack("minecraft:diamond_helmet");
		{
			const enchantable = head.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("protection"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("aqua_affinity"), level: 1 });
		}

		const chest = new ItemStack("minecraft:diamond_chestplate");
		{
			const enchantable = chest.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("blast_protection"), level: 4 });
		}

		const legs = new ItemStack("minecraft:diamond_leggings");
		{
			const enchantable = legs.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("fire_protection"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("swift_sneak"), level: 3 });
		}

		const feet = new ItemStack("minecraft:diamond_boots");
		{
			const enchantable = feet.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("protection"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("feather_falling"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("depth_strider"), level: 3 });
		}

		const equippable = arg.source.getComponent("equippable")!;
		equippable.setEquipment(EquipmentSlot.Head, head);
		equippable.setEquipment(EquipmentSlot.Chest, chest);
		equippable.setEquipment(EquipmentSlot.Legs, legs);
		equippable.setEquipment(EquipmentSlot.Feet, feet);
	},
});

registerProfile({
	names: ["a2"],
	description: "Equip a very strong set of netherite armors.",
	callback(arg) {
		const head = new ItemStack("minecraft:netherite_helmet");
		{
			const enchantable = head.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("protection"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("aqua_affinity"), level: 1 });
		}

		const chest = new ItemStack("minecraft:netherite_chestplate");
		{
			const enchantable = chest.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("blast_protection"), level: 4 });
		}

		const legs = new ItemStack("minecraft:netherite_leggings");
		{
			const enchantable = legs.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("fire_protection"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("swift_sneak"), level: 3 });
		}

		const feet = new ItemStack("minecraft:netherite_boots");
		{
			const enchantable = feet.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("protection"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("feather_falling"), level: 4 });
			enchantable.addEnchantment({ type: new EnchantmentType("depth_strider"), level: 3 });
		}

		const equippable = arg.source.getComponent("equippable")!;
		equippable.setEquipment(EquipmentSlot.Head, head);
		equippable.setEquipment(EquipmentSlot.Chest, chest);
		equippable.setEquipment(EquipmentSlot.Legs, legs);
		equippable.setEquipment(EquipmentSlot.Feet, feet);
	},
});

registerProfile({
	names: ["a3"],
	description: "Equip a not too strong, mixed set of armors.",
	callback(arg) {
		const head = new ItemStack("minecraft:iron_helmet");
		{
			const enchantable = head.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
		}

		const chest = new ItemStack("minecraft:iron_chestplate");
		{
			const enchantable = chest.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("protection"), level: 2 });
		}

		const legs = new ItemStack("minecraft:leather_leggings");
		{
			const enchantable = legs.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
		}

		const feet = new ItemStack("minecraft:iron_boots");
		{
			const enchantable = feet.getComponent("enchantable")!;
			enchantable.addEnchantment({ type: new EnchantmentType("mending"), level: 0 });
			enchantable.addEnchantment({ type: new EnchantmentType("unbreaking"), level: 3 });
			enchantable.addEnchantment({ type: new EnchantmentType("feather_falling"), level: 2 });
		}

		const equippable = arg.source.getComponent("equippable")!;
		equippable.setEquipment(EquipmentSlot.Head, head);
		equippable.setEquipment(EquipmentSlot.Chest, chest);
		equippable.setEquipment(EquipmentSlot.Legs, legs);
		equippable.setEquipment(EquipmentSlot.Feet, feet);
	},
});
