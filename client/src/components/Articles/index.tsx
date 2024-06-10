import './style.scss'

export const Articles = () => {
    return (
        <>
            <section id="articles" className="main">
                <div className="section-end">
                    <h1 className="title-smaller main">A r t i c o l e</h1>
                    <div style={{ position: 'relative', width: '400px', height: '460'}}>
                        <iframe
                            src="https://www.proiectulmerito.ro/aida-frujina/embed"
                            width="400"
                            height="460"
                            frameBorder="0"
                            scrolling="no"
                            title="Embedded Site"
                        ></iframe>
                        <a
                            href="https://www.proiectulmerito.ro/aida-frujina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                                backgroundColor: 'rgba(255, 255, 255, 0 )',
                            }}
                        >

                        </a>
                    </div>
                </div>
                <div className="gradient-transition"></div>
            </section>
        </>
    )
}   