import {
  LeftImage,
  MiniText,
  RedText,
  RightImage,
  SecondSectionWrapper,
  Text,
  WhyCardWrapper,
  WhyTextWrapper
} from "./style";
import WhyFirstPhoto from '../../images/DevicePhoto.png'
import WhySecondPhoto from '../../images/OurFamilyPhoto.png'
import WhyThirdPhoto from '../../images/GamingEventPhoto.png'
import {ReactComponent as WhyIcon} from "../../icons/WhyIcon.svg";

const WhySection = () => {
  return(
      <SecondSectionWrapper>
        <Text>
          Почему GameZone?
        </Text>
        <MiniText>
          GameZone предлагает эксклюзивный игровой опыт благодаря первоклассному
          оборудованию и дружественной среде. Идеально подходит для геймеров
          любого уровня.
        </MiniText>

        <WhyCardWrapper>
          <LeftImage src={WhyFirstPhoto} alt={'Изображения нет'}/>
          <WhyTextWrapper>
            <RedText>
              Первоклассное оборудование
            </RedText>
            <Text>
              Продвинутое игровое оборудование
            </Text>
            <MiniText>
              Современные компьютеры, высокоскоростной доступ в Интернет и удобные игровые кресла. Насладитесь игрой в лучшем виде.
            </MiniText>

            <WhyTextWrapper>
              <div><WhyIcon/> Высокоскоростной интернет</div>
              <div><WhyIcon/> Самые современные компьютеры</div>
              <div><WhyIcon/> Удобные игровые кресла</div>
            </WhyTextWrapper>
          </WhyTextWrapper>
        </WhyCardWrapper>

        <WhyCardWrapper>
          <WhyTextWrapper>
            <RedText>
              Игровое комьюнити
            </RedText>
            <Text>
              Присоединяйтесь к нашей семье игроков
            </Text>
            <MiniText>
              Станьте частью динамичного игрового сообщества. Регулярные
              турниры, мероприятия и возможность познакомиться с другими игроками
              превращают GameZone в нечто большее, чем просто место для игр.
            </MiniText>
            <WhyTextWrapper>
              <div><WhyIcon/> Частые турниры</div>
              <div><WhyIcon/> Динамичное сообщество</div>
              <div><WhyIcon/> Познакомьтесь с другими игроками</div>
            </WhyTextWrapper>
          </WhyTextWrapper>
          <RightImage src={WhySecondPhoto} alt={'Изображения нет'}/>
        </WhyCardWrapper>

        <WhyCardWrapper>
          <LeftImage src={WhyThirdPhoto} alt={'Изображения нет'}/>
          <WhyTextWrapper>
            <RedText>
              Киберспортивная арена
            </RedText>
            <Text>
              Соревновательные игровые мероприятия
            </Text>
            <MiniText>
              Проводите киберспортивные мероприятия и участвуйте в них. Современная арена для проведения соревновательных игр в лучшем виде.
            </MiniText>
            <WhyTextWrapper>
              <div><WhyIcon/> Проводите киберспортивные мероприятия</div>
              <div><WhyIcon/> Участвуйте в мероприятиях</div>
              <div><WhyIcon/> Современная арена</div>
            </WhyTextWrapper>
          </WhyTextWrapper>
        </WhyCardWrapper>


      </SecondSectionWrapper>
  )
}

export default WhySection