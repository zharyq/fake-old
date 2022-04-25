import classess from "./Header.module.scss";

const Header = ({ icon, title }) => {
  return (
    <div className={classess.container}>
      <div className={classess.icon}>{icon}</div>
      <div className={classess.title}>{title}</div>
    </div>
  );
};

export default Header;
