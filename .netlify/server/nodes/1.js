

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5Q-wcAJZ.js","_app/immutable/chunks/scheduler.oRG-0Pxp.js","_app/immutable/chunks/index.RLVnrPv5.js","_app/immutable/chunks/entry.IF_Zas9k.js"];
export const stylesheets = [];
export const fonts = [];
