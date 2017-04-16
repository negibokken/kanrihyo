# Kanrihyo

## Usage

* TODO

## Develop

### Development tools

* Install below tools
  * `Node.js` (supported version is v6.10)
  * `yarn` or `npm`

* golang and below packages
  - `go get gopkg.in/gin-gonic/gin.v1`
  - `go get github.com/pilu/fresh`
  - `go get github.com/gin-gonic/contrib/static`

### Build

1. Execute below commands
  - In case of yarn
      ```sh
      $ yarn install
      $ yarn build
      ```
  - In case of npm
      ```
      $ npm install
      $ npm run build
      ```
2. Execute fresh
    ```
    $ fresh
    ```
    - then start server and reboot when you update any .go files

* Access below pages (under constructed)
  - `http://localhost:8080/` to access index.html
      - and enter table name in form of index.html. Then you can see table page.

## License

MIT
