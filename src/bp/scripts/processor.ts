import * as mc from "@minecraft/server";
import { profilesByNameReadonly, profilesReadonly } from "./profile_registry";
import type { LCommandProfile } from "./types";

const playerQuickModeFlags = new Map<mc.Player, boolean>();

function handleCustomCommand(
	profile: LCommandProfile,
	origin: mc.CustomCommandOrigin,
	...args: any[]
): mc.CustomCommandResult {
	const source = origin.sourceEntity;
	if (!(source && source instanceof mc.Player))
		return {
			status: mc.CustomCommandStatus.Failure,
			message: "Only a player can run an LCommand.",
		};

	mc.system.run(() => {
		try {
			profile.callback({
				source,
				params: args,
			});
		} catch (error) {
			source.sendMessage(`§cFailed to run an LCommand: ${error}`);
		}
	});

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

	e.customCommandRegistry.registerCommand(
		{
			name: `l:quick_mode`,
			description: "Eliminates the need to type '/l:' first at the beginning of an LCommand statement.",
			permissionLevel: mc.CommandPermissionLevel.Any,
		},
		(origin: mc.CustomCommandOrigin) => {
			const source = origin.sourceEntity;
			if (!(source && source instanceof mc.Player))
				return {
					status: mc.CustomCommandStatus.Failure,
					message: "Only a player can run this command.",
				};

			const isActive = playerQuickModeFlags.get(source) === true;

			playerQuickModeFlags.set(source, !isActive);

			if (isActive) {
				return {
					status: mc.CustomCommandStatus.Success,
					message: "Turned OFF quick mode.",
				};
			}

			return {
				status: mc.CustomCommandStatus.Success,
				message: "Turned ON quick mode. It will be reset on world exit.",
			};
		},
	);
});

mc.world.beforeEvents.chatSend.subscribe((e) => {
	const isQuickModeActive = playerQuickModeFlags.get(e.sender) === true;
	if (!isQuickModeActive) return;

	const profile = profilesByNameReadonly.get(e.message);
	if (!profile) return;

	e.cancel = true;

	mc.system.run(() => {
		try {
			profile.callback({
				source: e.sender,
				params: [],
			});
		} catch (error) {
			e.sender.sendMessage(`§cFailed to run an LCommand: ${error}`);
		}
	});
});
