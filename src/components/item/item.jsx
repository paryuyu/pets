
import "./item.css"

// onSelected를 받아줘야함.
function Item({ data , onSelected}) { //매개변수로 들어오는 것에서 data값만 추출해서 사용하겠다는 뜻임.
    //props로 한 건 한 건의 정보를 카드형태로 만들거임.
       
    return (<div className="itemBox" onClick={() => onSelected(data)}>
        <img src={data.popfile/**썸네일사진만 받아오기*/} alt={"thumbnail"} className="thumbnail" />
        <div className="itemInform">
        <p>{data.kindCd}({data.colorCd})</p>
        <p id="happenPlace"><b>발견장소</b> {data.happenPlace}</p>
        </div>
    </div>);
}

export default Item;