import manifestBp from "./manifest-bp.js";

/** @type {import("@lc-studios-mc/mcr").Config} */
export default {
	extends: "../base-config.js",
	buildOptions: {
		bp: {
			srcDir: "src/bp",
			outDir: "dist/LCommands-v0.1.0_1.21.80/LCommands",
			manifest: manifestBp,
		},
	},
};
