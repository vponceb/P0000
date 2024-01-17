import * as server from '../entries/pages/califica/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/califica/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/califica/+page.server.js";
export const imports = ["_app/immutable/nodes/4.Aq7s0plh.js","_app/immutable/chunks/scheduler.oRG-0Pxp.js","_app/immutable/chunks/index.RLVnrPv5.js"];
export const stylesheets = ["_app/immutable/assets/4.66-j7TBv.css"];
export const fonts = [];
