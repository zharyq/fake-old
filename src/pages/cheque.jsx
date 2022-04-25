import Header from "../components/common/Header";
import MainLayout from "../components/common/MainLayout";
import MenuIcon from "@heroicons/react/outline/MenuIcon";
import Content from "../components/cheque/Content";
import { Suspense, useState, lazy, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { phoneConversion } from "../utils/phone";
import dateFormat from "dateformat";

function Cheque() {
  const Modal = lazy(() => import("../components/cheque/Modal"));
  const [hiddenState, setHiddenState] = useState(false);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  let data = {
    chequeID: query.get("chequeID"),
    recipient: query.get("recipient"),
    sender: query.get("sender"),
    datetime: dateFormat(query.get("datetime"), "dd.mm.yyyy HH:MM"),
    amount: query.get("amount"),
    phone: phoneConversion("+7" + query.get("phone")),
  };

  const toggleTouch = () => {
    setHiddenState(!hiddenState);
  };

  return (
    <MainLayout>
      <Header icon={<MenuIcon />} title="Переводы" />
      <Content
        amount={query.get("amount")}
        recipient={query.get("recipient")}
        onOpen={toggleTouch}
      />

      <Suspense fallback={<div children="loading..." />}>
        {hiddenState && <Modal data={data} onClose={toggleTouch} />}
      </Suspense>
    </MainLayout>
  );
}

export default Cheque;
