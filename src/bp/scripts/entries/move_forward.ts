import { registerProfile } from "@/profile_registry";
import * as vec3 from "@/vec3";
import { Direction, Player, world, type Vector3 } from "@minecraft/server";

function moveForward(player: Player, distance: number): void {
	const raycastHit = player.getBlockFromViewDirection({
		maxDistance: distance,
		includePassableBlocks: true,
	});

	let tpLoc: Vector3;
	if (raycastHit) {
		tpLoc = vec3.add(raycastHit.block, raycastHit.faceLocation);

		if (raycastHit.face === Direction.Down) {
			tpLoc = vec3.add(tpLoc, vec3.fromPartial({ y: -2 }));
		} else if (raycastHit.face === Direction.Up) {
			tpLoc = vec3.add(tpLoc, vec3.fromPartial({ y: 0.1 }));
		} else {
			const dirToOrigin = vec3.normalize(vec3.sub(player.location, tpLoc));
			tpLoc = vec3.add(tpLoc, vec3.scale(dirToOrigin, 0.6));
		}
	} else {
		tpLoc = vec3.add(player.location, vec3.changeDir(vec3.scale(vec3.FORWARD, distance), player.getViewDirection()));
	}

	player.tryTeleport(tpLoc);
}

registerProfile({
	names: ["w", "w1"],
	description: "Move 50 blocks forward",
	callback(arg) {
		moveForward(arg.source, 50);
		arg.source.sendMessage(`Moved forward.`);
	},
});

registerProfile({
	names: ["w2"],
	description: "Move 100 blocks forward",
	callback(arg) {
		moveForward(arg.source, 100);
		arg.source.sendMessage(`Moved forward.`);
	},
});
