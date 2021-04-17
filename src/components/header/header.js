import '../../App.css';

function Header({onChangeValue}){

    return (

            <header className={"header"}>
                <input type="text"
                       className="search-input"
                       onChange={onChangeValue}
                />
            </header>
    )
}

export default Header;
