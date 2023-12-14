import React, { useEffect, useState } from 'react';

const SelectAppointment = ( {props}) => {
    
    //const {vet_id} = props;
    const [seciliSeans, setSeciliSeans] = useState(0);
    const [seciliGun, setSeciliGun] = useState(0);

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
  };

  useEffect(() => {
    // call to the api with veterinarian id


    console.log('seciliGun: ', seciliGun);
    console.log('seciliSeans: ', seciliSeans);
  }, []);

  const ButtonSet = ({ gunIndex }) => (
    <div style={{ display: 'inline-block', margin: '0 10px' }}>
      <h3 style={{ fontFamily: 'Helvetica', fontSize: '13px', textAlign: 'center' }}>
        {Weekdays[gunIndex]}
      </h3>
      {[...Array(10)].map((_, saatIndex) => (
        <button
          key={saatIndex}
          style={isItAvailable(gunIndex, saatIndex) ? buttonStyleAvailable: buttonStyleDisabled}
          onClick={() => handleSecim(gunIndex, saatIndex)}
        >
          <p>{HourNames[saatIndex]}</p>
        </button>
      ))}
    </div>
  );

  const isItAvailable = (gunIndex, saatIndex) => {
    

    return true;
  }

  const handleSecim = (gunIndex, saatIndex) => {
    console.log('gunIndex: ', gunIndex);
    console.log('saatIndex: ', saatIndex);
    setSeciliGun(gunIndex);
    setSeciliSeans(saatIndex);
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {[...Array(7)].map((_, index) => (
          <ButtonSet key={index} gunIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default SelectAppointment;
