//리스트부터 만들자
//App으로부터 전달받은 item을 전달받는 컴포넌트가 될 것임.
import Item from "../item/item";
import "./list.css"

function List(props) {

   
    return (<div className="listLine">
        {props.pets.map(pet => {
            //props에 pets로 받아와준다고 생각하고 짜는 것. ->props를 어디서 받아오는지 보자.
            //key는 고유번호로 받아오기.
           
            return (<Item key={pet.desertionNo } data={pet } onSelected={props.onSelected} onClicked={props.targetevt} />) //App에서 받아온 selected를 받아오고, 다시 item으로 넘겨줘야함.
            //이 데이터를 아이템에서 바로 받아감.

        })}
    </div>);
}

export default List;