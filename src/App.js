import { useEffect, useState } from "react";
import List from "./components/list/list";
import Detail from "./components/detail/detail";
import SearchBar from "./components/search/searchBar";
import "./App.css"


function App() {
  document.title = "유기동물 조회"
  console.log("App")

  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState();
  const [sido, setSido] = useState();



  const key = "Lg3xW55zPXZOKKGy%2F9yuUYPbKZnBYzrDHtABcdAECRZiwNt0igZqOXoADrNI7%2BoSNrgN6raYgbrkNG2%2FUWerGA%3D%3D"

  useEffect(() => {
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=32`)
      .then(response => response.json())
      .then(json => {
        setPets(json.response.body.items.item)
      })
      .catch(e => {
        console.log(e);
      })


    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=30&pageNo=1&serviceKey=${key}&_type=json`)
    .then(res => res.json())
    .then(json => {
      setSido(json.response.body.items.item)
    })
    .catch(e => {
      console.log(e);
    })

  }, [])

  const handleSelected = (data) => {
    setSelected(data)
  }


  const handleSearch = (bgnde, endde, sido) => {

    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=32&bgnde=${bgnde}&endde=${endde}&upr_cd=${sido}
  `)
      .then(response => response.json())
      .then(json => {
        setPets(json.response.body.items.item);
        setSelected(null);
      })
      .catch(e => {
        console.log(e);
      })

  }




  return (<>

    <h1 className="titleHead">유기동물 조회 서비스</h1>
     
    <p className="catch"><i className="fas fa-paw"></i> 사지말고 입양하세요</p>
    <SearchBar onSearch={handleSearch} />
    <div className="app">
      {selected ? <Detail target={selected} /> : <></> }
      <List pets={pets} sido={sido} onSelected={handleSelected} />
    </div>
  </>
  );
}

export default App;
