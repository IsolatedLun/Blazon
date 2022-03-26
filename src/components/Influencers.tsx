import { useParams} from 'react-router-dom';
import { INF_Influencer, INF_InfluencerDict } from '../interfaces';
import influencerData from './json/influencers.json';
import Influencer from './modules/Influencer';

const Influencers = () => {
    const { type } = useParams();
    const influencers = (influencerData as INF_InfluencerDict)[type!]

    return (
    <div className='[ influencers ] [ flex-vertical-items margin-block-1 ]'>
        <h2>{ influencers.length } influencers</h2>
        {
            influencers.map(influencer => ( <Influencer influencer={influencer} /> ))
        }
    </div>
    )
}

export default Influencers