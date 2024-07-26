import React from 'react';

const StudentDetails = () => {
    const Studentdata=[
        {
            
          id:1,
          name:'abc'
        },
      ]
    return (
        <div>
            <h1>Students</h1>
            {
                Studentdata.map((item)=>{
                    <li><link to={`/studentsSetails/${item.id}}></li>
                })
            }
        </div>
    );
};

export default StudentDetails;