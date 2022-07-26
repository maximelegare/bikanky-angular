// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  shopifyDomain:process.env["NG_APP_SHOPIFY_DOMAIN"],
  shopifyAccessToken:process.env["NG_APP_SHOPIFY_ADMIN_ACCESS_TOKEN"],
  shopifyStoreFrontAccessToken:process.env["NG_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN"],
  
  NG_APP_SANITY_PROJECT_ID:process.env["NG_APP_SANITY_PROJECT_ID"],
  // sanityDataset:process.env.NG_APP_SANITY_DATASET
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
