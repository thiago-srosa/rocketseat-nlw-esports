import React from 'react'
import { ImageBackground } from 'react-native'

import backgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles'

interface BackgroundProps {
  children: React.ReactNode
}

export const Background = (props: BackgroundProps) => {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}>
      {props.children}
    </ImageBackground>
  )
}