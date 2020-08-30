import React, { useState, Fragment } from 'react'
import { ColorWheel } from './circle/ColorWheel'
import hsvToRgb from './circle/ColorWheel/hsvToRgb'

const App = () => {
  const [hsv, setHsv] = useState({ h: 50, s: 50, v: 50 })
  console.log(hsv)
  console.log('背景色', hsvToRgb(hsv.h, hsv.s, hsv.v))

  return (
    <Fragment>
      <ColorWheel width={120} hsv={hsv} setHsv={setHsv} />
      <div
        style={{
          width: 50,
          height: 50,
          background: hsvToRgb(hsv.h, hsv.s, hsv.v),
        }}></div>
    </Fragment>
  )
}

export default App
