import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function Recommended(props) {
  return (
    <Svg
      width={25}
      height={26}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path d="M0 25.75h25v-25H0v25z" fill="url(#prefix__pattern0)" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#prefix__image0" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default Recommended