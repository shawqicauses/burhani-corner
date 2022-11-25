import {motion} from "framer-motion"
import Image from "next/image"
import {useEffect, useRef, useState} from "react"
import designs from "../../components/photos"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function Designs() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    const {scrollWidth, offsetWidth} = carousel.current
    setWidth(scrollWidth - offsetWidth)
  }, [])

  return (
    <section
      id="designs"
      className={classes(
        "flex flex-row items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-12 xl:py-12"
      )}>
      <motion.div
        ref={carousel}
        whileTap={{cursor: "grabbing"}}
        className={classes("cursor-grab overflow-hidden")}>
        <motion.div
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          className={classes("flex items-center justify-center gap-5")}>
          {designs.map((design) => (
            <motion.div
              key={design.src}
              className={classes(
                "relative aspect-square w-40 flex-none overflow-hidden",
                "rounded-md bg-zinc-100 sm:w-80 sm:rounded-md"
              )}>
              <Image
                src={design.src}
                alt="Designs Photo"
                layout="fill"
                objectFit="cover"
                className={classes("pointer-events h-full w-full")}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
