import {
    CartPageContent,
    CartPageWrapper,
} from "./style";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const CartPage = () => {

    const [products, setProducts] = useState<any[]>([])
    const [storedNames, setStoredNames] = useState<any[]>(JSON.parse(localStorage.getItem('names') || ''))

    useEffect(() => {
        return onValue(ref(db, '/products'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setProducts(todoItems)
        });
    }, []);

    const cart = storedNames.map((elem, i) => {
        return products.map((prod, pos) => {
            if(pos === elem) {
                return prod.name
            }
        })
    })

    const clearCart = () => {
        localStorage.setItem('names', '[]')
        setProducts([])
    }

    return (
        <CartPageWrapper>
            <CartPageContent>
                { cart.map((el) => {
                    return <p>{el}</p>
                })}
                <ButtonCustom onClick={clearCart} color={'red'} text={'Очистить корзину'}/>
            </CartPageContent>
        </CartPageWrapper>
    )
}

export default CartPage;