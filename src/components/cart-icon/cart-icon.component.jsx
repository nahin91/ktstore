import './cart-icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () =>{
    const {setIsCartOpen} = useContext(CartContext)

    const ToggleIsCartOpen = () => {setIsCartOpen(!setIsCartOpen)}

    return(
        <div className='cart-icon-container' onClick={ToggleIsCartOpen}>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{0}</span>
        </div>
    )
}

export default CartIcon