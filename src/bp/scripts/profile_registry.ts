import type { LCommandProfile } from "./types";

const profiles: LCommandProfile[] = [];
export const profilesReadonly: readonly LCommandProfile[] = profiles;

const profilesByName = new Map<string, LCommandProfile>();
export const profilesByNameReadonly: ReadonlyMap<string, LCommandProfile> = profilesByName;

export function registerProfile(profile: LCommandProfile): void {
	profiles.push(profile);
	profile.names.forEach((a) => profilesByName.set(a, profile));
}
