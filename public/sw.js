if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/51835b090abdd5f5b7edbbe47b592804fbcb465d.ba35884f54f915863091.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/753952b12d5e952d6ee21f91fce459309dedefbf.384cf1d474185c55f0ff.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/a9a7754c.12245f138123c88c58f2.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/cb1608f2.226478b1a20400665ce6.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/commons.1fcd13f2464e3f882679.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/framework.37f4a736348214b3ca94.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/main-6d5d50a9bb8a13669780.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/pages/_app-1cd8dcfcd7dd31710e5b.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/pages/_error-270e27839e7a70dbc8e2.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/pages/index-16cd0ab882c720150d53.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/pages/pdf-e8ed9e7cd2303e11c163.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/pages/private/%5Bsecret%5D-02315d497e8bfb6e26b8.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/pages/private/%5Bsecret%5D/pdf-eb56797faa80f874fd2c.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/polyfills-40aa1d6e5861c9f142b9.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/css/41b6b81c90b999282447.css",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/css/c24a768fa642c8d4b672.css",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/css/fcab44d58c3fabb09757.css",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/yR2SLPZe84vsJd_g98h7W/_buildManifest.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/_next/static/yR2SLPZe84vsJd_g98h7W/_ssgManifest.js",revision:"yR2SLPZe84vsJd_g98h7W"},{url:"/favicon.ico",revision:"e29fd1e5812d597a72ab00d06687940c"},{url:"/img/icons/favicon-192.png",revision:"dd22c4bd79767b6c8b9a1e63bb839543"},{url:"/img/icons/favicon-512.png",revision:"f10d159308be0b1aa3069a44380180a9"},{url:"/manifest.json",revision:"85e651b4f43978554ef9021700436ab9"},{url:"/robots.txt",revision:"32941d64268ae57b00cb4e1633c4c564"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
