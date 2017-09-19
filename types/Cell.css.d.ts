// typings/resource.d.ts
declare module '*.css' {
  const classes: { [className: string]: string }; // css-moduleの結果をstring型のobjectに
  // export = classes
  // import style from "./foo.css"で読み込みたいなら下記（後述）
  export default classes;
}
