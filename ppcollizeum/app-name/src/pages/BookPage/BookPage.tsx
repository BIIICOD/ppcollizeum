import {BookPageContent, BookPageWrapper, BookWindow, ClubPickerColumn} from "./style";

const BookPage = () => {
    return (
        <BookPageWrapper>
            <BookPageContent>
                <ClubPickerColumn>
                    <p>Choose  your  GameZone</p>

                    <ul>
                        <li>
                            Rostov-on-Don, Socialisticheskaya st. 98
                        </li>
                        <li>
                            Rostov-on-Don, Mechnikova st. 77d
                        </li>
                    </ul>
                </ClubPickerColumn>
                <BookWindow>

                </BookWindow>
            </BookPageContent>
        </BookPageWrapper>
    )
}

export default BookPage;