import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 10.67C2 5.882 5.84 2 10.578 2c2.275 0 4.456.913 6.065 2.54a8.717 8.717 0 012.512 6.13c0 4.788-3.84 8.67-8.577 8.67C5.84 19.34 2 15.458 2 10.67zm17.013 6.984l2.555 2.062h.044c.517.523.517 1.37 0 1.892a1.314 1.314 0 01-1.871 0l-2.12-2.43a1.082 1.082 0 010-1.524.986.986 0 011.392 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SearchIcon