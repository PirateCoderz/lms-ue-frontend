/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SectionTitle from '../Common/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeritList } from 'src/Redux/slice/meritList';
import { useEffect } from 'react';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));



const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(null);
  const dispatch = useDispatch();
  const meritList = useSelector((s)=> s.meritList?.data)
  console.log("meritList--------->",meritList)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getAllMeritListss = async () => {
    try {
      const res = await dispatch(getAllMeritList());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMeritListss();
  }, [dispatch]);

  return (
    <div className="flex p-24 flex-col gap-4">
      <SectionTitle color="bgColor" bgColor="bg-bgColor" title="Feedback" para="Explore" />
      {meritList.map((item) => (
        <Accordion expanded={expanded === item._id} onChange={handleChange(item._id)}>
          <AccordionSummary>
            <Typography sx={{ fontFamily: 'Playfair Display' }} className=" !font-bold !custonFonts !text-bgColor">
              {item.courseName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <a href={item.file} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
