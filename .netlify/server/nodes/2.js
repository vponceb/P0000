

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.925mEeLp.js","_app/immutable/chunks/scheduler.oRG-0Pxp.js","_app/immutable/chunks/index.RLVnrPv5.js"];
export const stylesheets = ["_app/immutable/assets/2.LyNpuKSj.css"];
export const fonts = ["_app/immutable/assets/icomoon.gKIZ3Eh_.ttf","_app/immutable/assets/icomoon.-qHKCoHt.woff"];
