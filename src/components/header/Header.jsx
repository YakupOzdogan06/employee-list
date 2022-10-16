import "./header.css";

const Header = (props) => {
  return (
    <div>
      <h2 className="header">Employee List</h2>
      <p className="header-alt">
        (Employees {props.count} to {props.count + 4})
      </p>
    </div>
  );
};

export default Header;
