const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BOl9pSKK.js","app":"_app/immutable/entry/app.B0RXKeXk.js","imports":["_app/immutable/entry/start.BOl9pSKK.js","_app/immutable/chunks/entry.Dq081sFG.js","_app/immutable/chunks/runtime.DhmC-uA-.js","_app/immutable/entry/app.B0RXKeXk.js","_app/immutable/chunks/runtime.DhmC-uA-.js","_app/immutable/chunks/store.D_znqWxX.js","_app/immutable/chunks/disclose-version.D7wIUWpV.js","_app/immutable/chunks/index-client.BBu5dIgR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-gcpPnfvy.js')),
			__memo(() => import('./chunks/1-k11Y2Y5B.js')),
			__memo(() => import('./chunks/2-ICEitdUd.js'))
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
				id: "/api/highscore",
				pattern: /^\/api\/highscore\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CkpcKJps.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
