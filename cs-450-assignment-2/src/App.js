import "./App.css";
import Education from "./Education";
import Header from "./Header.js";
import PersonalProfile from "./PersonalProfile";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function App() {
  const text = {
    header: {
      name: "Zh Rimel",
      occupation: "Data Scientist",
      email: "Email: ",
      emailAddress: "abc@gmail.com",
      website: "Web: abc.github.io/abc",
      phoneNumber: "Mobile:01234567890",
    },
    personalProfile: {
      title: "Personal Profile",
      personalStatement:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    workExperience: {
      title: "Work Experience",
      jobOne: "Job Title at Company (August 2022 - December 2023)",
      jobOneDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      jobTwo: "Job Title 2 at Company 2 (August 2020 - December 2021)",
      jobTwoDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    skills: {
      title: "Key Skills",
      skillOne: "A Key skill",
      skillTwo: "A Key skill",
      skillThree: "A Key skill",
      skillFour: "A Key skill",
      skillFive: "A Key skill",
      skillSix: "A Key skill",
      skillSeven: "A Key skill",
      skillEight: "A Key skill",
      skillNine: "A Key skill",
    },
    education: {
      title: "Education",
      schoolOne: "New Jersey Institute of Technology",
      degreeOne: "BS in Computer Science",
      yearsOne: "2018 - 2022",
      gpaOne: "GPA: 3.9",
      schoolTwo: "New Jersey Institute of Technology",
      degreeTwo: "MS in Data Science",
      yearsTwo: "2022 - 2023",
      gpaTwo: "GPA: 4.0",
    },
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "800px" }}>
        <Header props={text.header} />
        <div className="yellow-breaker"></div>
        <PersonalProfile props={text.personalProfile} />
        <div className="breaker"></div>
        <WorkExperience props={text.workExperience} />
        <div className="breaker"></div>
        <Skills props={text.skills} />
        <div className="breaker"></div>
        <Education props={text.education} />
      </div>
    </div>
  );
}

export default App;
