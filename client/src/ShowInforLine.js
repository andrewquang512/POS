import '../index.css'
import TypeProducts from './TypeProducts';

function ShowInforLine(props){
    return(
        <div className="container">
          <hr className="hr-text" data-content={TypeProducts[props.typeId].name} />
        </div>
    )

}
export default ShowInforLine;