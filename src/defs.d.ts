declare module "*.module.scss" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.png" {
  const url: import("./flavours").URLString;
  export default url;
}
