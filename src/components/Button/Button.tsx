import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import './Button.scss'

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={'button ' + rest.className}>
      {children}
    </button>
  )
}