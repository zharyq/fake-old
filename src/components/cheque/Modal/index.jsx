import classess from "./Modal.module.scss";
import CloseIcon from "@heroicons/react/outline/XIcon";
import ShareIcon from "@heroicons/react/outline/ShareIcon";

const Modal = (props) => {
  return (
    <div className={classess.container}>
      <div className={classess.btnGroup}>
        <CloseIcon
          onClick={props.onClose}
          className={classess.btnGroup__item}
        />
        <ShareIcon className={classess.btnGroup__item} />
      </div>

      <div className={classess.mainModal}>
        <div className={classess.header}>
          <div
            className={classess.header__image}
            children={
              <img
                src="https://fake18.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2Fkaspi.ec3eda32.png?url=%2F_next%2Fstatic%2Fmedia%2Fkaspi.ec3eda32.png&w=256&q=75"
                alt=""
              />
            }
          />
          <div className={classess.header__title}>Перевод клиенту Kaspi</div>
          <div className={classess.hr} />
          <div className={classess.header__receiver}>
            <span>{props.data?.recipient}</span>
            <span>{props.data?.phone}</span>
          </div>
        </div>

        <div className={classess.content}>
          <div className={classess.content__title}>
            Перевод успешно совершен
          </div>
          <div className={classess.content__amount}>{props.data?.amount}</div>
        </div>

        <div className={classess.footer}>
          <div className={classess.footer__row}>
            <span>№ квитанции</span>
            <span>{props.data.chequeID}</span>
          </div>
          <div className={classess.footer__hr} />

          <div className={classess.footer__row}>
            <span>Дата и время</span>
            <span>{props.data?.datetime}</span>
          </div>
          <div className={classess.footer__hr} />
          <div className={classess.footer__row}>
            <span>Комиссия</span>
            <span>0 ₸</span>
          </div>
          <div className={classess.footer__hr} />
          <div className={classess.footer__row}>
            <span>Отправитель</span>
            <span>{props.data?.sender}</span>
          </div>
          <div className={classess.footer__hr} />
          <div className={classess.footer__row}>
            <span>Откуда</span>
            <span>Kaspi Gold</span>
          </div>
          <div className={classess.footer__hr} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
