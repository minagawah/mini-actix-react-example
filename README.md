# mini-actix-react-example

Example of aptix-web (with cookie auth) for server-side, React (Router + Redux) for client-side.

[1. About](#about)  
[2. What I Did](#what)  
[3. LICENSE](#license)  

<a id="about"></a>
## 1. About

<a id="what"></a>
## 2. What I Did

Client: React
- Auth Provider
-

Server: aptix-web
- Runs at: 5000


### 2-1. Client: React (with Router + Redux)


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

#### (e) Emotion + Tailwind CSS

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


#### (xxx) All Installed NPM Packages

```shell
yarn add --dev react-app-rewired customize-cra @emotion/core @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro

yarn add react-router-dom redux react-redux redux-thunk
```



### 2-2. Server: actix-web

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

API server runs at `localhost:5000`

```shell
sh ./run.sh
```



<a id="license"></a>
## 3. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))

