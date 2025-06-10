import { registerProfile } from "../profile_registry";

registerProfile({
	names: ["e", "e1"],
	description: "Empty the hotbar.",
	callback(arg) {
		const invContainer = arg.source.getComponent("inventory")?.container;
		if (!invContainer) return;

		for (let i = 0; i < 9; i++) {
			const slot = invContainer.getSlot(i);
			slot.setItem(undefined);
		}

		arg.source.sendMessage("Emptied the hotbar.");
	},
});
