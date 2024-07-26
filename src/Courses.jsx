import React from 'react';

const Courses = () => {
  return (
    <div>
      <h1>Courses Taken</h1>
      {/* Your table for courses */}
      <h1>Courses Taken</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black'}}>
      <tr style={{ backgroundColor: '#f2f2f2'}}>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Id</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Branch</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Course</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Starting Date</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Ending Date</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Mentor</th>
                
      </tr>
      <tr style={{ borderBottom: '1px solid black' }}>
        <td style={{ border: '1px solid black', padding: '8px' }}>1201</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>IT</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Web Development</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>30/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Mr.Kishor</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>1202</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>IT</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Python</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>35/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Mr.Kishor</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>1203</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>IT</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Python</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>31/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Mr.Kishor</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>1204</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>IT</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Python</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>31/2/20023</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Mr.Kishor</td>
      </tr>
      </table>
    </div>
  );
};

export default Courses;
