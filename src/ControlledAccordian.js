import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { useTheme, makeStyles, withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  expansion: {
    backgroundImage:
      'url("https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=")',
    width: "50%"
  }
});

function ControlledAccordion(props){
  const classes = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')} className = {classes.expansion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
      <b>What is a hackathon?</b>
      </AccordionSummary>
      <AccordionDetails>
      <div>
        A hackathon is an event where people join teams and work on a programming or otherwise technical project over a short period of time.
        The projects are then judged in different "tracks" which are categories that have different prizes.
      </div>
      </AccordionDetails>
    </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className = {classes.expansion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <b>Do I need to know how to code to participate in HackSmith?</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          All skill levels and backgrounds are welcome, whether that involves tech, art, history, or anything else.
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <b>Is there anything I should do beforehand?</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          Please register using the link in the header and join our Discord server once we send it out. Otherwise, you're all done!
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <b>What will teams be like?</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          People are welcome to work on their own or on teams of up to 4 people. There will also be a team matching activity for people who are interested!
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.expansion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <b>How will HackSmith be run?</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          HackSmith will be run on Discord with live events happening over Zoom. A link to the Discord server will be emailed to people who have registered and put on this website closer to the event. Hacks will be submitted on Devpost.
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <b>Are students from other colleges welcome?</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          Yes! Students from other colleges and universities are more than welcome.
        </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}


ControlledAccordion.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ControlledAccordion)
