import '../index.css'

function ShowInforLine(props) {
  return (
    <div className="container">
      {props.typeProduct[props.typeId] && <hr
        className="hr-text"
        data-content={props.typeProduct[props.typeId].name}
      />}
    </div>
  )
}
export default ShowInforLine;