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

const OrderPage = () => {

    const [products, setProducts] = useState<any[]>([])
    const [storedNames, setStoredNames] = useState<any[]>(JSON.parse(localStorage.getItem('names') || ''))

    useEffect(() => {
        return onValue(ref(db, '/products'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setProducts(todoItems)
        });
    }, []);

    function addToCart(id: number): any {
        console.log(id)
        let names = storedNames
        if (storedNames){
            names.push(id);
            return localStorage.setItem("names", JSON.stringify(names));
        }
    }

    return (
        <OrderPageWrapper>
            <OrderPageContent>
                <OrderPageTitle>
                    Сделайте ваш заказ
                </OrderPageTitle>
                <OrderPageWindow>
                    <>
                    {
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