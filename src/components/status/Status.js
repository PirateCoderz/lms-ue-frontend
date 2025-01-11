/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserStatus } from 'src/Redux/slice/attendence';
import moment from 'moment';

const Status = ({ data, refetch }) => {
  const [status, setStatus] = useState(null);
  const [value, setValue] = useState(data.value); // add state variable to keep track of value
  const dispatch = useDispatch();

  useEffect(() => {
    async function getStatus() {
      const date = moment(value).toDate();
      const month = date?.toLocaleDateString('en-US', { month: 'short' });
      const day = date?.toLocaleDateString('en-US', { day: 'numeric' });
      const formattedDate = `${month} ${day}`;
      console.log('formattedDate', formattedDate);

      try {
        const res = await dispatch(getUserStatus({ studentId: data.studentId, date: formattedDate }));
        console.log('res->', res);
        if (res.payload.status) {
          setStatus(res.payload.status);
        }
        if (res.payload === 'Request failed with status code 404') {
          setStatus('pending');
        }
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (value !== data.value) {
      console.log(data.value);
      // check if value has changed
      setValue(data.value); // update value state
    } else {
      getStatus(); // otherwise, fetch status
    }
  }, [value, data.value, data.studentId, refetch]); // add value state to dependency array

  return status;
};

export default Status;
