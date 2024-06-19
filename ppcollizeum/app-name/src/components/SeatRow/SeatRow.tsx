import free from '../../icons/Seats/Free.png'
import close from '../../icons/Seats/Close.png'
import book from '../../icons/Seats/Book.png'
import {SeatRowBlock, SeatRowWrapper, Wrapper} from "./style";
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
import {forwardRef, useEffect, useState} from "react";
import DatePicker from "react-datepicker";

interface IData{
    data: any[],
    dataName: string
}

const SeatRow = (props: IData) => {
    const { currentUser, isAdmin, creds, places } = useAuth();

    const [startDate, setStartDate] = useState(new Date());
    const [prev, setPrev] = useState<any>();

    const {
        data,
        dataName
    } = props;

    const Sprites = data.map((sprite, pos, data) => {
        const setBook = () => {
            setPrev({adress: `/${dataName}/${pos}`, state: `${sprite.state}`} )
            if (prev?.state === "book") {
                update(ref(db, `${prev.adress}`), {
                    state: 'free',
                    user: 'vopi.vopi@mail.ru',
                    creds: '',
                });
            }
            update(ref(db, `/${dataName}/${pos}`), {
                user: currentUser?.email || 'guest',
                creds: creds,
            });
            update(ref(db, `/users/${creds}`), {
                number: `${pos}`,
                data: `${String(startDate.toDateString())}`,
                hours: `${String(startDate.getHours()+1)}`,
                clubName: dataName,
            });
        };

        const setFree = () => {
            console.log(sprite.creds)
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'free',
                user: currentUser?.email || 'guest',
                creds: creds,
            });
            update(ref(db, `/users/${sprite.creds}`), {
                number: '',
                data: '',
                hours: '',
            });
        };

        const setBookAbsolute = () => {
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'bookAdmin',
                user: currentUser?.email || 'guest',
                creds: creds,
            });
            update(ref(db, `/users/${creds}`), {
                number: `${pos}`,
                data: `${String(startDate.toDateString())}`,
                hours: `${String(startDate.getHours()+1)}`,
                clubName: dataName,
            });
        };

        const setFreeAbsolute = () => {
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'freeAdmin',
                user: currentUser?.email || 'guest',
                creds: creds,
            });
            update(ref(db, `/users/${sprite.creds}`), {
                number: '',
                data: '',
                hours: '',
            });
        };

        const setCloseAbsolute = () => {
            update(ref(db, `/${dataName}/${pos}`), {
                state: 'closeAdmin',
                user: currentUser?.email || 'guest',
                creds: creds,
            });
            update(ref(db, `/users/${sprite.creds}`), {
                number: '',
                data: '',
                hours: '',
            });
        };

        const state = (pos: number) => {
            const currDate = startDate.toDateString() + ' ' + (startDate.getHours() + 1)
            const book = places.find((p: any[]) => String(`${p[0] + ' ' + p[1]}`) === currDate && pos === Number(p[2]) && p[3] === currentUser.email && p[4] === dataName)
            const userBook = places.find((p: any[]) => String(`${p[0] + ' ' + p[1]}`) === currDate && pos === Number(p[2]) && places.creds !== currentUser.email && p[4] === dataName)
            const close = places.find((p: any[]) => String(`${p[0] + ' ' + p[1]}`) === currDate && pos === Number(p[2]) && p[3] !== currentUser.email && p[4] === dataName)
            if (book || sprite.state === 'bookAdmin' || userBook) {
                return 'book';
            }
            else if (startDate.toDateString() !== sprite.data) {
                return 'free'
            }
            else if (close || sprite.state === 'close' || sprite.state == 'closeAdmin') {
                return 'close';
            }
            else return 'free';
        }

        return (
            <SeatRowBlock>
                <img
                    src={state(pos) === 'book' ? book : state(pos) === 'close' ? close : free}
                    alt={"Тут должно быть место"}
                    style={pos > 4 ? {transform: 'rotate(180deg)', paddingBottom: '50px'} : {}}
                />
                <section>
                    <p>Номер компьютера - {pos}</p>
                    <p>Стостояние - {state(pos) === 'free' ? 'Свободно' : state(pos) === 'close' ? 'Занято' : 'Зарезервировано' }</p>
                    <p>{(sprite.state !== 'free' && currentUser?.email === 'vopi.vopi@mail.ru') ? sprite?.user : ''}</p>
                    {isAdmin && currentUser
                        ?
                            <>
                                <ButtonCustom onClick={setFreeAbsolute} color={"white"} text={'Освободить'}/>
                                <ButtonCustom onClick={setBookAbsolute} color={"white"} text={'Забронировать'}/>
                                {startDate.toDateString() === new Date().toDateString() && startDate.getHours() === new Date().getHours() && <ButtonCustom onClick={setCloseAbsolute} color={"white"} text={'Закрыть'}/>}
                            </>
                        :
                            <>
                                {state(pos) === 'free' && <ButtonCustom onClick={setBook} color={"red"} text={'Забронировать'}/> }
                                {state(pos) === 'book' && sprite.email === currentUser.email && <ButtonCustom onClick={setFree} color={"red"} text={'Отменить бронирование'}/> }
                            </>
                        }
                </section>
            </SeatRowBlock>
        )
    })

    return (
        <Wrapper>
            <DatePicker
                selected={startDate}
                onChange={(date) => {
                    date && setStartDate(date)
                }}
                showTimeSelect
                dateFormat="d/MM/yyyy HH:mm"
                timeIntervals={60}
                timeFormat="HH:mm"
            />
            <SeatRowWrapper>
                {Sprites}
            </SeatRowWrapper>
        </Wrapper>
    )
}

export default SeatRow;