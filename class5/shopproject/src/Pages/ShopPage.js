import AddItem from "../Component/AddItem"
import Card from "../Component/Card"
import Checkout from "../Component/Checkout"

import Data from "../Utils/data"
const ShopPage = () => {
    console.log(Data)
    return (
        <div className='shop_div'>
            <div style={{width: '50%'}}>
                <AddItem />

               {Data.map((item)=> <Card name={item.name} des={item.des} />)}
            </div>
            <div style={{width: '40%'}}>
            <Checkout />

            </div>

        </div>
    )
}

export default ShopPage