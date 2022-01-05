const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-f59aa740.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/admin/editor.vue",
      "pages/admin/post-list.vue",
      "pages/admin.vue",
      "pages/index.vue",
      "pages/page/[pageIndex].vue",
      "pages/post/[cid].vue"
    ],
    "css": [
      "assets/entry.76693088.css"
    ]
  },
  "pages/admin/editor.vue": {
    "file": "editor-9b4cbe86.mjs",
    "src": "pages/admin/editor.vue",
    "isDynamicEntry": true,
    "imports": [
      "_marked.esm-e786a0da.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/editor.f4ff953b.css"
    ]
  },
  "_marked.esm-e786a0da.mjs": {
    "file": "marked.esm-e786a0da.mjs"
  },
  "pages/admin/post-list.vue": {
    "file": "post-list-6ee9c93b.mjs",
    "src": "pages/admin/post-list.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-db5c340a.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "_Post-db5c340a.mjs": {
    "file": "Post-db5c340a.mjs"
  },
  "pages/admin.vue": {
    "file": "admin-e7503eab.mjs",
    "src": "pages/admin.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/admin.87f2a328.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-6e71562c.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/page/[pageIndex].vue": {
    "file": "_pageIndex_-b82eb562.mjs",
    "src": "pages/page/[pageIndex].vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-db5c340a.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/_pageIndex_.8e548ad6.css"
    ]
  },
  "pages/post/[cid].vue": {
    "file": "_cid_-1e73de89.mjs",
    "src": "pages/post/[cid].vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-db5c340a.mjs",
      "_marked.esm-e786a0da.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
