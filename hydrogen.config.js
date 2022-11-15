import { defineConfig } from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: process.env.DOMAIN,
    storefrontToken: process.env.TOKEN,
    storefrontApiVersion: '2022-07',
  },
});
