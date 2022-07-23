import './cart-icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () =>{
    const { isCartOpen, setIsCartOpen} = useContext(CartContext)

    const ToggleIsCartOpen = () => {setIsCartOpen(!isCartOpen)}

    return(
        <div className='cart-icon-container' onClick={ToggleIsCartOpen}>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{0}</span>
        </div>
    )
}

export default CartIcon