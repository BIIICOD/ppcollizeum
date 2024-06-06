import {ProfilePageContent, ProfilePageWrapper, SideContent} from "./style";
import {useAuth} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";
import {log} from "node:util";
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
      <>{!currentUser ?
          <ProfilePageWrapper>
              <ProfilePageContent>
                <h1>Войдите в аккаунт для просмотра профиля</h1>
                  <Link to={'/login'}>
                    <ButtonCustom color={'white'} text={'Войти'}></ButtonCustom>
                  </Link>
              </ProfilePageContent>
          </ProfilePageWrapper>
          :
          <ProfilePageWrapper>
            <ProfilePageContent>
                  <p>Имя пользователя - {currentUser?.email}</p>
                      {isAdmin
                          ?
                          <>
                              <ul>
                                  Социалистическая ул. 98:
                                  <li>Кол-во забронированных мест - {firstData.filter((el) => el.state === 'book').length}</li>
                                  <li>Кол-во закрытых мест - {firstData.filter((el) => el.state === 'close').length}</li>
                              </ul>
                              <ul>
                                  Мечникова ул. 77д:
                                  <li>Кол-во забронированных мест - {secondData.filter((el) => el.state === 'book').length}</li>
                                  <li>Кол-во закрытых мест - {secondData.filter((el) => el.state === 'close').length}</li>
                              </ul>
                          </>
                          :
                          <>
                              <p>Кол-во забронированных мест Социалистическая ул. 98 - {bookCountFirst}</p>
                              <p>Кол-во забронированных мест Мечникова ул. 77д: - {bookCountSecond}</p>
                          </>
                      }
            </ProfilePageContent>
        </ProfilePageWrapper>
      }
      </>
  )
}

export default ProfilePage