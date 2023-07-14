import "./MainSection.css"

const MainSection = ({ imgsrc , title}) => {
  return (
    <div className="big-sec">
      <img className="section_img_b" loading="lazy" srcset={imgsrc}></img>
      <div className="section_text_b">
        <p className="sup-sec">Get it delivered</p>
        <p className="sec-titile">{title}</p>
        <a href="#" className="shop_now">shop now</a>
      </div>
    </div>
  )
}

export default MainSection