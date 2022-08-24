import "./detail.css"

function Detail(props) { //props.target을 받아올건데 props로 해주면 target까지 가줘야함. {target} 만 해두면 바로 찍을 수 있음.
    //있을때만 컴포넌트를 추가해주는 조건을 App에서 줬음. undefined면 안나오게~ 

    const handleClick =(data)=>{}



    return (<div className="detailBox">
        <h2 className="datailHead">{props.target.kindCd}  <i id="icon" className="fas fa-home" onClick={handleClick}></i></h2>
      
        <div className="detailInfo">
            <img src={props.target.popfile} className="detailImg" />
            <table>
                <tr>
                <th>품종</th>
                <td> {props.target.kindCd}</td>
                <th>상태</th>
                <td>{props.target.processState}</td>
                </tr>
                   
                <tr>
                <th>성별</th>
                <td>{props.target.sexCd}</td>
                <th>중성화여부</th>
                <td>{props.target.neuterYn}</td>
                </tr>
              
                <tr>
                <th>나이</th>
                <td>{props.target.age}</td>
                <th>체중</th>
                <td>{props.target.weight}</td>
                </tr>
                <tr>
                <th>보호소 이름</th>
                <td> {props.target.careNm}</td>
                <th>보호소 연락처</th>
                <td> {props.target.careTel}</td>
                </tr>
                <tr>
                <th>보호장소</th>
                <td> {props.target.careAddr}</td>
                <th>관할기관</th>
                <td> {props.target.orgNm}</td>
                </tr>
                <tr>
                <th>담당자</th> 
                <td>{props.target.chargeNm}</td>
                <th>담당자 연락처</th> 
                <td>{props.target.officetel}</td>
                </tr>
             
            </table>
           
        </div>
    </div>);
}

export default Detail;