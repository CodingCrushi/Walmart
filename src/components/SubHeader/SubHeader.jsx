import "./SubHeader.css";
import { BsChevronDown } from "react-icons/bs";

const SubHeader = () => {
  return (
    <div className="container-fluid p-0 bg-primary">
      <div className="subHeader">
        <img className="subheader_item_img" src="/images/phone.png" alt="" />
        <div className="subheader_item">
          how to want your items ?
          <BsChevronDown className="m-2" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
