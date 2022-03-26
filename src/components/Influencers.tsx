import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { INF_Influencer, INF_InfluencerDict } from '../interfaces';
import influencerData from './json/influencers.json';
import Influencer from './modules/Influencer';

const Influencers = () => {
    const { type } = useParams();
    let [influencers, setInfluencers] = useState<INF_Influencer[]>([]);

    useEffect(() => {
        if(type)
            try {
                setInfluencers((influencerData as INF_InfluencerDict)[type]);
            }

            catch {
                setInfluencers([]);
            }
    }, [type])

    if(influencers && influencers.length > 0)
        return (
            <div className='[ influencers ] [ flex-vertical-items margin-block-1 ]'>
                <h2>{ influencers.length } influencers</h2>
                {
                    influencers.map(influencer => ( <Influencer influencer={influencer} /> ))
                }
            </div>
        )
    else
        return (
            <p className='[ header-700 ]'><span className="clr-error-400">"{ type }"</span> does not exist.</p>
        )
}

export default Influencers