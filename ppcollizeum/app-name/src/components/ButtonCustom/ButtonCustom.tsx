import {RedButton, TransBlackButton, TransWhiteButton, WhiteButton} from "./style";

interface IButton{
  color: 'red' | 'white' | 'transWhite' | 'transBlack';
  text?: string;
}

const ButtonCustom = (props: IButton) => {
  const { color , text} = props;

  const config = [
    { col: 'red', buttonType: <RedButton>{text}</RedButton>},
    { col: 'white', buttonType: <WhiteButton>{text}</WhiteButton>},
    { col: 'transWhite', buttonType: <TransWhiteButton>{text}</TransWhiteButton>},
    { col: 'transBlack', buttonType: <TransBlackButton>{text}</TransBlackButton>}
  ]

  const { buttonType } = config.find((conf) => conf.col === color) || {};

  return(
    <>
      {buttonType}
    </>
  )
}

export default ButtonCustom