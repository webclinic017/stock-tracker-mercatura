if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),f={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0123b455.css",revision:"7725127f2c7cebe1aeca0be69288d542"},{url:"assets/index.3fbf9a58.js",revision:"647d72ac87540aae4cfcfcbb3f5db49a"},{url:"assets/vendor.a01bb8fd.js",revision:"fe8a044dbf7deee0964d8a89b518065c"},{url:"index.html",revision:"bdf54b32a252234a43849f56cab8acdb"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon-192px.png",revision:"8415de6ff86c9aab5b125ce0375c7642"},{url:"icon-512px.png",revision:"0b2ac360f006160e152d5d6febc63548"},{url:"manifest.webmanifest",revision:"30b8afc0ae5eaf06eb8a067977929dda"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
