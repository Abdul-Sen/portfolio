
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <p>
            Worked in an agile devops team as a systems developer, hands-on automation experience with PowerShell and C#
        </p>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><li>Researched, built an MVP, and setup production version of the microservices architecture for our team</li></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Worked alongside other teammates to analyze various microservices architectural options. Build a minimum viable product
            using Azure Automation Runbooks and Azure Cloud Function App to meet the company's hybrid infrastructure requirements. Setup production 
            pipeline from Azure DevOps to automate build and release pipeline for our production setup, including setting up automated Postman API testing.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><li>Built an automated service uptime tracking script</li></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Built an automation script using C# and Selenium to track uptime of a company site. Script
            checks for performance degradation and sends alert via SMTP to team members. Logs each instance
            to help track potential problems using log4net
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><li>Worked with Microsoft Graph API to automate InTune security alerts</li></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Used <a target="_blank" href="https://github.com/microsoft/Intune-PowerShell-SDK" >Intune PowerShell SDK</a> to work with Intune's Graph API to automate client communications about security alerts.
            Script filters clients based on provided OS version criteria and automatically alerts users about potential security vulnerabilities
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
