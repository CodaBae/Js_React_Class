import MC from '../Assets/MC.png'
const Checkout = () => {
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
                            <input type='text' placeholder='name' />
                        </div>
                        <div>
                            <label>card number</label>
                            <input type='number' placeholder='11111 1111 1111' />
                        </div>
                        <div>
                            <label>expiration date</label>
                            <input type='date' placeholder='02/32' />
                        </div>
                        <div>
                            <label>cvv</label>
                            <input type='text' placeholder='233' />
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        <h3> subTotal </h3>
                        <h3>$1233</h3>
                    </div>
                    <div>
                        <h3> shipping </h3>
                        <h3>$33</h3>
                    </div>
                    <div>
                        <h3> Total(Tax) </h3>
                        <h3>$12333</h3>
                    </div>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout