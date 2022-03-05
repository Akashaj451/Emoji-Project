import React from "react";
import Dic from "./Dic.jsx";
import emojipedia from "../emojipedia.js";

function sortDic(dics){
  return(
<Dic
  key={dics.id}
  value={dics.id}
  img={dics.emoji}
  name={dics.name}
  tel={dics.meaning}
/>
);
}

function App() {
  return (
      <div>
       <h1> <span>emojipedia</span></h1>
       <dl className="dictionary">
      {emojipedia.map(sortDic)}
      </dl>
    </div>
  );
}
export default App;
