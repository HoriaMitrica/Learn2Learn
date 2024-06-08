import { ReactNode, useEffect, useState } from 'react'
import './style.scss'
import { OfferProps } from '../../models/offer';
import { Offer } from '../Offer';

export const Offers = () => {

    const GenerateOffers=():ReactNode=>{

        const [offers, setOffers] = useState<OfferProps[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('/json/offers.json');
            const data: OfferProps[] = await response.json();
            setOffers(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
        
        return(
            <>
                {offers.map(offer=>(
                     <Offer key={offer.id} {...offer} />
                ))}
            </>
        )
    }

    return (
        <>
            <section id="offer" className="main">
                <div className="section-end">
                <h1 className="title-smaller main">O f e r t a</h1>
                {GenerateOffers()}
                </div>
            </section>
        </>
    )
}
