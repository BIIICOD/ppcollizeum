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
        <GamingServicesWrapper id={'gameService'}>
            <GamingServicesContent>
                <TopText>
                    Наши игровые сервисы
                </TopText>
                <CardWrapper>
                    <Card>
                        <VrIcon/>
                        <CardBoldText>
                            Игры виртуальной реальности
                        </CardBoldText>
                        <CardText>
                            Погрузитесь в игры в виртуальной реальности с нашей обширной коллекцией VR-игр. От захватывающих приключений до иммерсивных симуляторов - у нас найдется что-то для каждого любителя виртуальной реальности.
                        </CardText>
                    </Card>
                    <Card>
                        <PcBuildIcon/>
                        <CardBoldText>
                            Сборка ПК
                        </CardBoldText>
                        <CardText>
                            Настройте игровой компьютер своей мечты с помощью нашей службы сборки ПК. На каждом этапе, от выбора компонентов до сборки, мы предоставляем квалифицированные консультации.
                        </CardText>
                    </Card>
                    <Card>
                        <RetroIcon/>
                        <CardBoldText>
                            Ретро-игры
                        </CardBoldText>
                        <CardText>
                            Погрузитесь в воспоминания с нашей подборкой классических ретро-игр. Испытайте ностальгию по золотому веку гейминга, ознакомившись с играми прошлых десятилетий.
                        </CardText>
                    </Card>
                    <Card>
                        <TwitchIcon/>
                        <CardBoldText>
                            Зона стримингов
                        </CardBoldText>
                        <CardText>
                            Наша выделенная зона для стримеров позволяет вам транслировать ваш игровой процесс в прямом эфире. Оснащенная высокоскоростным Интернетом и первоклассным оборудованием для стриминга, она идеально подходит для начинающих или профессиональных стримеров.
                        </CardText>
                    </Card>
                    <Card>
                        <CupIcon/>
                        <CardBoldText>
                            Турниры
                        </CardBoldText>
                        <CardText>
                            Участвуйте в наших регулярных игровых турнирах, чтобы получить шанс выиграть призы и завоевать признание в игровом сообществе. Мы открыты для игроков любого уровня.
                        </CardText>
                    </Card>
                    <Card>
                        <TeacherIcon/>
                        <CardBoldText>
                            Тренировки
                        </CardBoldText>
                        <CardText>
                            Хотите повысить свой уровень игры? Наши профессиональные тренеры предлагают индивидуальные тренировки по различным играм, адаптированные к вашему уровню мастерства и целям.
                        </CardText>
                    </Card>
                </CardWrapper>
            </GamingServicesContent>
        </GamingServicesWrapper>
    )
}

export default GamingServices;