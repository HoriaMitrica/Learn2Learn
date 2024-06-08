import './style.scss'

export const Offer = () => {
    return (
        <>
            <section id="offer" className="main">
                <div className="section-end">
                    <h1 className="title-smaller main">O f e r t a</h1>
                    <div className="main">
                        <div className="program-card">
                            <h2>PROGRAM SCURT (3 ORE)</h2>
                            <h2>900 RON / luna</h2>
                            <ul>
                                <li>Asistență la teme</li>
                                <li>Cursuri limba engleză</li>
                            </ul>
                            <p>
                                Programul scurt poate fi atât în variantă before-school (pentru clasele III, IV, V), cât și after-school.
                            </p>
                            <p>
                                Organizăm cursuri de matematică și pentru copiii de clasa III-IV care nu sunt înscriși în programul nostru, dimineața, pentru școlile unde programul începe de la ora 11:00.
                            </p>
                        </div>
                        <div className="program-card">
                            <h2>PROGRAM LUNG</h2>
                            <h2>1800 RON / luna</h2>
                            <ul>
                                <li>Asistență la teme</li>
                                <li>Cursuri limba engleză</li>
                                <li>Cursuri matematică cls. a III-a / a IV-a</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}