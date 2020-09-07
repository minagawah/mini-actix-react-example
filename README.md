# mini-actix-react-example

Example having 'actix-web' as API server and React for client.

[1. About](#about)  
[2. Running](#running)  
[3. What I Did](#what)  
[4. LICENSE](#license)  

<a id="about"></a>
## 1. About

`actix-web` listening at port `5000` and provides `/api/auth` as an endpoint.  
React app on the client side sends request to login.  
Nothing really... The endpoint is just returning a hard-coded JSON data back.

React app was created with CRA.  
Source codes stored in `client` directory.  
(configured `config-overrides.js` to build from there)

`actix-web` sources are in `server` directory.


<a id="running"></a>
## 2. Running

Run the local API server:

```shell
sh ./run.sh
```

http://localhost:5000/

Run the client app:
```shell
yarn start
```

http://localhost:3000/


<a id="what"></a>
## 3. What I Did


### 3-1. Client: `react` (with Router + Redux)


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

#### (f) Others

```shell
yarn add axios
```

#### (x) Installed NPM Packages All

```shell
yarn add --dev react-app-rewired customize-cra @emotion/core @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro

yarn add react-router-dom redux react-redux redux-thunk axios
```


### 3-2. Server: `actix-web`

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

