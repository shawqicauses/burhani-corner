import {classes} from "../../lib/utils"

// DONE REVIEWING: Have been reviewed
export default function Logo() {
  const paths = {
    1: "M138.68 7.7262V60.6337L170.406 28.9201C161.279 19.94 150.601 12.7285 138.68 7.7262Z",
    2: "M170.335 28.9208L138.61 60.6344V192.348C174.681 177.261 200 141.65 200 100.075C200.074 72.1843 188.737 47.0183 170.335 28.9208Z",
    3: "M130.591 4.7848C120.943 1.69414 110.711 0 100.039 0C88.7766 0 77.9553 1.91163 67.8726 5.29991V131.347L130.591 68.6527V4.7848Z",
    4: "M67.8726 131.347V194.7C77.9553 198.163 88.7766 200 100.039 200C110.711 200 120.943 198.306 130.591 195.215V68.6526L67.8726 131.347Z",
    5: "M59.8437 8.466C24.5856 23.9136 0 59.0899 0 100.001C0 127.451 11.0446 152.245 28.9313 170.274L59.8437 139.367V8.466Z",
    6: "M28.9287 170.347C37.7576 179.252 48.2125 186.533 59.8411 191.609V139.44L28.9287 170.347Z"
  }

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={classes("h-12 w-12 fill-current sm:h-16 sm:w-16")}>
      <path d={paths[1]} className="fill-primary" />
      <path d={paths[2]} className="fill-secondary" />
      <path d={paths[3]} className="fill-primary" />
      <path d={paths[4]} className="fill-secondary" />
      <path d={paths[5]} className="fill-primary" />
      <path d={paths[6]} className="fill-secondary" />
    </svg>
  )
}
