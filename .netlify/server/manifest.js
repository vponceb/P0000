export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.1AeQbeWE.js","app":"_app/immutable/entry/app.nFI-sLFo.js","imports":["_app/immutable/entry/start.1AeQbeWE.js","_app/immutable/chunks/entry.5ARbKKgZ.js","_app/immutable/chunks/scheduler.oRG-0Pxp.js","_app/immutable/entry/app.nFI-sLFo.js","_app/immutable/chunks/scheduler.oRG-0Pxp.js","_app/immutable/chunks/index.RLVnrPv5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/agradecimiento",
				pattern: /^\/agradecimiento\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/califica",
				pattern: /^\/califica\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
