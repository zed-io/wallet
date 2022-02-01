import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export function MenuRings() {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M27 13.0789C27 8.07544 22.9246 4 17.9211 4C14.1281 4 10.9 6.3 9.52807 9.60877C6.3 10.9807 4 14.2088 4 17.9614C4 22.9649 8.07544 27.0404 13.0789 27.0404C16.8719 27.0404 20.1 24.7404 21.4719 21.4316C24.6597 20.0596 27 16.8316 27 13.0789ZM13.0789 24.7807C9.32632 24.7807 6.25965 21.714 6.25965 17.9614C6.25965 15.8228 7.26842 13.886 8.8421 12.6351C8.8421 12.7965 8.8421 12.9579 8.8421 13.0789C8.8421 18.0825 12.9175 22.1579 17.9211 22.1579C18.1228 22.1579 18.2842 22.1579 18.486 22.1579C17.1947 23.7719 15.2579 24.7807 13.0789 24.7807ZM19.6965 19.6561C19.1316 19.8175 18.5263 19.8982 17.9211 19.8982C14.1684 19.8982 11.1018 16.8316 11.1018 13.0789C11.1018 12.4737 11.1825 11.9088 11.3439 11.3842C11.9088 11.2228 12.514 11.1421 13.1193 11.1421C16.8719 11.1421 19.9386 14.2088 19.9386 17.9614C19.8982 18.5667 19.8175 19.1316 19.6965 19.6561ZM22.1579 18.4053C22.1579 18.2439 22.1579 18.0825 22.1579 17.9614C22.1579 12.9579 18.0825 8.88246 13.0789 8.88246C12.8772 8.88246 12.7158 8.88246 12.514 8.88246C13.7649 7.26842 15.7018 6.25965 17.8807 6.25965C21.6333 6.25965 24.7 9.32632 24.7 13.0789C24.7 15.2579 23.6912 17.1544 22.1579 18.4053Z"
        fill="#B4B9BD"
      />
    </Svg>
  )
}

export default React.memo(MenuRings)