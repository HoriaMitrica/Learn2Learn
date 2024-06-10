import './style.scss'
import { OfferProps } from '../../models/offer';
import { AssetPaths } from '../../models/enum';

export const Offer: React.FC<OfferProps> = ({ ...props }) => {
    return (
        <>
            <div className="offer-container">
                <div className="subtitle">{props.title}</div>
                <img className="offer-sublist" src={AssetPaths[props.mascot as keyof typeof AssetPaths]} alt="Logo" />
                <div className="offer-sublist">Preț: {props.price}/lună</div>
                <div>Program:
                    <ul>
                        {props.schedule.map((timeFrame, index) => (
                            <li key={index}>{timeFrame}</li>))}
                    </ul>
                </div>
                <div >Beneficii:
                    <ul>
                        {props.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}

