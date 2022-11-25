import Image from "next/image"
import designs from "../../components/photos"
import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function ProductsList() {
  return (
    <section
      className={classes("my-28 flex flex-col place-items-center py-32")}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        )}>
        {designs.map((photo) => (
          <div className={classes("relative aspect-square w-full")}>
            <Image
              src={photo.src}
              alt="Product"
              layout="fill"
              className={classes("rounded-md")}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
