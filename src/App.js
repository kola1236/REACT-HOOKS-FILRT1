import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from './table/table';
import Loader from './loader/loader'

function App() {

const baseUrl = 'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const [contactData, setContactDate] = useState([]);

const sortData = (field) => {
  console.log(field)

 const copyData = contactData.concat();

 const sortData = copyData.sort(
 (a, b)=> {return a[field] > b[field] ? 1 : -1}
 );
 setContactDate(sortData)
}


// const [isLoading, setIsLoading] = useState(true);
useEffect(() =>{
  axios(baseUrl)
  .then(
    (res)=>{
      setContactDate(res.data);
      // setIsLoading(false)
    }
  );
}, []);




  return (
     <div className="container">
       <Loader/>
       <Table contactData={contactData} sortData={sortData}/>

       
     {/* {isLoading? <Loader/> : <Table smallData={smallDate} />} */}
     {/* {isLoading ? ( // если тру возращаем прелоадер
                <Loader/>
            ) : (
              <Table smallData={smallDate} />
            )} */}
     </div>
  );
}

export default App;
