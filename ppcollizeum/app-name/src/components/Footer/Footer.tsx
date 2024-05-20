import {
    FooterContent,
    FooterContentBottom,
    FooterContentTop,
    FooterContentTopBlock,
    FooterContentTopTitle,
    FooterWrapper
} from "./style";

const Footer = () => {
    return(
        <FooterWrapper>
            <FooterContent>
                <FooterContentTop>

                    <FooterContentTopBlock>
                        <FooterContentTopTitle>
                            GameZone
                        </FooterContentTopTitle>
                        <p>
                            GameZone - это ведущее игровое направление, предлагающее первоклассное оборудование, выделенные игровые пространства и динамичное сообщество.
                        </p>
                    </FooterContentTopBlock>

                    <FooterContentTopBlock>
                        <FooterContentTopTitle>
                            Навигация
                        </FooterContentTopTitle>
                        <p>
                            О нас
                        </p>
                        <p>
                            Услуги
                        </p>
                        <p>
                            Связаться с нами
                        </p>
                        <p>
                            Блог
                        </p>
                    </FooterContentTopBlock>

                    <FooterContentTopBlock>
                        <FooterContentTopTitle>
                            Контакты
                        </FooterContentTopTitle>
                        <p>
                            contact@gamezone.com
                        </p>
                        <p>
                            +1234567890
                        </p>

                    </FooterContentTopBlock>

                </FooterContentTop>
                <FooterContentBottom>
                    <p>
                        © 2024 GameZone. We love our users!
                    </p>

                    <p>
                        Terms & Conditions , Privacy Policy
                    </p>
                </FooterContentBottom>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer;