import React, { useState } from 'react';
import rectangleData from './rectangleData.json'


const Section = ({ sectionName, checked, onChange }) => {
  return (
    <div >
      <label style = {{cursor:'pointer',marginLeft:"32px"}}>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
        />
        {sectionName}
      </label>
    </div>
  );
};


const Box = ({ imgURL, title, tags, contact, location }) => {
  const boxStyle = {
    position: 'relative',
    display: 'grid',
    width: '1100px',
    height: '180px',
    borderRadius: '15px',
    backgroundColor: '#f6f6f6',
    margin: '5px',
    display: 'flex',
    gridTemplateColums: '1fr 1fr 1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    overflow: 'hidden',
  };

  const imgStyle = {
    width: '250px',
    height: '140px',
    position: 'absolute',
    borderRadius: '15px', 
    top: '50%',
    transform: 'translateY(-50%)',
    left: '10px',  
    objectFit: 'cover',
  };

  const centerText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '130px',
    height: '30px',
    margin: '5px',
    borderRadius: '20px',
    color: 'white',
    cursor:'pointer',
  };

  const contactAddressStyle = {
    position: 'absolute',
    right: '200px', // Adjust as needed
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'right',
  };

  const centeredContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const outsideCircle = {
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    backgroundColor: '#dbead9',
    position: 'absolute',
    right: '-75px', // Extending 25px outside the box
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1, // Places the circle above the box
  };

  const tagContainer = {
    marginTop: '40px',
    display: 'flex',
    gap: '5px', // Adjust the gap between tags
    justifyContent: 'center',
    // paddingRight: '300px',
  };

  const tagStyle = {
    background: '#ffffff', // Tag background color
    color: '#000000', // Tag text color
    padding: '1px 19px', // Adjust tag padding
    borderRadius: '10px', // Adjust tag border radius
    border: '1px solid grey',
  };

  return (
    <div style={boxStyle}>
      <div>
        <img style={imgStyle} src={imgURL} alt="Start Image" />
      </div>
      <div style={{marginTop:"-20px"}}>
        <div>
          <h2 >{title}</h2>   {/* style={{marginLeft:'-150px',marginTop:'1px'}} */}
          <p style={{ color: '#666666', fontSize: '1.05em' , cursor:'pointer'}}>{location}</p>   {/* , marginTop: '-15px', marginLeft: '-250px' */}
          <div>
        <div style={tagContainer}>
        {tags.map((tag, index) => (
          <div key={index} style={tagStyle}>
            {tag}
          </div>
        ))}
        </div>
      </div>
        </div>
      </div>
      <div>
        <img style={imgStyle} src={imgURL} alt="End Image" />
      </div>
      <div style={contactAddressStyle}>
        <div style={centeredContentStyle}>
        <p style={{ ...centerText, background: '#053b3f' }}>Summary</p>
        <p style={{ ...centerText, background: '#1ca822' }}>{contact}</p>
        </div>
      </div> 
      <div style={outsideCircle}></div>
    </div>
  );
};


const App = () => {
  const [sections, setSections] = useState({
    City: false,
    "Near You": false,
    Online: false,
    "All Filters": false,
  });

  const toggleSection = (section) => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const pathies = [
    "Acupuncture", "Ayurveda", "Chiropractic", "Homeopathy", "Naturopathy",
    "Osteopathy", "Siddha", "Unani", "Allopathy", "Herbalism",
    "Hypnotherapy", "Reflexology", "Aromatherapy", "Psychotherapy", "Podiatry",
    "Reiki", "ChineseMedicine", "Physiotherapy", "YogaTherapy",
    "HolisticMedicine", "OrientalMedicine", "WesternMedicine"
  ];

  const sidebarStyleWithBorder = {
    borderRight: '1px solid black',
    padding: '10px',
  };
  const mainContentWithCenteredHeading = {
    color: '#053b3f',
    textAlign: 'center',
    paddingTop: '15px', // Adjust as needed
  };

  const boxesContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={headerStyle}>
        Header
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        <aside style={{ ...sidebarStyle, ...sidebarStyleWithBorder }}>
          <div>
            <h2 style={{marginBottom:"18px",marginLeft:"0.5px"}}>Health Umbrella</h2>
            {Object.keys(sections).map((section) => (
              <Section
                key={section}
                sectionName={`${section}`}
                checked={sections[section]}
                onChange={() => toggleSection(section)}
              />
            ))}
          </div>
          <div>
            <h2 style={{marginBottom:"2px",marginLeft:"12px"}}>Pathies</h2>
            <ul>
              {pathies.map((pathy, index) => (
                <li key={index} style={{ cursor:'pointer', padding: "3px", marginLeft: "10px" }}>{pathy}</li>
              ))}
            </ul>
          </div>
        </aside>
        <main style={{ 
        ...mainContentStyle, 
        ...mainContentWithCenteredHeading, 
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 20px)',
        height: '100%',
      }}>
        <h1>Clinic and Medical Communities</h1>
        <div style={{ padding: '20px' }}> 
          <div style={boxesContainer}>
            {rectangleData.map((data, index) => (
              <Box
                key={index}
                imgURL={data.imgURL}
                title={data.title}
                tags={data.tags}
                location={data.location}
                contact={data.contact}
              />
            ))}
          </div>
        </div>
      </main>

      </div>
      <footer style={footerStyle}>
        Footer
      </footer>
    </div>
  );
};

// Defined styles for components
const headerStyle = {
  background: "#053b3f",
  color: "white",
  padding: "10px",
  height: "100px",
};

const sidebarStyle = {
  background: "#fcfdfb",
  width: "230px",
  padding: "10px",
};

const mainContentStyle = {
  background: '#ffffff',
  flex: 1,
  padding: "20px",
};

const footerStyle = {
  background: "#053b3f",
  color: "white",
  padding: "10px",
  height:"100px",
};

export default App;