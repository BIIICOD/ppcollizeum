import {RedButton, TransBlackButton, TransWhiteButton, WhiteButton} from "./style";

interface IButton{
  color: 'red' | 'white' | 'transWhite' | 'transBlack';
  text?: string;
  onClick?: any
}

const ButtonCustom = (props: IButton) => {
  const { color , text, onClick} = props;

  const config = [
    { col: 'red', buttonType: <RedButton onClick={onClick}>{text}</RedButton>},
    { col: 'white', buttonType: <WhiteButton onClick={onClick}>{text}</WhiteButton>},
    { col: 'transWhite', buttonType: <TransWhiteButton onClick={onClick}>{text}</TransWhiteButton>},
    { col: 'transBlack', buttonType: <TransBlackButton onClick={onClick}>{text}</TransBlackButton>}
  ]

  const { buttonType } = config.find((conf) => conf.col === color) || {};

  return(
    <>
      {buttonType}
    </>
  )
}

export default ButtonCustom