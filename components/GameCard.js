export default function GameCard({ game }) {
    return (
        <li key={game.name}>
            {game.name} - {game.type}
        </li>
    )
}