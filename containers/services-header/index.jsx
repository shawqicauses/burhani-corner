import Image from "next/image"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function ServicesHeader() {
  return (
    <header
      className={classes(
        "relative flex items-center justify-center overflow-hidden",
        "mb-12 py-32 sm:py-40 lg:mb-20 lg:py-48 xl:mb-[5.75rem] xl-2:py-56"
      )}>
      <div
        className={classes(
          "container mx-auto h-full px-5 pt-20 pb-16 xl-2:max-w-xl-7",
          "flex flex-col items-start justify-start md:items-center md:justify-center"
        )}>
        <Image
          src="https://images.pexels.com/photos/813690/pexels-photo-813690.jpeg"
          alt="Services Header"
          layout="fill"
          objectFit="cover"
        />
        <div className={classes("absolute inset-0 bg-zinc-900/80")} />
        <div className={classes("relative flex flex-col place-items-center")}>
          <h1
            className={classes(
              "max-w-xl-3 text-center text-xl-4 font-extra-bold leading-[1.15] tracking-tight",
              "mb-5 text-white md:max-w-xl-4 md:text-xl-5 xl:max-w-xl-5 xl:text-xl-6"
            )}>
            We offer different supplies of{" "}
            <span className={classes("text-primary")}>
              products and services
            </span>
          </h1>
          <p
            className={classes("max-w-xl-3 text-center text-lg text-zinc-300")}>
            We work hand-in-hand with architects and designers to provide
            architectural solutions and decorative ideas that not only fit the
            design concept.
          </p>
        </div>
      </div>
    </header>
  )
}
