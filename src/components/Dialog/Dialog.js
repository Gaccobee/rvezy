import "./Dialog.css";
import { Button } from "../../components";

const Dialog = ({ title, children, handleClose }) => {
  return (
    <div className="container">
      <section className="content">
        <h2>{title}</h2>
        {children}
        <div className="actionContainer">
            <Button onClick={handleClose} label={"Close"} />
        </div>
      </section>
    </div>
  );
};

export default Dialog;
