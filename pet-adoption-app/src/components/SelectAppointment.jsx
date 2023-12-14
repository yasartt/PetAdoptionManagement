import React, { useEffect, useState } from 'react';

const SelectAppointment = ({ props }) => {
  const [seciliSeans, setSeciliSeans] = useState(0);
  const [seciliGun, setSeciliGun] = useState(0);
  const [seciliHafta, setSeciliHafta] = useState(0);

  const Weekdays = {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday',
  };

  const HourNames = {
    0: '09:00-09:30',
    1: '09:30-10:00',
    2: '10:00-10:30',
    3: '10:30-11:00',
    4: '11:00-11:30',
    5: '11:30-12:00',
    6: '13:00-13:30',
    7: '13:30-14:00',
    8: '14:00-14:30',
    9: '14:30-15:00',
    10: '15:00-15:30',
    11: '15:30-16:00',
    12: '16:00-16:30',
    13: '16:30-17:00',
    14: '17:00-17:30',
    15: '17:30-18:00',
    16: '18:00-18:30',
    17: '18:30-19:00',
    18: '19:00-19:30',
    19: '19:30-20:00',
  };

  useEffect(() => {
    // call to the api with veterinarian id to get the available appointment hours

    console.log('seciliGun: ', seciliGun);
    console.log('seciliSeans: ', seciliSeans);
  }, []);

  const calculateDateRange = (hafta) => {
    const today = new Date();
    const startDate = new Date(today);
    const endDate = new Date(today);
  
    const startDayOfWeek = 1; // Monday
    const endDayOfWeek = 1; // Sunday
  
    const daysToAdd = startDayOfWeek - today.getDay() + (hafta * 7);
    const daysToAddEnd = endDayOfWeek - today.getDay() + (hafta * 7) + 6;
  
    startDate.setDate(today.getDate() + daysToAdd);
    endDate.setDate(today.getDate() + daysToAddEnd);
  
    const startMonth = startDate.toLocaleString('en-US', { month: 'short' });
    const endMonth = endDate.toLocaleString('en-US', { month: 'short' });
  
    return `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`;
  };
  

  const ButtonSet = ({ gunIndex }) => (
    <div style={{ display: 'inline-block', margin: '0 10px' }}>
      <h3 style={{ fontFamily: 'Helvetica', fontSize: '13px', textAlign: 'center' }}>
        {Weekdays[gunIndex]}
      </h3>
      {[...Array(19)].map((_, saatIndex) => (
        <button
          key={saatIndex}
          style={isItAvailable(gunIndex, saatIndex) ? buttonStyleAvailable : buttonStyleDisabled}
          onClick={() => handleSecim(gunIndex, saatIndex)}
        >
          <p>{HourNames[saatIndex]}</p>
        </button>
      ))}
    </div>
  );

  const isItAvailable = (gunIndex, saatIndex) => {
    return true;
  };

  const handleSecim = (gunIndex, saatIndex) => {
    console.log('gunIndex: ', gunIndex);
    console.log('saatIndex: ', saatIndex);
    setSeciliGun(gunIndex);
    setSeciliSeans(saatIndex);
  };

  const handleIncreaseWeek = () => {
    setSeciliHafta((prevHafta) => prevHafta + 1);
  };

  const handleDecreaseWeek = () => {
    setSeciliHafta((prevHafta) => Math.max(prevHafta - 1, 0));
  };

  const buttonStyleAvailable = {
    backgroundColor: 'purple',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    width: '130px',
    height: '40px',
    cursor: 'pointer',
    display: 'block',
    margin: '5px 0 0 0',
  };

  const buttonStyleDisabled = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    width: '130px',
    height: '40px',
    cursor: 'pointer',
    display: 'block',
    margin: '5px 0 0 0',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Helvetica', marginBottom: '10px' }}>Vet. Mehmet Dedeler</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <button onClick={handleDecreaseWeek}>&#8592; Previous Week</button>
        <h2 style={{ fontFamily: 'Helvetica' }}>{calculateDateRange(seciliHafta)}</h2>
        <button onClick={handleIncreaseWeek}>Next Week &#8594;</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {[...Array(7)].map((_, index) => (
          <ButtonSet key={index} gunIndex={index} />
        ))}
      </div>
      
    </div>
  );
};

export default SelectAppointment;
