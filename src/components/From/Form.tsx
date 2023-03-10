import './Form.scss'
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useTelegram} from "../../hooks/useTelegram";

export const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')
  const { tg } = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject
    }
    tg.sendDate(JSON.stringify(data))
  }, [])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [])

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value)
  }

  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input
        className={'input'}
        type={'text'}
        placeholder={'Страна'}
        onChange={onChangeCountry}
        value={country}
      />
      <input
        className={'input'}
        type={'text'}
        placeholder={'Улица'}
        onChange={onChangeStreet}
        value={street}
      />
      <select className={'select'} onChange={onChangeSubject} value={subject}>
        <option value={'physical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  )
}