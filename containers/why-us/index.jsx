import Image from "next/image"
import Link from "next/link"
import {classes} from "../../lib/utils"
import designEight from "../../public/design-eight.png"
import designNine from "../../public/design-nine.png"
import designSeven from "../../public/design-seven.png"
import designTen from "../../public/design-ten.png"

// DONE REVIEWING: Have been reviewed
export default function WhyUs() {
  const designs = [designSeven, designEight, designNine, designTen]
  return (
    <article
      id="why-us"
      className={classes(
        "flex flex-row items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-12 xl:py-12"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-10"
        )}>
        <div className={classes("flex flex-col items-start justify-center")}>
          <h2
            className={classes(
              "max-w-xl-2 text-center text-xl-2 font-extra-bold leading-none tracking-tight",
              "mb-10 text-zinc-900 md:max-w-xl-3 md:text-xl-3 xl:max-w-xl-4 xl:text-xl-4"
            )}>
            Why us
          </h2>
          <p className={classes("mb-5 text-lg text-zinc-500 md:text-xl")}>
            Burhani offers an enormous range of materials and products for your
            interior and exterior needs. Our goals are to match the expectations
            of our customers. We achieve this by putting in the time to have
            technical expertise and knowledge in the field.
          </p>
          <p className={classes("text-lg text-zinc-500 md:text-xl")}>
            We ensure that our prices are competitive and fair. There are no
            hidden costs. We can always work around our customers budgets and
            educate them with different options so they can make informed
            decisions.{" "}
            <Link href="/gallery">
              <a href="#place-holder" className={classes("text-primary")}>
                View our projects
              </a>
            </Link>
          </p>
        </div>
        <div
          className={classes(
            "grid grid-cols-1 gap-5 sm:grid-cols-1",
            "md:grid-cols-3 lg:grid-cols-2"
          )}>
          {designs.map((design) => (
            <div
              key={design.src}
              className={classes("relative aspect-square w-full")}>
              <Image
                src={design.src}
                alt="Projects Photo"
                layout="fill"
                objectFit="cover"
                className={classes("rounded-md")}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
