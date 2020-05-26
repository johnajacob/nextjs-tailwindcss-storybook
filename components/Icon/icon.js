import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ color, size, icon, display }) => {
  const styles = {
    svg: {
      display,
      verticalAlign: 'middle',
    },
    path: {
      stroke: color,
    },
  }

  return (
    <svg
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        style={styles.path}
        d={icon}
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
}

Icon.defaultProps = {
  size: 24,
  color: '#000000',
  display: 'inline-block',
}

export default Icon
