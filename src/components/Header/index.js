import React from 'react';
import './style.css';
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdHomeFilled} from 'react-icons/md'
import { TbSquarePlus} from 'react-icons/tb'
import { RiMessengerLine} from 'react-icons/ri'
import { ImCompass2} from 'react-icons/im'

import Logo from '../../assets/img/Instagram_logo.png' 
import User from '../../assets/img/foto.png'

const Home = () => {
    return(
        <div className='header-container' >
            <div className='header-body'>
                <div className='header-logo'>
                    <img src={Logo} alt="Logo instagram" />
                </div>

                <div className='header-pesquisa'>
                    <input type="text" placeholder="Pesquisar" />
                 </div>

                <div>
                    <MdHomeFilled size={28} className='header-icons' />
                    <RiMessengerLine size={28} className='header-icons' />
                    <TbSquarePlus size={28} className='header-icons' />
                    <ImCompass2 size={28} className='header-icons' />
                    <IoMdHeartEmpty size={28} className='header-icons' />
                    <img src={User} className="header-foto" alt="foto do usuário" />
                </div>
            </div>
        </div>
        )
    }
    
    export default Home;