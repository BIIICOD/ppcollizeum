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
        <FeedbackSectionWrapper>
            <FeedbackSectionContent>
                <FeedbackSectionTitle>
                    Happy Gamers
                </FeedbackSectionTitle>
                <p>
                    Read genuine testimonials from our community members and see how GameZone has enhanced their gaming experience.
                </p>
                <FeedbackCardBlock>
                    <FeedbackCard>
                        <FeedbackText>
                            "GameZone has become my go-to place for gaming. Great atmosphere, awesome games, and a fantastic community."
                        </FeedbackText>
                        <FeedbackUserBlock>
                            <FeedbackUser>
                                <FeedbackUserIcon/>
                                <FeedbackUserName>
                                    John Doe
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
                            "The coaching sessions at GameZone have significantly improved my gaming skills. Highly recommend to any gamer looking to level up."
                        </FeedbackText>
                        <FeedbackUserBlock>
                            <FeedbackUser>
                                <FeedbackUserIcon/>
                                <FeedbackUserName>
                                    Jane Smith
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