/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// eslint-disable-next-line import/no-unresolved
// import imgs from "../../Asset/profile-img.png";
// eslint-disable-next-line import/extensions
// import { getScheduleService } from "../../Redux/slice/scheduleSlice";
import ScheduleInfoDialog from "./ScheduleInfoDialog";

const datss =  [
  {
      "_id": "6452264e1f6de3a3a00c56dc",
      "userId": {
          "_id": "6452264e1f6de3a3a00c56d9",
          "name": "Tajassam Ali",
          "phoneNo": "0900786543",
          "createdAt": "2023-05-03T09:15:58.257Z",
          "updatedAt": "2023-05-03T09:15:58.257Z",
          "__v": 0
      },
      "stylistId": "644505b97024dc9c4ebd8087",
      "no_Prefrence": false,
      "serviceIds": [
          {
              "_id": "6444d6c8ddaca60e66c70ea5",
              "mainId": "6444d6a360f795c94eb0de8a",
              "name": "Hair braiding ",
              "price": 10,
              "duration": 30,
              "color": "#b4e278",
              "createdAt": "2023-04-23T06:57:12.309Z",
              "updatedAt": "2023-04-23T06:57:12.309Z",
              "__v": 0
          }
      ],
      "amount": 10,
      "description": "",
      "status": "pending",
      "bookingDateTime": "2023-05-03T07:00:00.000Z",
      "bookingDateTimeEnd": "2023-05-03T07:30:00.000Z",
      "createdAt": "2023-05-03T09:15:58.699Z",
      "updatedAt": "2023-05-03T09:15:58.699Z",
      "bookingNo": 344,
      "__v": 0
  }
]

const time = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 AM",
  "12:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
];
const colors = [
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
  "#5AEE72",
  "#5272E9",
  "#24B0C9",
  "#FD9E30",
  "#FD3055",
];

const Schedule = ({ calenderDate }) => {
  const [bookedData, setBookedData] = useState(null);
  const [getDate, setGetDate] = useState(null);
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  // const datss = useSelector((state) => state.schedule.data);
  // eslint-disable-next-line prefer-const
  let selectDate = new Date(calenderDate);
  // useEffect(() => {
  //   dispatch(getScheduleService(selectDate.toISOString() - 1));
  // }, [dispatch, selectDate]);

  // Pagination
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(5);
  const [lengths, setLengths] = useState(0);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    setLengths(parseInt(datss?.length / productPerPage));
    setCount(lengths + 1);
  }, [datss]);
  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts = datss?.slice(indexOfFirstPost, indexOfLastPost);
  // End Pagination
  const handleClickOpen = () => {
    setData([]);
    setOpen(!open);
  };
  return (
    <Paper sx={{ width: "100%" }}>
      {/* Header Section Start */}
      <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          className="rowJusCenters padding cellHeight"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;", color: 'transparent' }}
        >
          <Typography className="calenderHeadFont">PDT GMT-7</Typography>
        </Grid>
        {currentPosts &&
          currentPosts.map((res, index) => (
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              key={index}
              className="rowJusCenter padding cellHeight"
              sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;" }}
            >
              {/* <Avatar alt="profile" src={imgs} sx={{ width: 35, height: 35 }} /> */}
              <Typography className="calenderHeadFont" px={1}>
                {/* {res.stylist.name}
                <br />
                <span style={{ color: "gray" }}>
                  {res.bookings.length} Bookings
                </span> */}
              </Typography>
              <br />
            </Grid>
          ))}
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          className="rowJusCenters padding cellHeight"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;" }}
        >
          <Typography className="calenderHeadFont">PDT GMT-7</Typography>
        </Grid>
      </Grid>
      {/* Header Section End */}
      {/* Body Section Start */}
      <Grid container>
        {/* Left Time Section */}
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
          <Grid container>
            {time.map((res, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                key={index}
                sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;" }}
                className="rowJusCenters padding1 cellHeight"
              >
                <Typography className="calenderHeadFont">{res}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Left Time Section */}
        {/* Content Section */}
        {currentPosts.map((ress, indexs) => (
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} key={indexs} className="cellHeight">
            <Grid container>
              {time.map((res, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  key={index}
                  sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;" }}
                  className="rowJusCenter cellHeight"
                >
                  {/* {ress.bookings.length === 0 ? (
                    <Typography
                      className="padding2 calenderHeadFont"
                      sx={{ color: "transparent" }}
                    >
                      333
                    </Typography>
                  ) : ress.bookings.length !== 0 &&
                    ress.bookings.find(
                      (item) =>
                        moment(item.bookingDateTime).format("hh:mm A") === res
                    ) ? (
                    <Typography
                      className="padding3 calenderHeadFont"
                      onClick={() => {
                        handleClickOpen();
                        setBookedData(ress);
                        setGetDate(res);
                      }}
                      sx={{
                        cursor: "pointer",
                        backgroundColor:
                          ress.bookings.length !== 0 &&
                          ress.bookings.find(
                            (item) =>
                              moment(item.bookingDateTime).format("hh:mm A") ===
                              res
                          ) &&
                          colors[index],
                        color:
                          ress.bookings.length !== 0 &&
                          ress.bookings.find(
                            (item) =>
                              moment(item.bookingDateTime).format("hh:mm A") ===
                              res
                          ) &&
                          "white",
                        border: "1px solid gray",
                        width: "100%",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;",
                      }}
                    >
                      {ress.stylist.name}
                      <br />
                      {ress.bookings.length !== 0 &&
                        ress.bookings.map((ressss) => (
                          // eslint-disable-next-line react/jsx-key
                          <span>
                            {moment(ressss.bookingDateTime).format(
                              "hh:mm A"
                            // eslint-disable-next-line prefer-template
                            ) === res && "Total: $" + ressss.amount}
                            &nbsp;</span>
                        ))}
                    </Typography>
                  ) : (
                    <Typography
                      className="padding2 calenderHeadFont"
                      sx={{ color: "transparent" }}
                    >
                      333
                    </Typography>
                  )} */}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
        {/* Content Section */}
        {/* Right Time Section */}
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <Grid container>
            {time.map((res, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                key={index}
                className="rowJusCenter padding1 cellHeight"
                sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;" }}
              >
                <Typography className="calenderHeadFont">{res}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="pagination-container"
          p={3}
        >
          <Pagination
            count={count}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            variant="outlined"
            shape="rounded"
            sx={{ float: "right" }}
            onChange={handleChange}
          />
        </Grid>
        {/* Right Time Section */}
      </Grid>
      {/* Body Section End */}
      <ScheduleInfoDialog
        open={open}
        handleClickOpen={handleClickOpen}
        bookedData={bookedData}
        getDate={getDate}
        data={data}
        setData={setData}
      />
    </Paper>
  );
};

export default Schedule;
