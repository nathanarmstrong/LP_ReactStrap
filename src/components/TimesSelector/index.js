import React, { useEffect,useRef,useState } from "react";
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button} from "reactstrap";


const TimeSelector = (props) => {

  const interval = 30;
  let times = [];
  let startTime = 0;
  const opendTime = 8;
  const endTime = 20;
  const timeOfDay = ['AM', 'PM'];

  let disabledDates = ['9:00 AM','10:30 PM','12:30 PM','11:00 AM','7:30 PM']

  for (var i=0;startTime<24*60; i++) {
    var hh = Math.floor(startTime/60); // getting hours of day in 0-24 format
    var mm = (startTime%60); // getting minutes of the hour in 0-55 format
    // create readable time
    let time = ("" + ((hh==12 || hh==0)?12:hh%12)).slice(-2) + ':' + ("0" + mm).slice(-2) + " " + timeOfDay[Math.floor(hh/12)];    startTime = startTime + interval;
    //IF TIME WITHIN THE HOURS OF OPPERATION PUSH TIME TO ARRAY

    if(hh + (mm/60) >= opendTime && hh + (mm/60) <= endTime){
      let disabledDate = disabledDates.includes(time);
      console.log('times', disabledDate )
      let obj = {
        time: time,
        disabled: disabledDate
      }
      times.push(obj)
    }
  }
  console.log('times', props);

  return(
    <React.Fragment>
      <Dropdown disabled={props.disableDates} isOpen={props.dropdownOpen} toggle={props.toggle} >
        <DropdownToggle tag="div">
          <Button disabled={props.disableDates}  color="link" style={{padding: 0, color: '#EA1B27', textTransform: 'none'}}>
            {props.timeLine ?props.timeLine  : 'Select Time'}
          </Button>
        </DropdownToggle>
        <DropdownMenu style={{maxHeight: 210, overflowY: 'scroll'}}>
          {times.map(time => {
            return(
              <DropdownItem onClick={() => props.setTimeLine(time.time)} disabled={time.disabled}>{time.time}</DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default TimeSelector;
