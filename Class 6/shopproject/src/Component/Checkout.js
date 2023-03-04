import { useEffect, useState } from 'react'
import { PaystackButton } from 'react-paystack'

import MC from '../Assets/MC.png'
const Checkout = ({sum}) => {
    const [ship, setShipFee] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [card, setCard] = useState('')
    const [cvv, setCvv] = useState('')
    const [exp, setExp] = useState('')

    let total = parseInt(sum + ship)
    let amount = total * 100
    const publicKey = "pk_test_204f257021866533c49262c3e605427aade0197a"

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("shop more"),
      }


    useEffect(()=>{

        const shipCal = (total) =>{

            let result =  (total/100) * 10
    
            setShipFee(result)
    
        }
    
        shipCal(sum)    
    
    })

    return (
        <div>
            <h1>Card Details</h1>
            <div>
                <p>Card Types</p>
                <div>
                    <img src={MC} alt='mc image' />
                </div>
                <div>
                    <form>
                        <div>
                            <label>name on card</label>
                            <input type='text' placeholder='name' onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div>
                            <label>email </label>
                            <input type='text' placeholder='email' onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>phone</label>
                            <input type='text' placeholder='phone' onChange={(e)=> setPhone(e.target.value)}/>
                        </div>
                        <div>
                            <label>card number</label>
                            <input type='number' placeholder='11111 1111 1111' onChange={(e)=> setCard(e.target.value)} />
                        </div>
                        <div>
                            <label>expiration date</label>
                            <input type='date' placeholder='02/32' onChange={(e)=> setExp(e.target.value)} />
                        </div>
                        <div>
                            <label>cvv</label>
                            <input type='text' placeholder='233' onChange={(e)=> setCvv(e.target.value)} />
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        <h3> subTotal </h3>
                        <h3>${sum}</h3>
                    </div>
                    <div>
                        <h3> shipping </h3>
                        <h3>${ship}</h3>
                    </div>
                    <div>
                        <h3> Total(Tax) </h3>
                        <h3>${sum + ship}</h3>
                    </div>
                </div>
                <div>
                    
                     <PaystackButton {...componentProps} />
                </div>
            </div>
        </div>
    )
}

export default Checkout