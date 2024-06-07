import {
    OrderPageCard,
    OrderPageContent,
    OrderPageTitle,
    OrderPageWindow,
    OrderPageWrapper
} from "./style";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const OrderPage = () => {
    const {currentUser} = useAuth()

    const [products, setProducts] = useState<any[]>([])
    const [storedNames, setStoredNames] = useState<any[]>([])

    useEffect(() => {
        return onValue(ref(db, '/products'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setProducts(todoItems)
        });
    }, []);

    function addToCart(id: number): any {
        let names = storedNames
        if (storedNames){
            names.push(id);
            return localStorage.setItem(`${currentUser?.email}`, JSON.stringify(names));
        }
    }

    return (
        <OrderPageWrapper>
            <OrderPageContent>
                <OrderPageTitle>
                    Сделайте ваш заказ
                </OrderPageTitle>
                { currentUser?.email &&
                <Link to={'/cart'}>
                    <ButtonCustom color={"white"} text={`Корзина`}></ButtonCustom>
                </Link>
                }
                <OrderPageWindow>
                    <>
                    { currentUser?.email &&
                        products.map((el, id) => {
                            return <>
                                <OrderPageCard>
                                    <img src={el.img} alt="" />
                                    <p>{el.name}</p>
                                    <p>{el.price} рублей</p>
                                    <ButtonCustom onClick={() => {addToCart(id)}} color={'red'} text={'Добавить в корзину'}></ButtonCustom>
                                </OrderPageCard>
                            </>
                        })
                    }
                    </>
                </OrderPageWindow>
            </OrderPageContent>
        </OrderPageWrapper>
    )
}

export default OrderPage;