const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/resume/"
        }
      }
    : {}

export default {
  ...routerBase,
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_description || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "@/assets/css/main.scss",
    "@/assets/css/dark.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui"],
  /*
   ** Nuxt.js build-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["vue-github-buttons/nuxt"],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "raw-loader"
      })
    }
  }
}
