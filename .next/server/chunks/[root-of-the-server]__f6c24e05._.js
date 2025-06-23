module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[project]/pages/api/behance/projects.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
;
const scrapeProject = async (id)=>{
    console.log(id);
    const graphqlQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync('graphql/behanceProject.graphql', 'utf8').replaceAll('\n', '  ');
    const projectDetails = await fetch('https://www.behance.net/v3/graphql', {
        headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json',
            priority: 'u=1, i',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'x-bcp': 'a48f77ec-9852-4b59-a5c8-f1b58fce21b3',
            'x-newrelic-id': 'VgUFVldbGwsFU1BRDwUBVw==',
            'x-requested-with': 'XMLHttpRequest',
            cookie: 'gk_suid=27043807; gki=feature_pro_boost_record_impressions:false,; bcp=a48f77ec-9852-4b59-a5c8-f1b58fce21b3; OptanonAlertBoxClosed=2025-01-14T10:13:34.369Z; OptanonConsent=groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1; bcp_generated=1736849614105; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity=CiY3NzU0NjY2MTc1MDc1OTI5NDc3MjU2Njc2NjA0MDIzODc1MzE1OFITCIPSt6LGMhABGAEqBElSTDEwAPABg9K3osYy; AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg=MCMID|77546661750759294772566766040238753158; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_consent=general=in; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster=irl1; ilo0=true; _cs_mk_aa=0.2439406106404156_1736851820308; gpv=behance.net:profile:default',
            Referer: 'https://www.behance.net/mood_design',
            'Referrer-Policy': 'strict-origin-when-cross-origin'
        },
        body: '' + `{"query":"${graphqlQuery}","variables":{"projectId":"216516663"},"id":"7829878cd6197dd7a9713fdadf5ec0e7"}`,
        method: 'POST'
    }).then((e)=>e.text()).then((e)=>JSON.parse(e));
    return projectDetails.data;
};
const scrapeProjects = async ()=>{
    try {
        const graphqlQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync('graphql/behanceList.graphql', 'utf8').replaceAll('\n', '  ');
        const response = [];
        const variables = {
            username: 'mood_design'
        };
        while(true){
            const { data } = await fetch('https://www.behance.net/v3/graphql', {
                headers: {
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.9',
                    'content-type': 'application/json',
                    priority: 'u=1, i',
                    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'x-bcp': '4a9bb57e-2d2e-4596-b748-ce965b3341c7',
                    'x-newrelic-id': 'VgUFVldbGwsFU1BRDwUBVw==',
                    'x-requested-with': 'XMLHttpRequest',
                    cookie: 'gk_suid=18927724; gki=feature_pro_boost_record_impressions:false,; originalReferrer=; ilo0=true; bcp=4a9bb57e-2d2e-4596-b748-ce965b3341c7; OptanonAlertBoxClosed=2025-01-13T20:08:26.629Z; OptanonConsent=groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1; bcp_generated=1736798906241; _cs_mk_aa=0.3527290051385641_1736798906873; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster=irl1; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity=CiY1MjUzNjE3ODczODkyMTY2Njc3MjQxMjI1OTQ5MjI5NDI4MTA4M1ITCJ3WoIrGMhABGAEqBElSTDEwAPABndagisYy; AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg=MCMID|52536178738921666772412259492294281083; gpv=behance.net:profile:default',
                    Referer: 'https://www.behance.net/mood_design',
                    'Referrer-Policy': 'strict-origin-when-cross-origin'
                },
                body: `{"query":"${graphqlQuery}","variables":${JSON.stringify(variables)}}`,
                method: 'POST'
            }).then((e)=>e.text()).then((e)=>JSON.parse(e));
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            variables.after = data.user.profileProjects.pageInfo.endCursor;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            response.push(...data.user.profileProjects.nodes);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (!data.user.profileProjects.pageInfo.hasNextPage) {
                break;
            }
        }
        return response;
    } catch (error) {
        console.error('Error scraping projects:', error);
    }
    return [];
};
async function handler(_req, res) {
    console.log(scrapeProject);
    return res.status(200).json(await scrapeProjects());
}
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/behance/projects.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$behance$2f$projects$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/behance/projects.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$behance$2f$projects$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$behance$2f$projects$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/behance/projects",
        pathname: "/api/behance/projects",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$behance$2f$projects$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f6c24e05._.js.map