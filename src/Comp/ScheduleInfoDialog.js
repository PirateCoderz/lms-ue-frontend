/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-key */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const ScheduleInfoDialog = ({ open, handleClickOpen, bookedData, getDate, data, setData }) => {
  useEffect(() => {
    bookedData
      // eslint-disable-next-line array-callback-return
      && bookedData.bookings && bookedData.bookings.map((res) => {
        if (data.includes(res._id)) {
          setData((prev) => [...prev, data.find((item) => item._id !== res._id)])
        } else if (moment(res.bookingDateTime).format("hh:mm A") ===
          getDate) {
          setData((prev) => [...prev, res])
        }
      }
      )
  }, [bookedData, getDate])
  return (
    <Dialog
      open={open}
      onClose={handleClickOpen}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Booking Information"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {data
            ?
            data.map((res) => (
              <Grid container spacing={2}>
                {res.serviceIds &&
                  res.serviceIds.map((ress) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      className="booking-box rowSpaceBtw"
                      p={2}
                      m={2}
                    >
                      <Typography variant="body">
                        {ress.name !== null ? ress.name : "N/A"}
                      </Typography>
                      <Box className="rowCenter">
                        <Typography variant="subtitle2">
                          ${ress.price !== null ? ress.price : "N/A"}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                <Grid item sm={6}>
                  Customer Name
                </Grid>
                <Grid item sm={6}>
                  {res.userId !== null
                    ? res.userId.name !== null
                      ? res.userId.name
                      : "N/A"
                    : "N/A"}
                </Grid>
                <Grid item sm={6}>
                  Phone No.
                </Grid>
                <Grid item sm={6}>
                  {res.userId !== null
                    ? res.userId.phoneNo !== null
                      ? res.userId.phoneNo
                      : "N/A"
                    : "N/A"}
                </Grid>
                <Grid item sm={6}></Grid>
                <Grid item sm={6}>
                  Total ${res.amount !== null ? res.amount : "N/A"}
                </Grid>
                <Grid item sm={12}>
                  <strong style={{ color: "black" }}>
                    Notes from the Customer
                  </strong>{" "}
                  <br />
                  {res.description !== null ? res.description : "N/A"}<br /><br />
                </Grid>
                {/* <Grid item sm={12} sx={{ marginBottom: "20px" }}>
                    <Button
                      fullWidth
                      onClick={handleClickOpen}
                      variant="contained"
                    >
                      Done
                    </Button>
                  </Grid> */}
              </Grid>
            ))
            : null}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" autoFocus onClick={handleClickOpen}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleInfoDialog;
