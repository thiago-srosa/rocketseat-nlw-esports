import { View, Image, FlatList } from 'react-native'

import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'

import { GAMES } from '../../utils/games'

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title='Encontre seu duo'
          subTitle="Selecione o game que deseja jogar..."
        />


        <FlatList
          contentContainerStyle={styles.contentList}
          data={GAMES}
          keyExtractor={game => game.id}
          renderItem={((game) => <GameCard
            data={game.item} />)}
          horizontal
          showsHorizontalScrollIndicator={false}

        />



      </View>
    </>
  )
}