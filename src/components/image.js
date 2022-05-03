import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = ({style}) => {
  return <StaticImage
      src="../images/enonic-xp.png"
      alt="Enonic logo"
      placeholder="blurred"
      layout="fixed"
      width={style.width}
  />
}

export default Image
