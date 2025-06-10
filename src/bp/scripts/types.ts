import * as mc from "@minecraft/server";

export type LCommandArg = {
	source: mc.Player;
	params: unknown[];
};

export type LCommandCallback = (arg: LCommandArg) => (boolean | undefined | void) | Promise<boolean | undefined | void>;

export type LCommandProfile = {
	names: string[];
	description?: string;
	mandatoryParameters?: mc.CustomCommandParameter[];
	optionalParameters?: mc.CustomCommandParameter[];
	callback: (arg: LCommandArg) => void;
};
