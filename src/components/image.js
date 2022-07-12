import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = ({style}) => {
  return <StaticImage style={style} src="../images/enonic-xp.png" alt="Enonic XP" />
}

export default Image
