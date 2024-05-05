import {
    Card,
    CardBoldText,
    CardText,
    CardWrapper,
    GamingServicesContent,
    GamingServicesWrapper,
    TopText
} from "./style";
import {ReactComponent as PcBuildIcon} from "../../icons/PcBuild.svg";
import {ReactComponent as CupIcon} from "../../icons/CupIcon.svg";
import {ReactComponent as RetroIcon} from "../../icons/RetroIcon.svg";
import {ReactComponent as TeacherIcon} from "../../icons/TeacherIcon.svg";
import {ReactComponent as TwitchIcon} from "../../icons/TwitchIcon.svg";
import {ReactComponent as VrIcon} from "../../icons/VrIcon.svg";


const GamingServices = () => {
    return (
        <GamingServicesWrapper>
            <GamingServicesContent>
                <TopText>
                    Our Gaming Services
                </TopText>
                <CardWrapper>
                    <Card>
                        <VrIcon/>
                        <CardBoldText>
                            VR Games
                        </CardBoldText>
                        <CardText>
                            Dive into virtual reality gaming with our extensive collection of VR titles. From action-packed adventures to immersive simulations, we have something for every VR enthusiast.
                        </CardText>
                    </Card>
                    <Card>
                        <PcBuildIcon/>
                        <CardBoldText>
                            PC Build
                        </CardBoldText>
                        <CardText>
                            Customize your dream gaming PC with our PC build service. From component selection to assembly, we provide expert guidance every step of the way.
                        </CardText>
                    </Card>
                    <Card>
                        <RetroIcon/>
                        <CardBoldText>
                            Retro Games
                        </CardBoldText>
                        <CardText>
                            Take a trip down memory lane with our selection of classic retro games. Experience the nostalgia of gaming's golden age with titles from the past decades.
                        </CardText>
                    </Card>
                    <Card>
                        <TwitchIcon/>
                        <CardBoldText>
                            Streamer Zone
                        </CardBoldText>
                        <CardText>
                            Our dedicated streamer zone allows you to broadcast your gameplay live. Equipped with high-speed internet and top-tier streaming gear, it's perfect for aspiring or professional streamers.
                        </CardText>
                    </Card>
                    <Card>
                        <CupIcon/>
                        <CardBoldText>
                            Tournaments
                        </CardBoldText>
                        <CardText>
                            Compete in our regular gaming tournaments for a chance to win prizes and gain recognition in the gaming community. Open to gamers of all levels.
                        </CardText>
                    </Card>
                    <Card>
                        <TeacherIcon/>
                        <CardBoldText>
                            Coaching
                        </CardBoldText>
                        <CardText>
                            Looking to level up your game? Our professional coaches offer personalized training sessions in a variety of games, tailored to your skill level and goals.
                        </CardText>
                    </Card>
                </CardWrapper>
            </GamingServicesContent>
        </GamingServicesWrapper>
    )
}

export default GamingServices;