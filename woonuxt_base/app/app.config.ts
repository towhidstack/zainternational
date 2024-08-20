/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Z A International',
  shortDescription: 'Z A International – Your trusted source for premium quality products in Bangladesh. We specialize in delivering the best fashion and gadgets right to your doorstep. Enjoy a seamless shopping experience with full cash-on-delivery services across the country. Powered by excellence, driven by innovation.',
  description: `Z A International – Your trusted source for premium quality products in Bangladesh. We specialize in delivering the best fashion and gadgets right to your doorstep. Enjoy a seamless shopping experience with full cash-on-delivery services across the country. Powered by excellence, driven by innovation.`,
  baseUrl: 'https://zainternational.netlify.app',
  siteImage: 'https://user-images.githubusercontent.com/5116925/218879668-f4c1f9fd-bef4-44b0-bc7f-e87d994aa3a1.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
