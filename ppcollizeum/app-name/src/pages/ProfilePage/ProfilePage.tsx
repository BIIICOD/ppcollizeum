import {
    OrderContent,
    ProfilePageContent, ProfilePageOrderCard, ProfilePageOrderWindow,
    ProfilePageUnlogin,
    ProfilePageWrapper,
    SideContent,
    SideContentBody,
    SideContentHeader
} from "./style";
import {useAuth} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import {onValue, ref, remove, update} from "firebase/database";
import {db} from "../../firebase";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {Link} from "react-router-dom";
import {ButtonWrapper} from "../../components/FirstSection/style";

const ProfilePage = () => {
    const {currentUser, isAdmin} = useAuth();
    const [firstData, setFirstData] = useState<any[]>([])
    const [secondData, setSecondData] = useState<any[]>([])
    const [ordersData, setOrdersData] = useState<any>()
    const [productsData, setProductsData] = useState<any>()

    useEffect(() => {
        return onValue(ref(db, '/first'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setFirstData(todoItems)
        });
    }, []);

    useEffect(() => {
        return onValue(ref(db, '/second'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setSecondData(todoItems)
        });
    }, []);

    useEffect(() => {
        onValue(ref(db, '/orders'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let usersItems = [...data];
            setOrdersData(usersItems)
        });
    }, currentUser);

    useEffect(() => {
        onValue(ref(db, '/products'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let usersItems = [...data];
            setProductsData(usersItems)
        });
    }, []);

    const deleteOrder = (orderId: number) => {
        update(ref(db, `/orders/${orderId}`), {
            status: 'success',
        });
    };

    const bookCountFirst = firstData.filter((el) => el.user === currentUser?.email).length
    const bookCountSecond = secondData.filter((el) => el.user === currentUser?.email).length

  return(
      <>
          {!currentUser
            ?
          <ProfilePageWrapper>
              <ProfilePageContent>
                  <ProfilePageUnlogin>
                      <h2>Войдите в аккаунт для просмотра профиля</h2>
                      <Link to={'/login'}>
                        <ButtonCustom color={'white'} text={'Войти'}></ButtonCustom>
                      </Link>
                  </ProfilePageUnlogin>
              </ProfilePageContent>
          </ProfilePageWrapper>
          :
          <ProfilePageWrapper>
            <ProfilePageContent>
                <SideContent>
                  <SideContentHeader>Имя пользователя <br/> {currentUser?.email}</SideContentHeader>
                      {isAdmin
                          ?
                          <>
                              <SideContentBody>
                                  <ul>
                                      Социалистическая ул. 98:
                                      <li>Свободных мест
                                          - {firstData.filter((el) => el.state === 'free').length}</li>
                                      <li>Забронированных мест
                                          - {firstData.filter((el) => el.state === 'book').length}</li>
                                      <li>Занятых мест
                                          - {firstData.filter((el) => el.state === 'close').length}</li>
                                  </ul>
                                  <ul>
                                      Мечникова ул. 77д:
                                      <li>Свободных мест
                                          - {secondData.filter((el) => el.state === 'free').length}</li>
                                      <li>Забронированных мест
                                          - {secondData.filter((el) => el.state === 'book').length}</li>
                                      <li>Занятых мест
                                          - {secondData.filter((el) => el.state === 'close').length}</li>
                                  </ul>
                              </SideContentBody>
                          </>
                          :
                          <>
                              <SideContentBody>
                                  <div>
                                      <p>Кол-во забронированных мест:</p>
                                      <p>Социалистическая ул. 98 - {bookCountFirst}</p>
                                      <p>Мечникова ул. 77д - {bookCountSecond}</p>
                                  </div>
                                  <Link to={'/book'}>
                                      <ButtonCustom color={'white'} text={'Забронируйте сейчас!'}/>
                                  </Link>
                              </SideContentBody>
                          </>
                      }
                </SideContent>
                <OrderContent>
                    {isAdmin ?
                    <>
                        <p>Оформленные заказы</p>
                        <ProfilePageOrderWindow>
                            {ordersData?.map((order: { email: any; order: any; status: string}, index: number) => {
                                let totCoast = 0;
                                if (order && order.status !== 'success') {
                                return <ProfilePageOrderCard>
                                    <p>Имя пользователя - {order.email}</p>
                                    <p>Номер заказа - {index}</p>
                                    {order.order.map((el: any) => {
                                        return <p>{productsData?.map((product: any, index: any) => {
                                            if (index === Number(el[0])) {
                                                totCoast = totCoast + product.price * el[1]
                                                return (
                                                    product.name + ' - ' + el[1] + 'шт. '
                                                )
                                            }
                                        })}</p>
                                    })}
                                    <p>Общая стоимость - {totCoast} рублей</p>
                                    <ButtonWrapper>
                                        <ButtonCustom onClick={() => deleteOrder(index)} color={'red'}
                                                      text={'Завершить заказ'}></ButtonCustom>
                                    </ButtonWrapper>
                                </ProfilePageOrderCard>
                                } else {return ''}
                            })}
                        </ProfilePageOrderWindow>
                    </>
                    :
                        <>
                            <p>Оформленные заказы</p>
                            <ProfilePageOrderWindow>
                                {ordersData?.map((order: { email: any; order: any; }) => {
                                    let totCoast = 0;
                                    if (order && order.email === currentUser.email) {
                                        return <ProfilePageOrderCard><p>Имя пользователя
                                            - {order.email}</p> {order.order.map((el: any) => {
                                            return <p>{productsData?.map((product: any, index: any) => {
                                                if (index === Number(el[0])) {
                                                    totCoast = totCoast + product.price * el[1]
                                                    return (
                                                        product.name + ' - ' + el[1] + 'шт. '
                                                    )
                                                }
                                            })}</p>
                                        })}
                                            <p>Общая стоимость - {totCoast} рублей</p>
                                        </ProfilePageOrderCard>}
                                })}
                            </ProfilePageOrderWindow>
                        </>
                    }
                </OrderContent>
            </ProfilePageContent>
        </ProfilePageWrapper>
      }
      </>
  )
}

export default ProfilePage