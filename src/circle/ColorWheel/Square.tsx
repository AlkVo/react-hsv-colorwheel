import React, { useState } from 'react'
import hsvToRgb from './hsvToRgb'

export const Square = (p: {
  size: number
  hue: number
  s: number
  v: number
  updateSV: (s: number, v: number) => void
}) => {
  const per = p.size / 100

  const [movable, setMovable] = useState(false)

  const renderPointer = () => {
    return (
      <circle
        cx={per * p.s}
        cy={per * p.v}
        r={per * 5}
        stroke='#090e0e'
        strokeWidth='1'
        fill='transparent'
      />
    )
  }

  const renderBlocks = () => {
    return Array(per < 1 ? p.size : 100)
      .fill(0)
      .map((x, indexX) => {
        return Array(per < 1 ? p.size : 100)
          .fill(0)
          .map((y, indexY) => {
            return (
              <rect
                key={(indexX + 1) * (indexY + 1)}
                x={per < 1 ? indexX : indexX * per}
                y={per < 1 ? indexY : indexY * per}
                width={per < 1 ? 1 : per}
                height={per < 1 ? 1 : per}
                fill={hsvToRgb(
                  p.hue,
                  Math.floor(indexX / per),
                  Math.floor(indexY / per)
                )}
              />
            )
          })
      })
  }

  const handlePress = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setMovable(true)
    p.updateSV(
      (event.clientX - event.currentTarget.getBoundingClientRect().left) / per,
      (event.clientY - event.currentTarget.getBoundingClientRect().top) / per
    )
  }
  const handleMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (movable) {
      p.updateSV(
        (event.clientX - event.currentTarget.getBoundingClientRect().left) /
          per,
        (event.clientY - event.currentTarget.getBoundingClientRect().top) / per
      )
    }
  }
  const handleUp = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setMovable(false)
  }
  return (
    <svg
      width={p.size}
      height={p.size}
      onMouseDown={handlePress}
      onMouseMove={handleMove}
      onMouseUp={handleUp}>
      {renderBlocks()}
      {renderPointer()}
    </svg>
  )
}
