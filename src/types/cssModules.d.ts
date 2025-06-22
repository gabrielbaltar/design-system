// src/types/cssModules.d.ts
declare module '*.module.css' {
  const classes: { [className: string]: string };
  export default classes;
}

// Se usar SCSS/SASS, já declare também:
declare module '*.module.scss' {
  const classes: { [className: string]: string };
  export default classes;
}