/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timetable from 'react-timetable-events';
import { getTimeTableByDepartment } from 'src/Redux/slice/timeTable';
import { formatTimetable } from 'src/utils/formatTimeTable';

const Timetables = () => {
  const dispatch = useDispatch();
  const [dataTime, setDataTime] = useState();
  const [refetch, setRefetch] = useState(true);
  const user = useSelector((s) => s?.user?.data);
  const fetchtimeTableByDepartment = async (id) => {
    try {
      const res = await dispatch(getTimeTableByDepartment(id));
      console.log('restimetable', res);
      if (res.payload[0].fileData) {
        console.log('res.payload.fileData', res.payload[0].fileData);
        setDataTime(formatTimetable(res.payload[0].fileData));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log('dataTime', dataTime);

  useEffect(() => {
    console.log(user)
    if (user?.user) {
      fetchtimeTableByDepartment(user?.user?.courseName);
    }
  }, [dispatch, refetch, user]);

  return dataTime !== undefined ? (
    <Timetable events={dataTime} style={{ height: '500px' }} />
  ) : (
    <Typography variant="h4">No Recordes find</Typography>
  );
};

export default Timetables;
