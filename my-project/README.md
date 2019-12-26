# Gatsby Typescript starter

## How this was made

There's nothing very special here, just a rudimentary conversion to Typescript.

I figured out how to do this by looking here <https://github.com/haysclark/gatsby-starter-typescript>.

These are the steps I went through.

### Rename .js files in src/pages as .tsx

 404.js -> 404.tsx

 index.js -> index.tsx

 page-2.js -> index.tsx

### Add typescript configuration files

 See ```tsconfig.json``` and ```tslint.json```.

### Add extra libraries

 ```sh
 yarn add gatsby-plugin-typescript @types/node @types/react @types/react-dom
 ```

### Edit format entry for scripts in package.json

Only the format line needs to change.  The others are show for completeness.

```json
"scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --parser typescript --trailing-comma es5 --no-semi --single-quote --write \"src/**/*.ts*\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  },
```

### Add typescript plugin to gatsby-config.js

```js
plugins: [
    //...
    `gatsby-plugin-typescript`
]

