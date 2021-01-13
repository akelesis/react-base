import './Header.css'

const Header = () => {
    const options = ["Home", "Fale Conosco", "Produtos"]


    return (
        <header className="App-header">
            <ul>
            {options.map((option, index) => {return <li key={index}>{option}</li>})}
            </ul>
        </header>
    )
}

export default Header