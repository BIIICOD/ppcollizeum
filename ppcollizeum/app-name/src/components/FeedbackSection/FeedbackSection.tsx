import {
    FeedbackCard,
    FeedbackCardBlock,
    FeedbackSectionContent,
    FeedbackSectionTitle,
    FeedbackSectionWrapper,
    FeedbackText,
    FeedbackUser,
    FeedbackUserBlock,
    FeedbackUserIcon,
    FeedbackUserName,
    FeedbackUserRate, ModalContent, ModalWrapper
} from "./style";

import {ReactComponent as Feedback} from "../../icons/FeedbackIcon.svg";
import {ReactComponent as StarIcon} from "../../icons/StarIcon.svg";
import {ButtonWrapper} from "../FirstSection/style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {SetStateAction, useEffect, useState} from "react";
import ReactStars from 'react-rating-star-with-type'
import {COLORS} from "../../constants/Colors";
import {toast, ToastContainer} from "react-toastify";
import {onValue, ref, update} from "firebase/database";
import {db} from "../../firebase";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";


const FeedbackSection = () => {
    const [modalDisplay, setModalDisplay] = useState(false);

    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedData, setFeedbackData] = useState<any>();
    const [star, setStar] = useState(0);

    const onChange = (nextValue: SetStateAction<number>)=>{
        setStar(nextValue)
    }

    useEffect(() => {
        return onValue(ref(db, '/feedback'), querySnapShot => {
            let data = querySnapShot.val() || [];
            let todoItems = [data];
            setFeedbackData(todoItems)
        });
    }, []);

    const sendFeedback = () => {
        if (name === '') return toast.error('Заполните имя')
        if (feedback === '') return toast.error('Заполните отзыв')
        if (star === 0) return toast.error('Выбирете оценку')
        let lastIndex= Object.keys(feedData[0])?.at(-1)
        if (lastIndex) {
            update(ref(db, `/feedback/${Number(lastIndex) + 1}`), {
                name: name,
                feedback: feedback,
                star: star,
            });
            toast.success(`Отзыв создан`)
        } else {
            update(ref(db, `/feedback/${0}`), {
                name: name,
                feedback: feedback,
                star: star,
            });
            toast.success(`Отзыв создан`)
        }
        setModalDisplay(false)
        setStar(0)
        setName('')
        setFeedback('')
    };

    return(
        <FeedbackSectionWrapper id={'contact'}>
            <FeedbackSectionContent>
                <ToastContainer></ToastContainer>
                <FeedbackSectionTitle>
                    Счастливые Игроки
                </FeedbackSectionTitle>
                <p>
                    Ознакомьтесь с подлинными отзывами участников нашего сообщества и узнайте, как GameZone улучшила их игровой опыт.
                </p>
                <FeedbackCardBlock>
                    <FeedbackCard>
                        <FeedbackText>
                            "GameZone стал моим любимым местом для игр. Отличная атмосфера, потрясающие игры и фантастическое сообщество".
                        </FeedbackText>
                        <FeedbackUserBlock>
                            <FeedbackUser>
                                <FeedbackUserIcon/>
                                <FeedbackUserName>
                                    Владимиров Всеволод
                                    <FeedbackUserRate>
                                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                                    </FeedbackUserRate>
                                </FeedbackUserName>
                            </FeedbackUser>
                            <Feedback/>
                        </FeedbackUserBlock>
                    </FeedbackCard>
                    <FeedbackCard>
                        <FeedbackText>
                            "Тренировки в GameZone значительно улучшили мои игровые навыки. Настоятельно рекомендую всем геймерам, которые хотят повысить свой уровень".
                        </FeedbackText>
                        <FeedbackUserBlock>
                            <FeedbackUser>
                                <FeedbackUserIcon/>
                                <FeedbackUserName>
                                    Агеев Дмитрий
                                    <FeedbackUserRate>
                                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                                    </FeedbackUserRate>
                                </FeedbackUserName>
                            </FeedbackUser>
                            <Feedback/>
                        </FeedbackUserBlock>
                    </FeedbackCard>
                </FeedbackCardBlock>

                <ModalWrapper
                    display={modalDisplay}
                >
                    <ModalContent>
                            <input
                              value={name}
                              type={"text"}
                              placeholder={'Введите имя'}
                              onChange={(e) => {setName(e.target.value)}}
                            />
                            <textarea
                              value={feedback}
                              className={'textarea'}
                              rows={5} cols={80}
                              placeholder={'Введите текст отзыва'}
                              onChange={(e) => {setFeedback(e.target.value)}}
                            >
                            </textarea>
                            <label>
                                Выберите оценку
                            </label>
                            <ReactStars
                                onChange={onChange}
                                value={star}
                                size={25}
                                isEdit={true}
                                activeColors={["gray", "gray", `${COLORS.redHover}`, `${COLORS.redHover}`, `${COLORS.mainRed}`,]}
                            />
                            <ButtonCustom onClick={() => sendFeedback()} color={'red'} text={'Отправить отзыв'}/>
                    </ModalContent>
                    <ButtonCustom onClick={() => {
                        setModalDisplay(false)}} color={'white'} text={'Закрыть окно'}/>
                </ModalWrapper>

                <ButtonWrapper>
                    <ButtonCustom onClick={() => {setModalDisplay(true)}} color={'red'} text={'Оставить отзыв'}></ButtonCustom>
                    <Link to={'/feedback'}>
                        <ButtonCustom color={'white'} text={'Посмотреть все отзывы'}></ButtonCustom>
                    </Link>
                </ButtonWrapper>
            </FeedbackSectionContent>
        </FeedbackSectionWrapper>
    )
}

export default FeedbackSection;