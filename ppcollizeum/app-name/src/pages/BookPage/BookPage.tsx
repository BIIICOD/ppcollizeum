import {BookPageContent, BookPageWrapper, BookWindow, ClubPickerColumn} from "./style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import SeatRow from "../../components/SeatRow/SeatRow";
import {useEffect, useMemo, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";

const BookPage = () => {
    const [first, setFirst] = useState<any[]>([]);
    const [second, setSecond] = useState<any[]>([]);
    const [data, setData] = useState<any[]>();
    const [dataName, setDataName] = useState('first');

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
                    <p>Choose  your  GameZone</p>
                    <ul>
                        <li>
                            <ButtonCustom onClick={selFir} color={"white"} text={'Rostov-on-Don, Socialisticheskaya st. 98'}></ButtonCustom>
                        </li>
                        <li>
                            <ButtonCustom onClick={selSec} color={"white"} text={'Rostov-on-Don, Mechnikova st. 77d'}></ButtonCustom>
                        </li>
                    </ul>
                </ClubPickerColumn>
                <BookWindow>
                    {data ? <SeatRow data={data} dataName={dataName}/> : 'Подождите, схема клуба загружается' }
                </BookWindow>
            </BookPageContent>
        </BookPageWrapper>
    )
}

export default BookPage;