import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { INF_Influencer, INF_InfluencerDict } from '../interfaces';
import influencerData from './json/influencers.json';
import Influencer from './modules/Influencer';

const Influencers = () => {
    const { type } = useParams();
    const [influencers, setInfluencers] = useState<INF_Influencer[]>([]);

    useEffect(() => {
        if(type)
            try {
                setInfluencers((influencerData as INF_InfluencerDict)[type]);
            }

            catch {
                setInfluencers([]);
            }
    }, [type])

    function sortByFollowers(): void {
        const arr = influencers.sort((a, b) => b.numerical_followers - a.numerical_followers);
        setInfluencers([...arr]);
    }

    if(typeof influencers === 'object')
        return (
            <div className='[ influencers ] [ flex-vertical-items margin-block-1 ]'>
                <div className='[ flex-between ]'>
                    <h2>{ influencers.length } influencers</h2>
                    <div className="[ controls ] [ flex-horizontal-items ]">
                        <button onClick={() => sortByFollowers()} aria-label='Sort by most popular button'
                            className='[ button ]'>Most popular</button>
                    </div>
                </div>
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