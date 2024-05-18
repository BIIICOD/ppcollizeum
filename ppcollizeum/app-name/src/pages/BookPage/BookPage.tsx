import {BookPageContent, BookPageWrapper, BookWindow, ClubPickerColumn} from "./style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {Pixi} from "../../components/Pixi/Pixi";

const BookPage = () => {
    return (
        <BookPageWrapper>
            <BookPageContent>
                <ClubPickerColumn>
                    <p>Choose  your  GameZone</p>

                    <ul>
                        <li>
                            <ButtonCustom color={"white"} text={'Rostov-on-Don, Socialisticheskaya st. 98'}></ButtonCustom>
                        </li>
                        <li>
                            <ButtonCustom color={"white"} text={'Rostov-on-Don, Mechnikova st. 77d'}></ButtonCustom>
                        </li>
                    </ul>
                </ClubPickerColumn>
                <BookWindow>
                    <Pixi></Pixi>
                </BookWindow>
            </BookPageContent>
        </BookPageWrapper>
    )
}

export default BookPage;