import Card from '../Card'
import './Body.css'

const Body = () => {
    function getCards() {
        const cards = []

        for(let i = 0; i < 5; i++) {
            cards.push(<Card />)
        }

        return cards
    }

    return (
        <section className="App-body">
            {getCards()}
        </section>
    )
}

export default Body