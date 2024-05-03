import useMeasure from 'react-use-measure'
import { useState } from 'react'
import { useTrail, animated } from '@react-spring/web'

import styles from './styles.module.css'

const fast = { tension: 200, friction: 60 }
const slow = { tension: 400, friction: 60 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function App() {
  const [trail, api] = useTrail(2, i => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }))
  const [ref, { left, top }] = useMeasure()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseMove = (e: any) => {
    if (isHovered) {
      api.start({ xy: [e.clientX - left, e.clientY - top] })
    }
  }

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} onMouseEnter={handleMouseEnter} />
        ))}
      </div>
    </div>
  )
}