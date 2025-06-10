import * as mc from "@minecraft/server";
import { profilesReadonly } from "./profile_registry";
import type { LCommandProfile } from "./types";

function handleCustomCommand(
	profile: LCommandProfile,
	origin: mc.CustomCommandOrigin,
	...args: any[]
): mc.CustomCommandResult {
	const source = origin.sourceEntity;
	if (!(source && source instanceof mc.Player))
		return {
			status: mc.CustomCommandStatus.Failure,
			message: "Only a player can run a LCommand.",
		};

	try {
		profile.callback({
			source,
			params: args,
		});
	} catch (error) {
		return {
			status: mc.CustomCommandStatus.Failure,
			message: `Failed to run a LCommand: ${error}`,
		};
	}

	return {
		status: mc.CustomCommandStatus.Success,
	};
}

mc.system.beforeEvents.startup.subscribe((e) => {
	for (const profile of profilesReadonly) {
		for (const name of profile.names) {
			e.customCommandRegistry.registerCommand(
				{
					name: `l:${name}`,
					description: profile.description ?? "No description",
					permissionLevel: mc.CommandPermissionLevel.Any,
				},
				(origin: mc.CustomCommandOrigin, ...args: any[]) => {
					return handleCustomCommand(profile, origin, args);
				},
			);
		}
	}
});
