import free from '../../icons/Seats/Free.png'
import close from '../../icons/Seats/Close.png'
import book from '../../icons/Seats/Book.png'
import {SeatRowBlock, SeatRowWrapper} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

import {
    ref,
    onValue,
    push,
    update,
    remove
} from 'firebase/database';
import {db} from "../../firebase";
import {useAuth} from "../../context/AuthContext";

interface IData{
    data: any[],
    dataName: string
}

const SeatRow = (props: IData) => {
    const { currentUser } = useAuth();

    const {
        data,
        dataName
    } = props;

    const Sprites = data.map((sprite, pos, data) => {
        const setBook = () => {
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'book',
                user: currentUser?.email || 'guest',
            });
        };

        const setFree = () => {
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'free',
                user: currentUser?.email || 'guest',
            });
        };

        const setClose = () => {
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'close',
                user: currentUser?.email || 'guest',
            });
        };

        return (
            <SeatRowBlock>
                <img
                    src={sprite?.state === 'free' ? free : sprite?.state === 'close' ? close : book}
                    alt={"Тут должно быть место"}
                    style={pos > 4 ? {transform: 'rotate(180deg)', margin: '100px 0 0 0'} : {}}
                />
                <section>
                    <p>Номер компьютера - {pos}</p>
                    <p>Стостояние - {sprite?.state === 'free' ? 'Свободно' : sprite?.state === 'close' ? 'Занято' : 'Зарезервировано' }</p>
                    <p>{(sprite.state !== 'free' && currentUser?.email === 'vopi.vopi@mail.ru') ? sprite?.user : ''}</p>
                    {currentUser?.email === 'vopi.vopi@mail.ru'
                        ?
                            <>
                                <ButtonCustom onClick={setFree} color={"red"} text={'Освободить'}/>
                                <ButtonCustom onClick={setBook} color={"red"} text={'Забронировать'}/>
                                <ButtonCustom onClick={setClose} color={"red"} text={'Закрыть'}/>
                            </>
                        :
                            <>
                                {sprite?.state === 'free' && <ButtonCustom onClick={setBook} color={"red"} text={'Забронировать'}/> }
                                {(sprite?.state === 'book' && sprite?.user === currentUser?.email) && <ButtonCustom onClick={setFree} color={"red"} text={'Отменить бронирование'}/> }
                            </>
                        }
                </section>
            </SeatRowBlock>
        )
    })

    return (
        <SeatRowWrapper>
            {Sprites}
        </SeatRowWrapper>
    )
}

export default SeatRow;