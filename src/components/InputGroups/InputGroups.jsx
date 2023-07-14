import "./InputGroup.css"
import { BsSearch } from "react-icons/bs"
const InputGroups = () => {
  return (
    <>
      
     <div className="input-group">
    <input type="text" className="cus_input" placeholder="Search everythin at Wallmart online and in store" />
    <span className="icon-container">
      <div className="icon-container-icon">
      <BsSearch color="#000" size={16}/>
      </div>
    </span>
  </div>
    </>
  )
}

export default InputGroups