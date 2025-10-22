import car from '../../assets/images/camaro.png'

import './index.scss'

import Header from "../../components/Header"
import Footer from '../../components/Footer'

import { useEffect, useState } from 'react'

export default function Home() {
    const [valor, setValor] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [parcelas, setParcelas] = useState(0);
    const [resultado, setResultado] = useState(0);

    function CalcularParcelas() {
        const ValorCarro = valor;
        const DescontoCarro = desconto;
        const ParcelasCarro = parcelas;

        const Resultado = (ValorCarro - DescontoCarro) / ParcelasCarro
        setResultado(Resultado)
    }

    function Enviar(e) {
        if (e.key === 'Enter') {
            CalcularParcelas()
        }
    }

    return (
        <div>
            <Header />
            <div className="Alinhador">
                <div className='Caixa'>
                    <div className="LadoEsquerdo">
                        <img src={car} alt="" />
                    </div>
                    <div className="LadoDireito">
                        <h3>Informações</h3>
                        <label>Valor do Carro:</label>
                        <input type="text" onKeyUp={Enviar} value={valor} onChange={e => setValor(e.target.value)} />
                        <label>Desconto:</label>
                        <input type="text" onKeyUp={Enviar} value={desconto} onChange={e => setDesconto(e.target.value)} />
                        <label>Parcelas:</label>
                        <input type="text" onKeyUp={Enviar} value={parcelas} onChange={e => setParcelas(e.target.value)} />
                        <button onClick={CalcularParcelas}>Calcular</button>
                        <h2>Parcelas de R${resultado ? resultado : '...'}</h2>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
