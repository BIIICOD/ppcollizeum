import {MapBlock, MapSectionContent, MapSectionText, MapSectionTitle, MapSectionWrapper} from "./style";

import {ReactComponent as MapIcon} from "../../icons/MapIcon.svg";

const MapSection = () => {
    return(
        <MapSectionWrapper>
            <MapSectionContent>
                <MapSectionTitle>
                    Find us on map
                </MapSectionTitle>
                <MapBlock>
                    <MapSectionText>
                        <h3>
                            Our Address
                        </h3>
                        <ul>
                            <li>
                                <MapIcon/> Rostov-on-Don, Socialisticheskaya st. 98
                            </li>
                            <li>
                                <MapIcon/> Rostov-on-Don, Mechnikova st. 77d
                            </li>
                        </ul>
                    </MapSectionText>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A278b5acd7c42e2383959b48190a1eb61c9d58e185fc40fd0c5460b9088bb6a08&amp;source=constructor"
                        width="100%" height="400" frameBorder="0">
                    </iframe>
                </MapBlock>
            </MapSectionContent>
        </MapSectionWrapper>
    )
}

export default MapSection;