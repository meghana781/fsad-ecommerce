import React from 'react';

const Grades = () => {
  return (
    <div>
      <h1>Students Grades</h1>
      {/* Your table for grades */}
      <div className="Grades">
      <h1>Students Grades</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black',alignItems:'center'}}>
      <tr style={{ backgroundColor: '#f2f2f2'}}>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Id</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>OS</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Python</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>ADS</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>DBMS</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>AVERAGe</th>
        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Grades</th>
      </tr>
      <tr style={{ borderBottom: '1px solid black' }}>
        <td style={{ border: '1px solid black', padding: '8px' }}>1201</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>A</td>
      </tr>
      <tr style={{ borderBottom: '1px solid black' }}>
        <td style={{ border: '1px solid black', padding: '8px' }}>1202</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>80</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>84</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>94</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>85</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>94</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>B</td>
      </tr>
      <tr style={{ borderBottom: '1px solid black' }}>
        <td style={{ border: '1px solid black', padding: '8px' }}>1203</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>A</td>
      </tr>
      <tr style={{ borderBottom: '1px solid black' }}>
        <td style={{ border: '1px solid black', padding: '8px' }}>1204</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>87</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>90</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>66</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>B</td>
      </tr>
      </table>
    </div>
    </div>
  );
};

export default Grades;
