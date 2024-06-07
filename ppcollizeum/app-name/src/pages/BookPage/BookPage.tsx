import {BookPageContent, BookPageWrapper, BookWindow, ClubPickerColumn} from "./style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import SeatRow from "../../components/SeatRow/SeatRow";
import {useEffect, useMemo, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const BookPage = () => {
    const [first, setFirst] = useState<any[]>([]);
    const [second, setSecond] = useState<any[]>([]);
    const [data, setData] = useState<any[]>();
    const [dataName, setDataName] = useState('first');

    const {currentUser} = useAuth()

    useEffect(() => {
        return onValue(ref(db, '/second'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setSecond(todoItems);
            setData(todoItems)
        });
    }, []);

    useEffect(() => {
        return onValue(ref(db, '/first'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [...data];
            setFirst(todoItems);
            setData(todoItems)
        });
    }, []);

    function selFir(){
        setData(first)
        setDataName('first')
    }

    function selSec(){
        setData(second)
        setDataName('second')
    }

    return (
        <BookPageWrapper>
            <BookPageContent>
                <ClubPickerColumn>
                    <p>Выбери свой GameZone</p>
                    <ul>
                        <li>
                            <ButtonCustom onClick={selFir} color={"white"} text={'Ростов-на-Дону, Социалистическая ул. 98'}></ButtonCustom>
                        </li>
                        <li>
                            <ButtonCustom onClick={selSec} color={"white"} text={'Ростов-на-Дону, Мечникова ул. 77д'}></ButtonCustom>
                        </li>
                    </ul>
                </ClubPickerColumn>
                <BookWindow>
                    <h1>
                        {dataName === 'first' ? 'Ростов-на-Дону, Социалистическая ул. 98' : dataName === 'second' ? 'Ростов-на-Дону, Мечникова ул. 77д' : ''}
                    </h1>
                    <p>{data ? <SeatRow data={data} dataName={dataName}/> : 'Подождите, схема клуба загружается' }</p>
                    { currentUser?.email &&
                    <Link to={'/order'}>
                        <ButtonCustom onClick={selSec} color={"white"} text={'Заказать продукты'}></ButtonCustom>
                    </Link>}
                </BookWindow>

            </BookPageContent>
        </BookPageWrapper>
    )
}

export default BookPage;