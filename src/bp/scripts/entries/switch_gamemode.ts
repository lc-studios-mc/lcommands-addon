import { registerProfile } from "@/profile_registry";
import { GameMode } from "@minecraft/server";

registerProfile({
	names: ["g", "g1"],
	description: "Switches the game mode between creative and spectator.",
	callback(arg) {
		const isCreative = arg.source.getGameMode() === GameMode.creative;

		if (isCreative) {
			arg.source.setGameMode(GameMode.spectator);
		} else {
			arg.source.setGameMode(GameMode.creative);
		}

		arg.source.sendMessage("Switched the game mode.");
	},
});
