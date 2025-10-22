import './index.scss'

import { Link } from 'react-router-dom'

import car from '../../assets/images/carro-esporte.png'

export default function Header() {
    return (
        <div className="FundoCalculadoraAuto">
            <div className="LadoEsquerdo">
                <img src={car} width={100} height={100} alt="" />
                <h1>Calculadora Auto</h1>
            </div>
            <div className="LadoDireito">
                <Link to={'/'}>
                    <button>Calcular</button>
                </Link>
                <Link to={'/About'}>
                    <button>Sobre</button>
                </Link>
            </div>
        </div>
    )
}