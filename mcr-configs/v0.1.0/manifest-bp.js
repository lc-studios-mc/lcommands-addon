export default {
	format_version: 2,
	header: {
		description: "Simple and ergonomic Quality-of-Life commands. Requires Beta APIs experiment as of 1.21.80!",
		name: "LCommands §7v0.1.0 §c[1.21.80 ONLY]§r",
		uuid: "1e256203-2c1f-42bf-82b9-b9bdf1926da7",
		version: [0, 1, 0],
		min_engine_version: [1, 21, 80],
	},
	modules: [
		{
			description: "Behavior pack",
			type: "data",
			uuid: "3baeb093-b302-433f-a031-d4aaa59796e2",
			version: [0, 1, 0],
		},
		{
			description: "Scripts",
			language: "javascript",
			type: "script",
			uuid: "8b88868f-a886-4391-a390-068d26a77aa6",
			version: [0, 1, 0],
			entry: "scripts/main.js",
		},
	],
	dependencies: [
		{
			module_name: "@minecraft/server",
			version: "2.0.0-beta",
		},
	],
};
