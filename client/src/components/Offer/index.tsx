import './style.scss'
import { OfferProps } from '../../models/offer';

export const Offer: React.FC<OfferProps> = ({ ...props }) => {
    return (
        <>
            <div>
                <div className="text-container">
                    <div className="subtitle">{props.title}</div>
                </div>
            </div>
        </>
    )
}

