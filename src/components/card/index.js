import React from 'react';
import './style.css';

import { TbDots} from 'react-icons/tb';
import { IoMdPaperPlane, IoMdHeartEmpty } from 'react-icons/io';
import { FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

import Foto from '../../assets/img/img_01.jpg';
import User from '../../assets/img/foto.png';

export const Card = () => {
    return(
        <div className="card-container">
            <div className="card-header-container">
                <img src={User} alt='Foto do usuário' />
                < TbDots size={18} />
            </div>
            <div className="card-foto">
                <img src={Foto} alt="foto FFXIV" />
            </div>
            <div className="card-icones">
                icones
            </div>
            <div className="card-comentarios">comentarios</div>
            <div className="card-novos-comentarios">input</div>
        </div>
    )
}

export default Card;