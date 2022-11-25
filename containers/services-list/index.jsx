import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function ServicesList() {
  const list = [
    "Shower enclosures",
    "Glass floors and walk-ways",
    "Glass and mirror ceilings",
    "LED back-lit mirrors",
    "Glass signage",
    "Custom glass and steel tables",
    "Aluminum doors and windows",
    "Curtain wall and spider glazing",
    "Sky-lights and glass extensions",
    "Fire rated systems",
    "Glass and steel handrails",
    "Automatic doors",
    "ACP and steel cladding",
    "Metal fabrications",
    "Bespoke picture and artwork framing",
    "Fabric and momentos framing or preservation",
    "Custom shape and framed mirrors",
    "Decorative and antique mirror designs",
    "Frame-less glass doors and partitions",
    "Digitally printed and ceramic coated glass",
    "Back-painted glass walls and splash-backs",
    "CNC design doors and partitions",
    "Glass, aluminum, or steel pergolas",
    "Urgent assistance, glass breakage of faulty accessories",
    "Glass furniture, shelves, cabinets, counters, and display boxes",
    "Variety of glasses, colored, tinted, reflective, low iron, frosted, and patterned",
    "Specialized glasses, curved, acoustic, jumbo, slumped, and dichroic",
    "Safety and security glasses, laminated, heat strengthen, wires, and films",
    "High performance double glazed glass (Single, Double, or Triple Silver LOW-E)"
  ]

  return (
    <section
      className={classes(
        "flex flex-row items-center justify-center",
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
            "grid border-collapse grid-cols-1 gap-4",
            "md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
          )}>
          {list.map((item) => (
            <li
              className={classes(
                "leading-sung text-lg font-medium text-zinc-700",
                "rounded-md border-2 border-zinc-100 p-5 capitalize"
              )}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
