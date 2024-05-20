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
    FeedbackUserRate
} from "./style";

import {ReactComponent as Feedback} from "../../icons/FeedbackIcon.svg";
import {ReactComponent as StarIcon} from "../../icons/StarIcon.svg";



const FeedbackSection = () => {
    return(
        <FeedbackSectionWrapper id={'contact'}>
            <FeedbackSectionContent>
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
            </FeedbackSectionContent>
        </FeedbackSectionWrapper>
    )
}

export default FeedbackSection;