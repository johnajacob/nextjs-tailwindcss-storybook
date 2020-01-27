## Work in Progress 🚧👷‍♂️

## Features

- [Storybook](https://github.com/storybookjs/storybook)
- [TailwindCSS](http://tailwindcss.com)
- ESlint and Prettier
- [Jest](https://jestjs.io/en/) and [React Testing Library](https://github.com/testing-library/react-testing-library)

## Known issues

- Tailwind `@apply` throws an ESLint error

## Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)):

```bash
now
```

## Run Storybook

```bash
npm run storybook
# or
yarn storybook
```

## Build Static Storybook

```bash
npm run build-storybook
# or
yarn build-storybook
```

Deploy Storybook to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
npm run build-storybook
# or
yarn build-storybook
# then
cd storybook-static
now
```

## Export and Serve

```bash
npm run export
# or
yarn export
# then
cd out
serve -p 8080
```