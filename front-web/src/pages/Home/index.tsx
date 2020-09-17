import React from 'react';
import './styles.css'
import {ReactComponent as IconeSeta} from '../../img/iconeb.svg';
import {ReactComponent as Jogador} from '../../img/jogador.svg';
const Home = () => {


    return (
        <div className="home-container">
            
            <div className="home-text">
                <h1 className="home-text-title">
                    Quais jogos você mais gosta?
                </h1>

                <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!
                </h3>

                <div className="home-actions">
                    <button className="home-btn">
                    QUERO SABER QUAIS SÃO
                    </button>
                <div className="home-btn-icon">
                        <IconeSeta/>
                </div>
                </div>

               
            </div>
            <Jogador className="home-image"/>
        </div>
        
    );
};


export default Home;