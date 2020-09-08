# mini-actix-react-example

Example having Rust's actix-web as API server and React for client.

[1. About](#about)  
[2. Run & Build](#run-build)  
[3. What I Did](#what)  
[4. LICENSE](#license)  


<a id="about"></a>
## 1. About

We have `actix-web` (a popular web framework for Rust) running at port `5000` as an API server,
and listens to client requests.  
Assuming our React app runs elsewhere,
as you attempt to access "Articles" page, it asks you for a login.
The authentication is done at: http://localhost:5000/api/auth  
Once authenticated,
the app retrieves a list of articles from: http://localhost:5000/api/articles

It is not doing anything special...  
Just illustrating how Rust written server app
is integrated with a React app.


<a id="run-build"></a>
## 2. Run & Build

**## Run (locally)**  

```shell
yarn start
```

Which does:
- `run ./server_run_local.sh`
- `npx react-app-rewired start`

API server using `actix-web` listening at:  
http://localhost:5000/

SPA using `react`:  
http://localhost:3000/



**## Build**  
- `run ./server_build.sh`
- `npx react-app-rewired build`
```shell
yarn build
```



<a id="what"></a>
## 3. What I Did


### 3-1. Client - `react`

Has the following pages:
- Home
- Articles
- About

Everyone can access pages except for "Articles" page.  
When you access "Articles" page, it checkes for a login.


#### (a) CRA

```shell
yarn create react-app mini-actix-react-example
```

#### (b) Override CRA

- `react-app-rewired`
- `customize-cra`

```shell
yarn add --dev react-app-rewired customize-cra
```

#### (c) Redux

- `redux`
- `react-redux`
- `redux-thunk`

```shell
yarn add redux react-redux redux-thunk
```

#### (d) React Router

- `react-router-dom`

```shell
yarn add react-router-dom
```

#### (e) `src` -&gt; `client`

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

#### (f) Emotion + Tailwind CSS

- `@emotion/core`
- `@emotion/styled` (this is optional)
- `@emotion/babel-preset-css-prop`
- `tailwindcss`
- `twin.macro`

```shell
yarn add --dev @emotion/core @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro
```

Configuration files for Emotion + Tailwind CSS:

`config-overrides.js`
`babel-plugin-macros.config.js`
`src/tailwind.config.js`


#### (g) Others

**## dev**
- `concurrently`

**## prod**
- `axios`

```shell
yarn add --dev concurrently
yarn add axios
```


#### (x) Installed NPM Packages All

```shell
yarn add --dev react-app-rewired customize-cra concurrently @emotion/core @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro

yarn add react-router-dom redux react-redux redux-thunk axios
```


### 3-2. Server - `actix-web`

React app as a client sending requests to `localhost:5000/api/[WHATEVER_THE_ENDPOINTS]`.

```shell
mkdir server
```

`run.sh`
```shell
#!/usr/bin/env bash

cd $(dirname "$0")
cd server
cargo run
```
`server/Cargo.toml`
```
[dependencies]
actix-web = "2.0"
actix-rt = "1.0"
```



<a id="license"></a>
## 3. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))

