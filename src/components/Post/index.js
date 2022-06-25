import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <div>

            <div className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://i.pinimg.com/originals/ea/08/50/ea0850acf6fe14e5ed131989f35ee955.gif" />

                    <p>nagato_Pain</p>
                </div>


                    <FiMoreHorizontal />
            </div>

            <div className="img-post" >
                <img src="https://nerdhits.com.br/wp-content/uploads/2020/01/tumblr_pllcncpEVf1upcvga_640.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>61 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span><b>nagato_Pain</b></span> Conhecer a dor nos ajuda a crescer, a amadurecer. E crescer significa ser capaz de pensar e tomar suas próprias decisões.
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        
        </div>

    )
}