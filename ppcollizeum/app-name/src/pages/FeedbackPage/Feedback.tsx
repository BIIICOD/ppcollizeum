
import 'react-toastify/dist/ReactToastify.css';
import {FeedbackContent, FeedbackWrapper} from "./style";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../../firebase";
import {
  FeedbackCard,
  FeedbackText,
  FeedbackUser,
  FeedbackUserBlock,
  FeedbackUserIcon,
  FeedbackUserName, FeedbackUserRate
} from "../../components/FeedbackSection/style";
import {ReactComponent as Feedback} from "../../icons/FeedbackIcon.svg";
import {COLORS} from "../../constants/Colors";
import ReactStars from "react-rating-star-with-type";

const FeedbackPage = () => {
  const [feedbackData, setFeedbackData] = useState<any>()

  useEffect(() => {
    return onValue(ref(db, '/feedback'), querySnapShot => {
      let data = querySnapShot.val() || [];
      let todoItems = [...data];
      setFeedbackData(todoItems)
    });
  }, []);

  return (
    <FeedbackWrapper>
      <h1>Отзывы о нашем клубе</h1>
      <FeedbackContent>
        {feedbackData?.map((el: { name: any; feedback: any; star: any; }) => {
          return (
            <>
              <FeedbackCard>
                <FeedbackText>
                  {el.feedback}
                </FeedbackText>
                <FeedbackUserBlock>
                  <FeedbackUser>
                    <FeedbackUserName>
                      {el.name}
                      <FeedbackUserRate>
                        <ReactStars
                          value={el.star}
                          size={25}
                          activeColors={["gray", "gray", `${COLORS.redHover}`, `${COLORS.redHover}`, `${COLORS.mainRed}`,]}
                        />
                      </FeedbackUserRate>
                    </FeedbackUserName>
                  </FeedbackUser>
                  <Feedback/>
                </FeedbackUserBlock>
              </FeedbackCard>
            </>
          )
        })}
      </FeedbackContent>
    </FeedbackWrapper>
  )
}

export default FeedbackPage;