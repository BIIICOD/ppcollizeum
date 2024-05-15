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
                            GameZone is the premier gaming destination offering top-tier equipment, dedicated gaming spaces, and a vibrant community.
                        </p>
                    </FooterContentTopBlock>

                    <FooterContentTopBlock>
                        <FooterContentTopTitle>
                            Explore
                        </FooterContentTopTitle>
                        <p>
                            About Us
                        </p>
                        <p>
                            Services
                        </p>
                        <p>
                            Contact
                        </p>
                        <p>
                            Blog
                        </p>
                    </FooterContentTopBlock>

                    <FooterContentTopBlock>
                        <FooterContentTopTitle>
                            Contact
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