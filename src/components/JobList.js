import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const StyledTabs = styled(Tabs)({
  borderRight: `1px solid var(--lightest-navy)`,
  "& .MuiTabs-indicator": {
    backgroundColor: "var(--purple-bright)"
  }
});

const StyledRoot = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  minHeight: "300px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "unset"
  }
}));

const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "var(--slate)",
    fontFamily: "NTR, sans-serif",
    fontSize: "16px",
    "&:hover": {
      color: "var(--purple-bright)",
      opacity: 1
    },
    "&.Mui-selected": {
      color: "var(--purple-bright)",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(178, 102, 255, 0.32)"
    }
  })
);

const JobList = () => {
  const [value, setValue] = React.useState(0);

  const experienceItems = [
    {
      company: "All In IT Solutions",
      roles: [
        {
          jobTitle: "Artificial Intelligence Engineer",
          duration: "FEB 2025 - Present",
          type: "Part-time",
          desc: [
            "Developing AI solutions for business operations allowing for seamless integration to cut costs and increase workflow efficiency."
          ],
        //   skills:
        //     "Skills: Artificial Intelligence (AI) · Application Programming Interfaces (API) · Business Development · Automation · API Testing"
        },
        {
          jobTitle: "Junior Web Developer",
          duration: "NOV 2024 - FEB 2025",
          type: "Part-time",
          desc: [
            "Delivering high-performance websites across a wide range of genres.",
            "Specialising in WordPress, JavaScript, React, PHP, and CMS platforms to create scalable, responsive, and accessible solutions tailored to diverse client needs.",
            "Involved in all stages of the development cycle, for measurable growth, with comprehensive post-launch support for sustained success."
          ],
        //   skills:
        //     "Skills: WordPress · PHP · Figma (Software) · react.js · Cascading Style Sheets (CSS) · HTML · JavaScript · Node.js"
        },
        {
          jobTitle: "Software Engineer Intern",
          duration: "AUG 2024 - NOV 2024",
          type: "Internship",
          desc: [
            "Designed and developed wireframes for enterprise software solutions and client-facing applications, contributing to improved user experience and workflow optimization.",
            "Conducted comprehensive technical research and feasibility analysis for new in-house software development initiatives, supporting strategic decision-making.",
            "Implemented automated unit tests to ensure software quality, identifying and resolving critical bugs while improving application stability and performance."
          ],
        //   skills:
        //     "Skills: Agile Methodologies · Front-End Design · Software Testing"
        }
      ]
    },
    {
      company: "Luxtronix",
      roles: [
        {
          jobTitle: "Full Stack Developer Intern",
          duration: "MAR 2025 - MAY 2025",
          type: "Internship",
          desc: [
            "Led end-to-end development of a digital service management system for a computer service center, replacing paper-based processes with a responsive web application optimized for multi-device access.",
            "Managed client relationships and 4-person development team through complete SDLC, conducting requirements gathering, creating project plans with Gantt charts, and delivering within 15-week timeline using Agile methodologies.",
            "Built full stack solution using MySQL database with logical data structure, middle-tier API, and frontend with search functionality and analytics dashboard to track customer patterns and service trends."
          ]
        }
      ]
    },
    {
        company: "Project ANT",
        roles: [
          {
            jobTitle: "Frontend Developer Intern",
            duration: "OCT 2021 - FEB 2022",
            type: "Internship",
            desc: [
              "Creating and modifying learning, portfolio, and messaging platform components.",
              "Collaborating with the Project ANT team to integrate design and functionality in their freelancing website"
            ]
          }
        ]
      },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledRoot>
      <StyledTabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {experienceItems.map((item, i) => (
          <StyledTab
            key={i}
            label={isHorizontal ? `0${i}.` : item.company}
            {...a11yProps(i)}
          />
        ))}
      </StyledTabs>
      {experienceItems.map((item, i) => (
        <TabPanel key={i} value={value} index={i}>
          {item.roles.map((role, j) => (
            <div key={j} className="role-container">
              <span className="joblist-job-title">{role.jobTitle} @ </span>
              <span className="joblist-job-company">{item.company}</span>
              <div className="joblist-duration">
                {role.duration} {role.type && `· ${role.type}`}
              </div>
              <ul className="job-description">
                {role.desc.map(function (descItem, k) {
                  return (
                    <FadeInSection key={k} delay={`${k + 1}00ms`}>
                      <li>{descItem}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {role.skills && <p className="joblist-skills">{role.skills}</p>}
            </div>
          ))}
        </TabPanel>
      ))}
    </StyledRoot>
  );
};

export default JobList;