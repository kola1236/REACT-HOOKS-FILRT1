import React from 'react'

const Table = ({sortData, contactData}) => {
    return (

        <div className="table">
        <thead>
          <tr>
            <th >id</th>
            <th onClick={()=>{sortData('firstName')}}>FirstName</th>
            <th onClick={()=>{sortData('lastName')}}>LastName</th>
            <th onClick={()=>{sortData('email')}}>email</th>
            <th onClick={()=>{sortData('phone')}}>phone</th>
          </tr>
        </thead>
        <tbody>
           
               {contactData.map(
                 item=>(
                <tr key={item.id + item.email}>
                   <td>{item.id}</td>
                   <td>{item.firstName}</td>
                   <td>{item.lastName}</td>
                   <td>{item.email}</td>
                   <td>{item.phone}</td>
                </tr>
                
               ))}
           
        </tbody>
      </div>
    )
}

export default Table