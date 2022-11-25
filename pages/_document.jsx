// DONE REVIEWING
import Document, {Head, Html, Main, NextScript} from "next/document"
import {classes} from "../lib/utils"

const font = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

// DONE REVIEWING: Have been reviewed
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={classes("scroll-smooth")}>
        <Head>
          <link href={font} rel="stylesheet" />
        </Head>
        <body
          className={classes(
            "overflow-y-auto overflow-x-hidden",
            "bg-zinc-50 font-poppins text-zinc-500"
          )}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
