import '../../App.css';

function MainContent({ arrayBlock }){


    return (
        <main className="main">
            {
                arrayBlock.map((item, index ) => (
                    <div
                        className="shop-title"
                        key={index}>
                        <p>{item.nameItem}</p>
                        <p>{item.model}</p>
                    </div>
                ))
            }
        </main>
    )
}

export default MainContent;
