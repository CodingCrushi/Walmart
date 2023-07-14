import "./Join.css"

const Join = ({title , imgsrc}) => {
  return (
    <div className="join_sec">
    <img className="section_img_join" loading="lazy" srcset={imgsrc}></img>
    <div className="section_text_join">
        <p className="sec-titile">{title}</p>
        <p className="sub-sec">Terms simple</p>
        <a href="#" className="shop_now">join Walmart+</a>
      </div>
    </div>
  )
}

export default Join