export default {
	format_version: 2,
	header: {
		description: "Simple and ergonomic Quality-of-Life commands. Requires Beta APIs experiment as of 1.21.80!",
		name: "LCommands §cDEV§r",
		uuid: "1e256203-2c1f-42bf-82b9-b9bdf1926da7",
		version: [0, 0, 1],
		min_engine_version: [1, 21, 80],
	},
	modules: [
		{
			description: "Example vanilla behavior pack",
			type: "data",
			uuid: "3baeb093-b302-433f-a031-d4aaa59796e2",
			version: [0, 0, 1],
		},
	],
	dependencies: [
		{
			uuid: "2463c1f8-7117-4f2c-84f1-936f9bbf087f",
			version: [0, 0, 1],
		},
	],
};
