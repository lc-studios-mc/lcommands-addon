import { registerProfile } from "../profile_registry";

registerProfile({
	names: ["s", "s1"],
	description: "Swaps the current hotbar items with the first inventory column.",
	callback(arg) {
		const invContainer = arg.source.getComponent("inventory")?.container;
		if (!invContainer) return;

		for (let i = 0; i < 9; i++) {
			invContainer.swapItems(i, i + 9, invContainer);
		}

		arg.source.sendMessage("Swapped the hotbar items.");
	},
});

registerProfile({
	names: ["s2"],
	description: "Swaps the current hotbar items with the second inventory column.",
	callback(arg) {
		const invContainer = arg.source.getComponent("inventory")?.container;
		if (!invContainer) return;

		for (let i = 0; i < 9; i++) {
			invContainer.swapItems(i, i + 9 * 2, invContainer);
		}

		arg.source.sendMessage("Swapped the hotbar items.");
	},
});

registerProfile({
	names: ["s3"],
	description: "Swaps the current hotbar items with the third inventory column.",
	callback(arg) {
		const invContainer = arg.source.getComponent("inventory")?.container;
		if (!invContainer) return;

		for (let i = 0; i < 9; i++) {
			invContainer.swapItems(i, i + 9 * 3, invContainer);
		}

		arg.source.sendMessage("Swapped the hotbar items.");
	},
});
