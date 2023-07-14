import "./Section.css"

const Section = ({ imgsrc , title , shop = "shop now" } ) => {
  return (
    <div className="small-sec">
      <img className="section_img" loading="lazy" srcset={imgsrc}></img>
      <div className="section_text">
        <p>{title}</p>
        <a href="#">{shop}</a>
      </div>
    </div>
  )
}

export default Section