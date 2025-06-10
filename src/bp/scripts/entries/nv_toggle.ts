import { registerProfile } from "../profile_registry";

registerProfile({
	names: ["v", "vv", "v1"],
	description: "Toggles the night vision effect.",
	callback(arg) {
		const currentNv = arg.source.getEffect("night_vision");

		if (currentNv) {
			arg.source.removeEffect("night_vision");
		} else {
			arg.source.runCommand("effect @s night_vision infinite 1 true"); // infinite duration is only available via command
		}

		arg.source.sendMessage("Toggled the night vision effect.");
	},
});
