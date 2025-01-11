/* eslint-disable import/no-unresolved */
import { Typography } from '@mui/material';
import React from 'react';
import Schedule from 'src/Comp/Schedule';

import Timetable from 'react-timetable-events';

const Departments = () => (
  <Timetable
    events={{
      monday: [
        {
          id: 1,
          name: 'Custom Event 1',
          type: 'custom',
          startTime: new Date('2018-02-23T11:30:00'),
          endTime: new Date('2018-02-23T13:30:00'),
        },
        {
          id: 2,
          name: 'Custom Event 2',
          type: 'custom',
          startTime: new Date('2018-02-23T14:30:00'),
          endTime: new Date('2018-02-23T15:30:00'),
        },
        {
          id: 3,
          name: 'Custom Event 2',
          type: 'custom',
          startTime: new Date('2018-02-23T16:30:00'),
          endTime: new Date('2018-02-23T17:30:00'),
        },
      ],
      tuesday: [
        {
          id: 2,
          name: "Custom Event 2",
          type: "custom",
          startTime: new Date("2018-02-22T12:30:00"),
          endTime: new Date("2018-02-22T14:30:00"),
        },
        {
          id: 3,
          name: "Custom Event 3",
          type: "custom",
          startTime: new Date("2018-02-22T16:30:00"),
          endTime: new Date("2018-02-22T18:45:00"),
        },
      ],
      wednesday: [],
      thursday: [],
      friday: [],
    }}
    style={{ height: '500px' }}
  />
);

export default Departments;
