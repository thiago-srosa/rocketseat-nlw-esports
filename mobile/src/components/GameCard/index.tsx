import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface IGameCard {
  id: string,
  name: string,
  ads: string,
  cover: ImageSourcePropType
}

interface IGameCardProps extends TouchableOpacityProps {
  data: IGameCard
}

export const GameCard = ({ data, ...rest }: IGameCardProps) => {
  return (<>
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={data.cover}
        style={styles.cover}
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >

          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text style={styles.ads}>
            {data.ads} anúncios
          </Text>


        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  </>)
}