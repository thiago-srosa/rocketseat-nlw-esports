import { Image, FlatList } from 'react-native'

import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useEffect, useState } from 'react'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {

  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.0.68:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <>
      <Background>
        <SafeAreaView style={styles.container}>
          <Image
            source={logoImg}
            style={styles.logo}
          />

          <Heading
            title='Encontre seu duo'
            subTitle="Selecione o game que deseja jogar..."
          />


          <FlatList
            data={games}
            contentContainerStyle={styles.contentList}
            keyExtractor={game => game.id}
            renderItem={(game) =>
              <GameCard data={game.item} onPress={() => handleOpenGame(game.item)} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        </SafeAreaView>
      </Background>

    </>
  )
}