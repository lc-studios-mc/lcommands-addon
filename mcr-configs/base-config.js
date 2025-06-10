/** @type {import("@lc-studios-mc/mcr").Config} */
export default {
	buildOptions: {
		bp: {
			srcDir: "src/bp",
			outDir: "",
			manifest: {},
			script: {
				entryPointRelativeToSrcDir: "scripts/main.ts",
				tsconfig: "tsconfig.json",
				bundle: true,
				sourceMap: true,
			},
		},
		removeOrphans: true,
	},
};
