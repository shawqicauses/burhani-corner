import {PhoneIcon} from "@heroicons/react/24/outline"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function Call() {
  return (
    <a
      href="tel:34141831"
      className={classes(
        "fixed right-5 bottom-5 flex items-center justify-center bg-primary text-zinc-50",
        "rounded-md p-3 transition-all duration-200 hover:bg-zinc-50 hover:text-primary"
      )}>
      <PhoneIcon className={classes("h-6 w-6 stroke-current transition-all")} />
    </a>
  )
}
