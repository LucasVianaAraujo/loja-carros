import './index.scss'

import Header from "../../components/Header"
import Footer from '../../components/Footer'

export default function Home() {

    return (
        <div>
            <Header />
            <div className="Alinhador">
                <div className='CaixaSobre'>
                    <div className="LadoEsquerdo">
                        <h1>Sobre Nós</h1>
                    </div>
                    <div className="LadoDireito">
                        <h3>Esta plataforma foi desenvolvida com o propósito de facilitar a sua vida e oferecer uma forma prática e intuitiva de entender melhor os custos reais do seu veículo.
                            Aqui, você pode utilizar nossa calculadora inteligente para estimar seus gastos de forma simples e rápida — basta inserir as informações sobre o seu carro, como consumo, manutenção, impostos e outros detalhes que desejar acompanhar.</h3>

                        <h3>Com base nos dados informados, o sistema ajudará você a visualizar o custo total de uso do seu automóvel, permitindo uma análise mais completa sobre quanto ele realmente representa no seu orçamento.</h3>

                        <h3>Nosso objetivo é proporcionar mais transparência, controle e consciência financeira para que você possa tomar decisões mais informadas sobre o seu veículo.</h3>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
