import {
    CartPageContent,
    CartPageWrapper,
} from "./style";
import {useEffect, useState} from "react";
import {onValue, push, ref, update} from "firebase/database";
import {db} from "../../firebase";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {Link} from "react-router-dom";
import {OrderPageCard, OrderPageWindow} from "../OrderPage/style";
import {countUniqueStrings} from "../../constants/Functions";
import {useAuth} from "../../context/AuthContext";

const CartPage = () => {

    const {currentUser} = useAuth()


    const [products, setProducts] = useState<any[]>([])
    const [storedNames, setStoredNames] = useState<any[]>(JSON.parse(localStorage.getItem(`${currentUser?.email}`) || ''))
    const [orders, setOrders] = useState<any[]>([])

    useEffect(() => {
        return onValue(ref(db, '/products'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setProducts(todoItems)
        });
    }, []);

    useEffect(() => {
        return onValue(ref(db, '/orders'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [data];
            setOrders(todoItems)
        });
    }, []);

    console.log(orders)


    const clearCart = () => {
        localStorage.setItem(`${currentUser?.email}`, '[]')
        setProducts([])
    }

    const countCart = Object.entries(countUniqueStrings(storedNames))

    const makeOrder = () => {
        let lastIndex= Object.keys(orders[0])?.at(-1)
        if (lastIndex) {
            update(ref(db, `/orders/${Number(lastIndex) + 1}`), {
                order: countCart,
                email: currentUser?.email,
            });
        } else {
            update(ref(db, `/orders/${0}`), {
                order: countCart,
                email: currentUser?.email,
            });
        }
    };

    return (
        <CartPageWrapper>
            <CartPageContent>
                <OrderPageWindow>
                { products.map((el, i) => {
                    let cur = countCart.find((c) => Number(c[0]) === i)
                    if (cur) {
                        return <OrderPageCard>
                            <img src={el.img} alt="" />
                            <p>{el.name} {cur[1]}шт.</p>
                            <p>{el.price * cur[1]} рублей</p>
                        </OrderPageCard>
                    }
                })}
                </OrderPageWindow>
                <ButtonCustom onClick={makeOrder} color={'red'} text={'Сделать заказ'}/>
                <Link to="/order">
                    <ButtonCustom color={'white'} text={'Вернуться к продуктам'}/>
                </Link>
                <ButtonCustom onClick={clearCart} color={'white'} text={'Очистить корзину'}/>
            </CartPageContent>
        </CartPageWrapper>
    )
}

export default CartPage;