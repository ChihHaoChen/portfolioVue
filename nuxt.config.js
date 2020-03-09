import colors from "vuetify/es5/util/colors"
import webpack from "webpack"

// const CopyWebpackPlugin = require("copy-webpack-plugin")

export default {
  build: {
    extend(config, { isDev }) {
      // ..
      config.module.rules.push({
        test: /pdf\.worker(\.min)?\.js$/,
        loader: "file-loader"
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) config.mode = "development"
    },
    plugins: [
      new webpack.ProvidePlugin({
        from: "@/node_modules/pdfjs-dist/build/pdf.worker.js",
        to: "pdf.worker.js"
      }),
      new webpack.NamedModulesPlugin()
    ],
    loading: "~/components/loading.vue"
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + "Portfolio",
    title: "Chih-Hao Chen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Chih-Hao Chen",
        content: "My Portfolio"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Blinker:600&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/bus"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/vuetify"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  env: {
    PUBLICATIONURL:
      "https://portfoliovue-6c2b7.firebaseio.com/publications.json",
    PROFILEURL: "https://portfoliovue-6c2b7.firebaseio.com/profile.json",
    PROJECTSURL: "https://portfoliovue-6c2b7.firebaseio.com/projects.json"
  }
}
