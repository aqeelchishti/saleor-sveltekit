# Saleor SvelteKit Storefront

Everything you need to build and preview a saleor-sveltekit-storefront project.

## Core Dependencies

Node v16.15.0
npm v8.5.5

```bash
# Install all dependencies
npm install

# or

yarn


# Generate GraphQL Stores and Types 
npm run gen

# or

yarn gen 
```

## Development

Once you've installed dependencies with `npm install` and generate graphQL stores and types with `npm run gen` start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build

# or

yarn build
```

You can preview the production build with `npm run preview` or `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
