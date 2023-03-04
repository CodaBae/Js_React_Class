import {useState} from 'react'
import axios from 'axios'

// CRUD -> CREATE
const AddItem = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    let APIKEY = 'https://easy-battledress-crab.cyclic.app/shop'

    let shopItem =  {
        name,type,price,quantity
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let res = await axios.post(APIKEY,shopItem)
        console.log(res)
    }

    return(
        <form style={{margin:'5%'}} onSubmit={handleSubmit}>
            <input type='text' placeholder="Item" onChange={(e)=> setName(e.target.value)}/>
            <input type='text' placeholder="type" onChange={(e)=> setType(e.target.value)}/>
            <input type='number' placeholder="price" onChange={(e) => setPrice(e.target.value )}/>
            <input type='number' placeholder="quantity" onChange={(e)=> setQuantity(e.target.value)}/>

            <button>SEND</button>
        </form>
    )

}

export default AddItem