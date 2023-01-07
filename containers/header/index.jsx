import {DocumentArrowDownIcon} from "@heroicons/react/24/outline"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function Header() {
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
        <video
          autoPlay
          loop
          muted
          className={classes("absolute inset-0 h-full w-full object-cover")}>
          <source src="/video.mp4" />
        </video>
        <div className={classes("absolute inset-0 bg-zinc-900/80")} />
        <div className={classes("relative flex flex-col place-items-center")}>
          <h1
            className={classes(
              "max-w-xl-2 text-center text-xl-4 font-extra-bold leading-[1.15] tracking-tight",
              "mb-5 text-white md:max-w-xl-3 md:text-xl-5 xl:max-w-xl-4 xl:text-xl-6"
            )}>
            We are the smart solution for your{" "}
            <span className={classes("text-primary")}>places</span>.
          </h1>
          <p
            className={classes("max-w-xl-3 text-center text-lg text-zinc-300")}>
            We work hand-in-hand with architects and designers to provide
            architectural solutions and decorative ideas that not only fit the
            design concept.
          </p>
          <a
            href="./burhani-profile.pdf"
            target="blank"
            download="burhani-profile"
            className={classes(
              "mt-10 flex cursor-pointer items-center justify-center gap-3 py-5 px-8 transition-all",
              "rounded-md bg-primary text-base font-medium leading-none text-white outline-none md:text-lg",
              "ring-2 ring-transparent ring-offset-4 ring-offset-slate-50/0 hover:-translate-y-1 focus:translate-y-0.5",
              "focus:translate-y-0 focus:ring-primary focus:ring-offset-zinc-900 sm:focus:translate-y-0.5"
            )}>
            <DocumentArrowDownIcon
              strokeWidth={1.5}
              className={classes("h-6 w-6 stroke-current")}
            />
            <span>Company Profile</span>
          </a>
        </div>
      </div>
    </header>
  )
}
