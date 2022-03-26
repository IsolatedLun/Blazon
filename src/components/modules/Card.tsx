import { Link } from "react-router-dom";
import { INF_Platform } from "../../interfaces";

const Card = ({ platform } : { platform: INF_Platform }) => {
  return (
    <div className="[ card ] [ flex-flow flex-col flex-center flow ]">
        <h3 className="[ header-500 ]">{ platform.name }</h3>
        <div className="card__profile-container">
          <img className='profile' src={`src/images/${platform.profile}`} alt={`${platform.name} profile`} />
        </div>
        <Link className='button' data-variant='ghost' data-url to={`/influencers/${platform.url}`}>View influencers</Link>
    </div>
  )
}

export default Card;