# mini-actix-react-example

A sample app having Rust's `actix-web` as API server and `react` for client.

[1. About](#about)  
[2. Run & Build](#run-build)  
[3. What I Did](#what)  
[4. LICENSE](#license)  


<a id="about"></a>
## 1. About

API server implemented with `actix-web` is running at port 5000.
Assuming a React app hosted *elsewhere*,
when user visit "Articles" page, it asks for a login.
The client app sends an auth request to `/api/auth`,
and once authenticated, then the user sees a list of artiles
which is available at `/api/article/all`.

Available pages:

- Top
- Articles
- About
- Login (no direct links)

Nothing special, really...  
The auth isn't even an actual auth, but it just writes a cookie.  
Simply, I wanted to show how React app is integrated with `actix-web`.

### A Few Notes on Serving with the Same Server (using Docker)

While this example assumes the client app being served in different server,
I have another private project for which both are served in the same server.
In case you are interested, here are the key features you need:
- Ditch CRA, but configure Webpack config files your own.
- Use Docker (I have some sample files in this repo for deploying Docker containers to Heroku)
- Output the client bundles to `server/static/dist`.
- Configure actix-web to statically serve `server/static`.
- Do `COPY static` in your Dockerfile

If you have troubles or questions, feel free to contact me.


<a id="run-build"></a>
## 2. Run & Build

### Run Locally

```shell
yarn start
```

`actix-web` as API server:  
http://localhost:5000/

`react` as client:
http://localhost:3000/



### Build

```shell
yarn build
```



<a id="what"></a>
## 3. What I Did


### 3-1. CRA

Always handy to start a new React app using CRA.

```shell
yarn create react-app mini-actix-react-example
```

#### 3-2. Override CRA

Explains later as to why we need overrides.

- `react-app-rewired`
- `customize-cra`

```shell
yarn add --dev react-app-rewired customize-cra
```

### 3-3. Redux

For this time, only "articles" are managed in Redux state.  
(auth is not managed with Redux, but with `/client/lib/api/user.js`)

- `redux`
- `react-redux`
- `redux-thunk`

```shell
yarn add redux react-redux redux-thunk
```

### 3-4. Routing (React Router)

- `react-router-dom`

```shell
yarn add react-router-dom
```

##### `src` -&gt; `client`

I wanted CRA to lookup `client` instead of `src` for the source:

`config-overrides.js`
```js
const path = require('path');
const { override } = require('customize-cra');

module.exports = {
  paths: (paths, env) => {
    paths.appIndexJs = path.resolve(__dirname, 'client/index.jsx');
    paths.appSrc = path.resolve(__dirname, 'client');
    return paths;
  },
  webpack: override(
    ...
    ...
    Other overrides
  ),
}
```

### 3-5. Emotion & TailwindCSS

- `@emotion/core`
- `@emotion/styled` (this is optional)
- `@emotion/babel-preset-css-prop`
- `tailwindcss`
- `twin.macro`

```shell
yarn add --dev @emotion/core @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro
```

Configuration files for Emotion + TailwindCSS:

`config-overrides.js`  
`babel-plugin-macros.config.js`  
`src/tailwind.config.js`

If you are interested in details about configuring above files,
[check out one of my other repositories.](https://github.com/minagawah/map-supercluster-example#2-6-emotion--tailwindcss)


### 3-6. Installing other NPM packages

Some of the other NPM packages installed:

For "dependencies"
- axios
- js-cookie

For "devDependencies"
- concurrently
- prettier

```shell
yarn add axios js-cookie
yarn add --dev concurrently prettier
```

So, including 3 of the extra packages above,
as a whole, it would look like this:

```shell
yarn add --dev react-app-rewired customize-cra concurrently prettier @emotion/core @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro

yarn add react-router-dom redux react-redux redux-thunk axios
```


### 3-7. Basic `actix-web` setups

```shell
mkdir server
```

`run.sh`
```shell
#!/usr/bin/env bash

cd $(dirname "$0")
cd server
RUST_BACKTRACE=1 RUST_LOG=actix_web=debug cargo run
```
`server/Cargo.toml`
```
[dependencies]
actix-web = "2.0"
actix-rt = "1.0"
actix-cors = "0.2.0"
actix-identity = "0.2.1"
actix-http = "1.0.1"
chrono = "0.2.16"
rand = "0.7.3"
serde_json = "1.0.57"

serde = { version = "1.0", features = ["derive"] }
```


### 3-8. Handling Auth (Cookies, CORS, etc.)

While the auth presented here is barely called "auth",
it needs to read/write cookies neverthless,
and here are the ideas for the app to properly work:

- `actix_identity::IdentityService` writes a cookie upon authentication
- `actix_identity::CookieIdentityPolicy` lets you configure the cookie policies
- In order for the client app at `localhost:3000` to send auth request to API servers, you need CORS settings. For this, `actix_cors::Cors` lets you configure in details.
- When sending a request from the client, you need `{ withCredentials: true }` option for `axios`.


<a id="license"></a>
## 4. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))

