import { useNavigate } from "react-router-dom";
import classess from "./Content.module.scss";

const Content = (props) => {
  const navigate = useNavigate();

  return (
    <div className={classess.container}>
      <div className={classess.success}>
        <div className={classess.success__title}>Ваш перевод совершен.</div>
        <div className={classess.success__amount}>{props.amount}</div>
      </div>

      <div className={classess.btnGroup}>
        <div className={classess.item} onClick={props.onOpen}>
          <span>Показать квитанцию</span>
          <span>Квитанция сохранена в Истории</span>
        </div>
        <div className={classess.item}>
          <span>{props.recipient}</span>
          <span>Сохранить в Частые</span>
        </div>
      </div>

      <div
        onClick={() => navigate("https://kaspi.kz")}
        className={classess.btnBack}>
        <button>ВЕРНУТСЯ В ПЕРЕВОДЫ</button>
      </div>
    </div>
  );
};

export default Content;
