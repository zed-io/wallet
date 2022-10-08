import * as React from 'react'
import { ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { Colors } from 'src/styles/colors'

interface Props {
  style?: ViewStyle
  color?: Colors
}

const Copy = ({ color = Colors.gray5 }: Props) => {
  return (
    <Svg width="14" height="20" viewBox="0 0 14 20" fill="none">
      <Path
        d="M4.66667 0.666504C4.04783 0.666504 3.45434 0.912336 3.01675 1.34992C2.57917 1.78751 2.33333 2.381 2.33333 2.99984V14.6665C2.33333 15.2853 2.57917 15.8788 3.01675 16.3164C3.45434 16.754 4.04783 16.9998 4.66667 16.9998H11.6667C12.2855 16.9998 12.879 16.754 13.3166 16.3164C13.7542 15.8788 14 15.2853 14 14.6665V2.99984C14 2.381 13.7542 1.78751 13.3166 1.34992C12.879 0.912336 12.2855 0.666504 11.6667 0.666504H4.66667ZM3.5 2.99984C3.5 2.69042 3.62292 2.39367 3.84171 2.17488C4.0605 1.95609 4.35725 1.83317 4.66667 1.83317H11.6667C11.9761 1.83317 12.2728 1.95609 12.4916 2.17488C12.7104 2.39367 12.8333 2.69042 12.8333 2.99984V14.6665C12.8333 14.9759 12.7104 15.2727 12.4916 15.4915C12.2728 15.7103 11.9761 15.8332 11.6667 15.8332H4.66667C4.35725 15.8332 4.0605 15.7103 3.84171 15.4915C3.62292 15.2727 3.5 14.9759 3.5 14.6665V2.99984ZM0 5.33317C1.04048e-05 4.92359 0.10783 4.52124 0.312622 4.16654C0.517415 3.81184 0.811964 3.51729 1.16667 3.3125V15.2498C1.16667 16.0234 1.47396 16.7653 2.02094 17.3122C2.56792 17.8592 3.30979 18.1665 4.08333 18.1665H11.354C11.1492 18.5212 10.8547 18.8158 10.5 19.0205C10.1453 19.2253 9.74291 19.3332 9.33333 19.3332H4.08333C3.00037 19.3332 1.96175 18.903 1.19598 18.1372C0.430207 17.3714 0 16.3328 0 15.2498V5.33317Z"
        fill={color}
      />
    </Svg>
  )
}

export default React.memo(Copy)