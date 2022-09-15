import { View, Text, ViewProps } from "react-native";

import { styles } from './style'

interface IHeadingProps extends ViewProps {
  title: string,
  subTitle: string,
}

export function Heading(props: IHeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title}
      </Text>
       <Text style={styles.subTitle}>
        {props.subTitle}
      </Text>

    </View>
  )
}