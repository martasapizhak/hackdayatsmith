import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import { useTheme, makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
  root: {
    width: '100%',
    color:"red",
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
    color: "red",
  },
  expansion: {
    backgroundColor:"red"
  },
  secondaryHeading: {
    color: "red",
  },
});

const ControlledAccordion = () =>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className = {classes.expansion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <b>R</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          <a href="https://www.statmethods.net/r-tutorial/index.html">R</a> is a programming language oriented around doing statistical analysis and designing data visualizations. R excels for tasks like
          creating regression models, machine learning, and quickly exploring data using libraries like <a href="https://www.datacamp.com/community/tutorials/tidyverse-tutorial-r">Tidyverse.</a>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <b>Python</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          <a href="https://www.w3schools.com/python/">Python</a> is a programming language used for a variety of tasks. For example, Python can be used to create data visualizations
          using libraries like Dash, Matplotlib, and Seaborn combined with Pandas and Numpy. Python can also be used for many machine learning
          tasks, with libraries like Scikit-learn and Tensorflow. Python can also be used to create a RESTful API with libraries like <a href="https://flask.palletsprojects.com/en/1.1.x/tutorial/">Flask.</a>
          Restful APIS are useful for sending data between the client and the server using JSON files.
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <b>HTML/CSS</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          <a href="https://www.w3schools.com/html/default.asp">HTML/CSS</a> (HyperText Markup Language and Cascading Style Sheets) are the languages used to define and format data on the web. HTML describes how
          information is laid out on the web and CSS describes what it looks like.
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <b>JavaScript/React/Node</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          <a href="https://www.w3schools.com/js/js_intro.asp">JavaScript</a> is the native programming language of the web. It can modify the HTML and CSS of a webpage as well and is able to do anything that
          another programming language can do. Javascript is the language used for developing data visualizations on the web as well, using libraries like Plotly, D3.js, and VisJS. <a href="https://www.w3schools.com/react/default.asp">React</a> is a JavaScript
          framework used to make web design modular using ideas like components and the state.
          This website is written in React! There are other web frameworks as well. <a href="https://www.w3schools.com/nodejs/default.asp">Node.js</a> is another server similar to Flask written in JavaScript.
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <b>Databases</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          Databases are ways to store large amounts of information. Relational databases use large tables of information with a structored format which can be joined together.
          You "ask" a relational database a question using <a href="https://www.w3schools.com/sql/">SQL</a> (Structured Query Language), so relational databases are frequently called SQL databases.
          Databases which store information differently from relational databases are called NoSQL databases and there's a lot of variety in them. Other varieties of
          databases include key-value databases like <a href="https://cassandra.apache.org/">Cassandra</a>, graph databases like <a href="https://neo4j.com/">neo4j</a>, document databases like <a href="https://www.mongodb.com/">MongoDB</a>, and many others.
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <b>The Cloud</b>
        </AccordionSummary>
        <AccordionDetails>
        <div>
          When running a website with a server, people need to run that server at all times so that the client can always reach it. Instead of running it on their computers,
          most of them pay another company to run it on their computers instead. They can also run databases, machine learning models, etc. This is the cloud.
          Companies like <a href="https://aws.amazon.com/">Amazon</a>, <a href="https://azure.microsoft.com/en-us/">Microsoft</a>, <a href="https://cloud.google.com/">Google</a>, and <a href="https://www.ibm.com/cloud">IBM</a> all provide these services. The
          most beginner friendly are probably Amazon Web Services or <a href="https://www.heroku.com/">Heroku</a>.
        </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default withStyles(useStyles)(ControlledAccordion)
