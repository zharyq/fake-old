import classess from "./MainLayout.module.scss";

function ReloadComponent() {
  const reloadPage = () => global.location.reload();
  return (
    <div className={classess.title}>
      <div
        className={classess.warning}
        children="Ширина экрана должна быть меньше 580 пикселей!"
      />
      <div
        className={classess.btnReload}
        onClick={reloadPage}
        children="Перезагрузить страницу"
      />
    </div>
  );
}

const MainLayout = ({ children }) => {
  if (global.window.innerWidth > 580) {
    return <ReloadComponent />;
  }
  return <div className={classess.container}>{children}</div>;
};

export default MainLayout;
