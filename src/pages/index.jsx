import ArrowLeftIcon from "@heroicons/react/outline/ArrowLeftIcon";
import Header from "../components/common/Header";
import MainLayout from "../components/common/MainLayout";
import Content from "../components/transfer/Content";

function Index() {
  return (
    <MainLayout>
      <Header icon={<ArrowLeftIcon />} title="Клиенту Kaspi" />
      <Content />
    </MainLayout>
  );
}

export default Index;
