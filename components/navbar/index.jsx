import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import {classes} from "../../lib/utils"
import Logo from "../logo"

// DONE REVIEWING: Have been reviewed
export default function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (window.scrollY === 0) setIsScrolled(false)
    window.addEventListener("scroll", () => setIsScrolled(true))
  }, [])

  const links = [
    {name: "Home", to: "/"},
    {name: "Services", to: "/services"},
    {name: "Projects", to: "/gallery"}
  ]

  return (
    <nav
      className={classes(
        "fixed top-0 left-0 z-10 transition-all duration-200",
        "flex w-full items-center justify-center py-4",
        isScrolled ? "bg-white" : "bg-transparent"
      )}>
      <div
        className={classes(
          "container flex flex-row flex-wrap items-center justify-center gap-5",
          "mx-auto px-5 sm:gap-10 lg:justify-between xl:max-w-xl-7"
        )}>
        <Logo />
        <ul
          className={classes(
            "fixed top-0 left-0 z-10 translate-x-full transform gap-5 lg:relative",
            "flex h-screen w-full flex-col flex-wrap items-center justify-center p-5 lg:p-0",
            "bg-zinc-50 lg:h-max lg:w-max lg:translate-x-0 lg:flex-row lg:bg-transparent"
          )}>
          {links.map((link) => (
            <li
              key={link.name}
              className={classes(
                "flex h-auto w-full cursor-pointer flex-col flex-wrap",
                "transform items-center justify-center lg:h-max lg:w-max"
              )}>
              <a
                href={link.to}
                className={classes(
                  "flex w-full flex-col items-center justify-center transition-all",
                  "text-base font-medium uppercase leading-none tracking-widest no-underline",
                  "rounded-md border-2 border-slate-100 p-5 text-zinc-900 outline-none",
                  "hover:text-primary lg:w-max lg:border-0 lg:border-transparent",
                  isScrolled || router.pathname === "/gallery"
                    ? "lg:text-zinc-900"
                    : "lg:text-zinc-100"
                )}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
