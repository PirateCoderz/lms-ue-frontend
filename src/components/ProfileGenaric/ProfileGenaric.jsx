/* eslint-disable react/no-unknown-property */
/* eslint-disable arrow-body-style */
import { Grid, Typography, Box } from '@mui/material'
import React from 'react'

const ProfileGenaric = ({ item }) => {
    return (
        <Grid display="flex" alignItems="center" container spacing={2}>
            <Grid item md={6} xs={12}>
                <Box p={8} display="flex" flexDirection="column" gap={2}>
                    <div className="w-48 h-48 bg-indigo-100  rounded-full shadow-2xl  inset-x-0  flex items-center justify-center text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="border-b">
                        <h1 className="text-4xl font-medium text-gray-700">
                            {item?.type === 'Student' ? item?.studentName : item?.teacherName}{' '}
                            <span className="font-light text-gray-500">s/o</span>
                        </h1>
                        <p className="font-light text-gray-600 mt-3">{item?.fatherName}</p>

                        <p className="mt-8 text-gray-500">
                            Faculty of - {item?.type === 'Student' ? item?.courseName : item?.deparment}
                        </p>
                        <p className="mt-2 text-gray-500">Govt Graduate College Samanabad Fsd</p>
                    </div>
                </Box>
            </Grid>
            <Grid item md={6} xs={12}>
                <Box
                    shadow={2}
                    p={4}
                    sx={{
                        backgroundColor: '#fff',
                        boxShadow: 6,
                    }}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >

                    {item?.type === 'Teacher' ? <>
                        <Typography fontWeight="bold">
                            QUALIFICATIONS : <Typography component="span">{item?.qualifications}</Typography>
                        </Typography>
                        <Typography fontWeight="bold">
                            DESIGNATION : <Typography component="span">{item?.designation}</Typography>
                        </Typography>
                    </> : null}
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProfileGenaric