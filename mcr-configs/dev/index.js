import manifestBp from "./manifest-bp.js";

/** @type {import("@lc-studios-mc/mcr").Config} */
export default {
	extends: "../base-config.js",
	buildOptions: {
		bp: {
			srcDir: "src/bp",
			outDir: "<com.mojang>/development_behavior_packs/LCommands",
			manifest: manifestBp,
		},
		watch: true,
	},
};
