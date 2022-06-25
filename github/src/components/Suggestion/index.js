import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/gabrieldiasss/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://i.pinimg.com/originals/4a/91/b6/4a91b612f1e3035d38bcd1afaf579961.gif`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>NoveCaudas</span>
                        <p>Naruto Uzumaki</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                     <div className="infos-suggestion">
                        <img src={`https://gifs.eco.br/wp-content/uploads/2021/07/gifs-do-sasuke-uchiha-4.gif`} />
    
                        <div className="info-suggestion" >
                            <span>SasukeUchiha</span>
                            <p>Seguido por sakura_haruno</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>

                    <div className="infos-suggestion">
                        <img src={`https://c.tenor.com/Z8wCWZqyAWAAAAAM/itachi.gif`} />
    
                        <div className="info-suggestion" >
                            <span>ItachiUchiha</span>
                            <p>Seguido por SasukeUchiha</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>

                    <div className="infos-suggestion">
                        <img src={`https://www.gifcen.com/wp-content/uploads/2021/07/obito-uchiha-gif-3.gif`} />
    
                        <div className="info-suggestion" >
                            <span>TobiObito</span>
                            <p>Seguido por UchihaMadara</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>

                    <div className="infos-suggestion">
                        <img src={`https://i.pinimg.com/originals/9b/d9/0e/9bd90e161d672ce35b26772893df548c.gif`} />
    
                        <div className="info-suggestion" >
                            <span>Deidara</span>
                            <p>Seguido por ItachiUchiha</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
               

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}