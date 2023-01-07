import Link from "next/link"
import Logo from "../../components/logo"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function Footer() {
  const navigation = [
    {name: "Home", to: "/"},
    {name: "Products", to: "/"},
    {name: "Projects", to: "/"}
  ]

  const contact = [
    {name: "17 773 851", to: "tel:17773851", style: {fontFamily: "monospace"}},
    {name: "34 141 814", to: "tel:34141831", style: {fontFamily: "monospace"}},
    {name: "33 375 786", to: "tel:33375786", style: {fontFamily: "monospace"}}
  ]

  const sections = [
    {name: "Contact", to: "contact"},
    {name: "Who are we", to: "who-are-we"},
    {name: "What do we do", to: "what-do-we-do"},
    {name: "Why us", to: "why-us"}
  ]

  const data = [
    {name: "Call us now", list: contact},
    {name: "Navigation", list: navigation},
    {name: "Sections", list: sections}
  ]

  return (
    <footer
      id="footer"
      className={classes(
        "flex flex-row items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-12 xl:py-12"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex flex-col items-center justify-center gap-16"
        )}>
        <div
          className={classes(
            "grid grid-cols-1 items-start justify-between gap-10",
            "w-full md:grid-cols-2 lg:grid-cols-4 lg:gap-20"
          )}>
          <div className={classes("flex flex-col items-start justify-start")}>
            <Link href="/">
              <a
                href="#place-holder"
                className={classes(
                  "flex flex-col items-start justify-center gap-5 text-zinc-900",
                  "mb-5 text-base font-medium uppercase leading-none tracking-widest"
                )}>
                <Logo />
                Burhani Corner
              </a>
            </Link>
            <div className={classes("flex items-center justify-center gap-3")}>
              <a href="#facebook" className={classes("text-zinc-400")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={classes("w-5 fill-current")}>
                  <path
                    d={[
                      "M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56",
                      "89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36",
                      "51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    ].join(".")}
                  />
                </svg>
              </a>
              <a href="#instagram" className={classes("text-zinc-400")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={classes("w-5 fill-current")}>
                  <path
                    d={[
                      "M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93",
                      "34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90",
                      "8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                    ].join(".")}
                  />
                  <path
                    d={[
                      "M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256",
                      "74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                    ].join(" ")}
                  />
                </svg>
              </a>
            </div>
          </div>
          {data.map((dataItem) => {
            return (
              <div
                key={dataItem.name}
                className={classes("flex flex-col gap-5")}>
                <h3
                  className={classes(
                    "text-sm font-medium leading-none text-zinc-400 transition-all",
                    "uppercase tracking-widest hover:text-zinc-900 hover:duration-200"
                  )}>
                  {dataItem.name}
                </h3>
                <ul className={classes("flex flex-col gap-5")}>
                  {dataItem.list.map((listItem) => (
                    <li key={listItem.name}>
                      <a
                        href={`#${listItem.to.toLowerCase()}`}
                        style={{
                          ...listItem.style,
                          fontWeight: Number(listItem.name.replaceAll(" ", ""))
                            ? 500
                            : 400
                        }}
                        className={classes(
                          "text-base uppercase leading-none tracking-widest",
                          "text-zinc-500 transition-all hover:text-zinc-900"
                        )}>
                        {listItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <hr className={classes("w-full border border-zinc-100")} />
        <div
          className={classes(
            "flex flex-col items-start justify-center gap-5",
            "w-full md:flex-row md:items-center lg:gap-10"
          )}>
          <div className={classes("flex flex-col items-center justify-center")}>
            <p
              className={classes(
                "mb-3 text-base font-medium leading-none",
                "uppercase tracking-widest text-zinc-400"
              )}>
              &copy; 2022 - All Rights Reserved
            </p>
            <p
              className={classes(
                "flex items-center justify-start gap-5 text-zinc-400",
                "text-base font-medium uppercase leading-none tracking-widest"
              )}>
              Developed By
              <a
                href="https://omq.digital"
                target="blank"
                className={classes("w-7")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 221.11 381.59"
                  className={classes("fill-zinc-900")}>
                  <path
                    d={[
                      "M159,44.37q-2.43-7-7.6-9.74t-12,.11q-5.78,2.43-7,6.54a13.07,13.07,0,0,0,.82,9A25",
                      "68,25.68,0,0,0,139.3,59l-8,6.09,2.13,5.06L160.5,51.92l1.32-.9Zm-13.8,10.08a17.57,17",
                      "57,0,0,1-5.4-6.75q-2.07-4.92,2.84-7,5.93-2.51,8.85,4.44a23.2,23.2,0,0,1,1.18,3.59Z"
                    ].join(".")}
                  />
                  <path
                    d={[
                      "M192.89,187.46c-12.57-11.85-20.19-19.12-26.11-25.14a.91.91,0,0,0,.05-.21V107.69c8.33,8.58,19,19",
                      "54,25.54,26.44v30l14.93-12.61V125.4l-14.93-14.29c-6.09-5.88-16.32-15.87-24-24.7L138.22,111v74",
                      "46h0s20.45,17.92,29.47,26l-6.85,6.14-17.17,15.39c-6.19-5.54-18.37-16.43-18.37-16.63V116",
                      "94c0-.08,0-.13,0-.16l-44.62-40s-36.14,30-36.14,31.21v80.65l0,0v4.93s0,0,0,0l46.24,41.4Q85.4,239.94,80,244",
                      "74C57.89,225,50.68,216.17,28.61,196.41V126.63c0-.27-28.61,22.63-28.61,23.89v69.53c0,.1,61,56.55,61,56",
                      "55s26.87-23.9,38.15-34c5.64,5.05,9.59,9.07,16.92,15.15l-9.61,8.62L86.89,283.86l0,.05v15.16h-.06v43",
                      "5c0,.08,0,.13,0,.16l43.39,38.85c.58.52,34.8-27.06,34.8-28.33V252.17c0-.07,0-.13,0-.15v0h0c-5",
                      "31-4.76-10.61-7.66-15.92-12.41,5.94-5.33,65.24-59.36,71.75-65.21l.33-.29V161.2ZM96.7,190.88,73.15,169",
                      "8V119.59L96.7,140.67Zm39.66,146.75-21-18.78V269.41l6-5.39c5,4.46,10,7.42,15,11.88Z"
                    ].join(".")}
                  />
                  <polygon points="21.53 59.41 44.91 80.34 68.28 59.41 46.38 39.8 67.46 20.93 44.08 0 20.7 20.93 42.61 40.54 21.53 59.41" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
