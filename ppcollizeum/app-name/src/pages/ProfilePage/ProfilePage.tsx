import {
    OrderContent,
    ProfilePageContent,
    ProfilePageUnlogin,
    ProfilePageWrapper,
    SideContent,
    SideContentBody,
    SideContentHeader
} from "./style";
import {useAuth} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {Link} from "react-router-dom";

const ProfilePage = () => {
    const {currentUser, isAdmin} = useAuth();
    const [firstData, setFirstData] = useState<any[]>([])
    const [secondData, setSecondData] = useState<any[]>([])

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
                    <>
                        Оформленные заказы
                    </>
                </OrderContent>
            </ProfilePageContent>
        </ProfilePageWrapper>
      }
      </>
  )
}

export default ProfilePage