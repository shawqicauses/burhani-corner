import {EnvelopeIcon, MapIcon, PhoneIcon} from "@heroicons/react/24/outline"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function Contact() {
  const links = [
    {
      icon: <PhoneIcon />,
      label: "Call us now",
      to: "tel:34141831"
    },
    {
      icon: <EnvelopeIcon />,
      label: "info@burhanicorner.com",
      to: "mailto:info@burhanicorner.com"
    },
    {
      icon: <MapIcon />,
      label: "Block 907 - East Riffa",
      to: "https://maps.app.goo.gl/1Gw6kqncdtH5GsFY7"
    }
  ]

  return (
    <section
      id="contact"
      className={classes(
        "flex flex-col items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-12 xl:py-12"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex flex-col items-start justify-start gap-5",
          "lg:items-center lg:justify-center lg:gap-0"
        )}>
        <ul
          className={classes(
            "grid h-full w-full grid-cols-1 items-center justify-items-center",
            "gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          )}>
          {links.map(({icon, label, to}) => (
            <li
              key={label}
              className={classes(
                "flex w-full cursor-pointer items-center justify-center p-7",
                "border-spacing-2 rounded-md border-2 border-solid hover:border-primary"
              )}>
              <a
                href={to}
                className={classes(
                  "flex flex-row items-center justify-center gap-5",
                  "text-lg font-medium leading-none text-zinc-900 lg:text-xl"
                )}>
                <span className={classes("h-6 w-6 text-primary")}>{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
