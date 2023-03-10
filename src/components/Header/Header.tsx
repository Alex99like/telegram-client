import {Button} from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.scss'

export const Header = () => {
  const { onClose, user, tg } = useTelegram()

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {user?.username}
      </span>
    </div>
  )
}