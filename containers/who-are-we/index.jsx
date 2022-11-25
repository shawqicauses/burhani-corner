import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function WhoAreWe() {
  return (
    <section
      id="who-are-we"
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
          Who are we
        </h2>
        <div className={classes("flex flex-col gap-3")}>
          <p className={classes("text-lg text-zinc-500 md:text-xl")}>
            Burhani Corner was founded in 1985 by Mr. Abd El-Ali Ibrahim. We
            began as a small glass and picture framing workshop that has
            developed into commercial trading. We are a full-service glass and
            aluminum company servicing the needs of construction companies,
            interior designers, and retail customers on the island.
          </p>
          <p className={classes("text-lg text-zinc-500 md:text-xl")}>
            The company has participated in many major projects as a supplier
            and a glazing contractor. We understand that working with talented,
            imaginative clients means developing custom solutions that do not
            necessarily fall under a standard product line. And we would not
            have it any other way because with, glass possibilities are only
            limited by your imagination.
          </p>
        </div>
      </div>
    </section>
  )
}
