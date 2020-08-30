import React from 'react'
import { Circle } from './Circle'
import { Square } from './Square'
export const ColorWheel = (p: {
  width: number
  hsv: {
    h: number
    s: number
    v: number
  }
  setHsv: (hsv: { h: number; s: number; v: number }) => void
}) => {
  const circleWidth = p.width
  const squareWidth = Math.floor(circleWidth * 0.5)
  const left = circleWidth * 0.25

  return (
    <div style={{ position: 'relative' }}>
      <Circle
        size={circleWidth}
        numberOfSectors={360}
        hue={p.hsv.h}
        setHue={(hue) => p.setHsv({ ...p.hsv, h: hue })}
      />
      <div style={{ position: 'absolute', left: left, top: left }}>
        <Square
          size={squareWidth}
          hue={p.hsv.h}
          s={p.hsv.s}
          v={p.hsv.v}
          updateSV={(s, v) => p.setHsv({ ...p.hsv, s: s, v: v })}
        />
      </div>
    </div>
  )
}
