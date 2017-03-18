# Kanrihyo

## Usage

* TODO

## Develop

### Development tools

* Install below tools
  * `Node.js` (supported version is v6.10)
  * `yarn` or `npm`

### Build

* Execute below commands
  - In case of yarn
      ```sh
      $ yarn install
      $ yarn build
      ```
  - In case of npm
      ```
      $ npm install
      $ npm build
      ```

* Open below pages (under constructed)
  - index.html (top page)
  - main.html (table page)

### Directory structure

```
.
├── README.md
├── gulpfile.js
├── index.html
├── main.html
├── package.json
├── src
│   ├── assets
│   │   └── css
│   │       └── main.css
│   ├── client
│   │   └── jquery.js
│   ├── components
│   │   ├── Table.tsx
│   │   ├── Test.tsx
│   │   ├── TextArea.tsx
│   │   └── Title.tsx
│   ├── index.tsx
│   └── types
│       ├── rc-table.d.ts
│       └── react-addons-update.d.ts
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```
