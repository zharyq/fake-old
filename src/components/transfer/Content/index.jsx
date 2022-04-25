import classess from "./Content.module.sass";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import InputFormat from "react-number-format";
import UserIcon from "@heroicons/react/outline/UserCircleIcon";
import {
  conversionToBalanceType,
  removeSpacesAndCharacters,
} from "../../../utils/money";
import { useEffect } from "react";

const Content = () => {
  const [balanceState, setBalanceState] = useState("5 000,00 ₸");
  const [hiddenState, setHiddenState] = useState(true);
  const { register, control, handleSubmit } = useForm();
  const router = useNavigate();
  const [phoneInputState, setPhoneInputState] = useState();

  useEffect(() => {
    phoneInputState === 10 ? setHiddenState(false) : setHiddenState(true);
  }, [phoneInputState]);

  const onSubmitHandler = (data) => {
    const options = {
      symbol: ",00 ₸",
      space: true,
    };
    let balance = removeSpacesAndCharacters(balanceState, options);
    let amount = removeSpacesAndCharacters(data.amount, options);

    balance = balance - amount;
    setBalanceState(conversionToBalanceType(balance, options));
    amount = conversionToBalanceType(amount, { symbol: " ₸", space: true });

    let savingData = {
      chequeID: "7" + Math.floor(Math.random() * 10000000000),
      recipient: data.recipient,
      sender: "Казыбеков А.С.",
      datetime: new Date(),
      amount: amount,
      phone: data.phone,
    };

    router("/cheque?" + new URLSearchParams(savingData).toString());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className={classess.container}>
      <div className={classess.balance}>
        <div className={classess.balance__box}>
          <img
            src="https://kaspi.kz/img/gold.svg"
            alt=""
            className={classess.balance__image}
          />
          <div className={classess.balance__title}>Kaspi Gold</div>
        </div>
        <div className={classess.balance__amount}>{balanceState}</div>
      </div>
      <div className={classess.switch}>
        <div
          className={[classess.switch__item, classess.switch__item_active].join(
            " "
          )}>
          ТЕЛЕФОН
        </div>
        <div className={classess.switch__item}>КАРТА</div>
        <div className={classess.switch__item}>Kaspi QR</div>
      </div>
      <div className={classess.phone}>
        <div className={classess.phone__box}>
          <label>Телефон получателя</label>
          <Controller
            render={({ field: { onChange, value } }) => {
              return (
                <InputFormat
                  placeholder="+7 (   )  - -"
                  onValueChange={(v) => {
                    onChange(v.value);
                    setPhoneInputState(v.value.length);
                  }}
                  value={value}
                  format="+7 (###) ###-##-##"
                />
              );
            }}
            {...register("phone")}
            control={control}
          />
        </div>
        <UserIcon
          onClick={() => setHiddenState(!hiddenState)}
          className={classess.phone__image}
        />
      </div>
      <div
        className={classess.recipient}
        style={hiddenState ? { height: "0", overflow: "hidden" } : {}}>
        <input type="text" placeholder="Алдияр С." {...register("recipient")} />
        <div className={classess.recipient__subtitle}>
          Деньги поступят на карту Kaspi Gold
        </div>
      </div>
      <div className={classess.amount}>
        <Controller
          render={({ field: { onChange, value } }) => {
            return (
              <InputFormat
                onValueChange={(v) => onChange(v.value)}
                value={value}
                inputMode="numeric"
                suffix=" ₸"
                thousandSeparator=" "
                maxLength={10}
                placeholder="0 ₸"
              />
            );
          }}
          {...register("amount")}
          control={control}
        />
      </div>
      <div className={classess.messagebox}>
        <input type="text" placeholder="Сообщение получателю" />
        <UserIcon className={classess.messagebox__icon} />
      </div>
      <div className={classess.messages}>
        <div>Рахмет!</div>
        <div>За обед</div>
        <div>Возвращаю :)</div>
      </div>
      <div className={classess.comission}>Комиссия 0 ₸</div>
      <div className={classess.submit}>
        <input type="submit" value="ПЕРЕВЕСТИ" />
      </div>
    </form>
  );
};

export default Content;
