import {ErrorPageContent, ErrorPageText, ErrorPageWrapper} from "./style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import {Link} from "react-router-dom";

const ErrorPage = () =>{
    return(
        <ErrorPageWrapper>
            <ErrorPageContent>
                <p>
                    ERROR 404
                </p>
                <ErrorPageText>
                    Oops! Page not found.
                </ErrorPageText>
                <p>
                    Looks like the page you are looking for doesn’t exist.
                </p>
                <Link to={'/'}>
                    <ButtonCustom color={"white"} text={'Home Page'}></ButtonCustom>
                </Link>
            </ErrorPageContent>
        </ErrorPageWrapper>
    )
}

export default ErrorPage;