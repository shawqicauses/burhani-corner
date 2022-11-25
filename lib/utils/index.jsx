// DONE REVIEWING: Have been reviewed
export const classes = (...args) => args.filter(Boolean).join(" ")
export const url = (string) =>
  !/^(https?:)?\/\//.test(string) ? string : `https:${string}`
export {default as variants} from "./motion-variants"
