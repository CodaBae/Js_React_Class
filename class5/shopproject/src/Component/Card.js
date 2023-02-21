import CardImg from '../Assets/cardimg.png'
import TrashIcon from '../Assets/TrashCan.png'

const Card = (props) =>{
    return (
        <div className='card_div'>
            <div>
                <img src={CardImg} alt="card inage"/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.des}</p>
            </div>
            <div>
                <h1>1</h1>
            </div>
            <div>
                <h1>$681</h1>
            </div>
            <div>
                <img src={TrashIcon} alt='trash icon ' />
            </div>

        </div>
    )
}

export default Card