/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeeStructure } from 'src/Redux/slice/feeStructure';

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
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const feeStructure = useSelector((s) => s.feeStructure?.data);

  const getAllMeritListss = async () => {
    try {
      const res = await dispatch(getAllFeeStructure());
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllMeritListss();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4">
      {feeStructure.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <Accordion expanded={expanded === item._id} onChange={handleChange(item._id)}>
          <AccordionSummary>
            <Typography sx={{ fontFamily: 'Playfair Display' }} className=" !font-bold !custonFonts !text-bgColor">
              {item.title}
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
