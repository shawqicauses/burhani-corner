import Link from "next/link"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function WhatDoWeDo() {
  return (
    <section
      id="what-do-we-do"
      className={classes(
        "flex flex-row items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-12 xl:py-12"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex flex-col items-start justify-start gap-5"
        )}>
        <h2
          className={classes(
            "max-w-xl-2 text-center text-xl-2 font-extra-bold leading-none tracking-tight",
            "text-zinc-900 md:max-w-xl-3 md:text-xl-3 xl:max-w-xl-4 xl:text-xl-4"
          )}>
          Who do we do
        </h2>
        <div className={classes("flex flex-col gap-3")}>
          <p className={classes("text-lg text-zinc-500 md:text-xl")}>
            We work hand-in-hand with architects and designers to provide
            architectural solutions and decorative ideas that not only fit the
            design concept but enhance it in every way we can think of.
          </p>
          <p className={classes("text-lg text-zinc-500 md:text-xl")}>
            Besides manufacturing and supplying picture frames of premium
            quality, we also specialize in processing, fabricating, supplying &
            installing all kinds of glass, aluminum, and steelworks.{" "}
            <Link href="/services">
              <a href="#place-holder" className={classes("text-primary")}>
                View our products and services
              </a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
