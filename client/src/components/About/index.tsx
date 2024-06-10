import { AssetPaths } from '../../models/enum'
import './style.scss'

export const About = () => {
    return (
        <>
            <section id="about" className="main">
                <div className=" about-left">
                    <h1 className="title-smaller main">Despre noi</h1>
                    <img src={AssetPaths.AllCharactersLogo} alt="Logo" className="image" />
                </div>
                <div className="section-start section-end about-right">
                    <div>
                        Matematica cu Zeus? Shaorma Afroditei? Ce legatură pot avea matematica și mitologia greacă? Cu 34 de ani de experiență în domeniul educației, Aida Frujină, profesor MERITO, a perfecționat arta predării interactive, dezvoltând un stil unic de „învățare prin poveste”. Și-a propus ca cei mici nu doar sã participe la o oră de curs obișnuită, ci să fie purtați în nenumărate lumi de poveste, perioade istorice și legende fascinante.
                    </div>
                    <div>
                        Într-o lume în permanentă schimbare, învățarea este singura constantă. De aceea, Learn2Learn este un loc unde copiii învață să învețe, într-o locație primitoare, „ca acasă”, având ca spațiu de desfășurare două vile generoase și două curți cu spațiu de joacã de 400 mp. Copiii au parte de asistență și îndrumare la teme, ateliere si activități opționale variate si captivante, pentru o educație completă, cu grijă pentru minte, corp și suflet.
                    </div>
                </div>
            </section>
        </>
    )
}
