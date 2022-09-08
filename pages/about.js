import Head from 'next/head'
import Image from 'next/image'
import GameCard from '../components/GameCard'
import styles from '../styles/Home.module.css'



export default function About() {

  const games = [
    {
      name: 'Gaslands',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Azul',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Ticket to Ride',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Pandemic',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Catan',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Codenames',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Scrabble',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Monopoly',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Clue',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Risk',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Chess',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Checkers',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Backgammon',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Battleship',
      image: '/test/img',
      type: 'Deck Builder',
    },
    {
      name: 'Connect Four',
      image: '/test/img',
      type: 'Deck Builder',
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>

        <a href="/about" className={styles.title}>
          Back to home
        </a>


        <h1 className={styles.title}>
          List Games
        </h1>

        {/*
          Loop Through all items in the games array, render games card
          A key is important here, you need to give something that is unique so that react can keep track of the items in a list.
          */}
        <ul>
          {games.map((game) => <GameCard key={game.name} game={game} />)}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
