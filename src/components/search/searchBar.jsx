import { useEffect, useRef } from "react";
import "./searchBar.css"


function SearchBar({onSearch}) {

    const bgnde = useRef();
    const endde = useRef();
    const sido = useRef();

    useEffect(()=>{
        const today = new Date().toISOString().slice(0,10);
        endde.current.value = today;
    },[])



    const searchHandle = (evt) => {
        evt.preventDefault(); 
       console.log(sido.current.value)
        onSearch(
            bgnde.current.value.replaceAll("-", ""),
            endde.current.value.replaceAll("-", ""),
            sido.current.value
        );
    }


    return (
        <div className="searchBox">
            <form onSubmit={searchHandle}>
                <input type="date" ref={bgnde} className="date" placeholder=""/> ~
                <input type="date" ref={endde} className="date"/>
                
                <select ref={sido}>
                    <option value="6110000">서울특별시</option>
                    <option value="6260000">부산광역시</option>
                    <option value="6270000">대구광역시</option>
                    <option value="6280000">인천광역시</option>
                    <option value="6290000">광주광역시</option>
                    <option value="5690000">세종특별자치시</option>
                    <option value="6300000">대전광역시</option>
                    <option value="6310000">울산광역시</option>
                    <option value="6410000">경기도</option>
                    <option value="6110000">강원도</option>
                    <option value="6420000">강원도</option>
                    <option value="6430000">충청북도</option>
                    <option value="6440000">충청남도</option>
                    <option value="6450000">전라북도</option>
                    <option value="6460000">전라남도</option>
                    <option value="6470000">경상북도</option>
                    <option value="6480000">경상남도</option>
                    <option value="6500000">제주특별자치도</option>
                </select>
                <button type="submit"><i class="fas fa-search"></i></button>

               
            </form>
        </div>
    );
}

export default SearchBar;