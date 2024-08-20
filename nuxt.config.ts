export default defineNuxtConfig({

  // Get all the pages, components, composables and plugins from the parent theme
  extends: ['./woonuxt_base'],

  components: [{ path: './components', pathPrefix: false }],

  /**
   * Depending on your servers capabilities, you may need to adjust the following settings.
   * It will affect the build time but also increase the reliability of the build process.
   * If you have a server with a lot of memory and CPU, you can remove the following settings.
   * @property {number} concurrency - How many pages to prerender at once
   * @property {number} interval - How long to wait between prerendering pages
   * @property {boolean} failOnError - This stops the build from failing but the page will not be statically generated
   */
   devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    // force ipx, as otherwise it would default to using Netlify Image CDN (which probably is better to use, but issue is about ipx)
    provider: "ipx",
    domains: ["secure.woonuxt.com", "zainternationaltrading.com"],
  },
});
