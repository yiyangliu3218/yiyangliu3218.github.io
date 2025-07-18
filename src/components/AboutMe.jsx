import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function AboutMe() {
  const handlePageChange = (page) => {
    if (onNavigate) {
      onNavigate(page); // 调用父组件传递的导航函数
    } else {
      // 如果没有传递导航函数，尝试直接跳转
      window.location.href = `/${page}`;
    }
  };


  const interests = [
    "- LLMs, GenAI",
    "- Causal Inference, Bayesian Networks",
    "- Semantic Communication",
    "- Root Cause Analysis",
    "- AI4Science"
  ];

  const education = [
    {
      degree: "M.Eng, Electrical & Computer Engineering",
      year: "2024 - 2026 (Expected)",
      school: "University of Toronto"
    },
    {
      degree: "B.Eng, Electrical & Electronic Engineering",
      year: "2020 - 2024", 
      school: "University of Nottingham"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.left}>
        <div style={styles.avatarContainer}>
          <div style={styles.avatar}>YL</div>
        </div>
        
        <h1 style={styles.name}>Yiyang Liu</h1>
        <p style={styles.title}>Master Student, Electrical & Computer Engineering, University of Toronto</p>
        
        {/* Contact Icons */}
        <div style={styles.icons}>
          <a href="mailto:yyl.liu@mail.utoronto.ca" style={styles.iconLink}>
            <i className="fi fi-rr-envelope" style={{fontSize: "20px"}}></i>
          </a>
          <a href="/cv/yiyangliu_cv.pdf" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fi fi-rr-document" style={{fontSize: "20px"}}></i>
          </a>
          <a href="https://maps.app.goo.gl/qGRithZuq3p9p2rZ8" style={styles.iconLink}>
            <i className="fi fi-rr-marker" style={{fontSize: "20px"}}></i>
          </a> 
        </div>

        {/* Interests */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Interests</h3>
          <ul style={styles.list}>
            {interests.map((interest, idx) => (
              <li key={idx} style={styles.listItem}>{interest}</li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <div style={styles.degreeIcon}>
                <i className="fi fi-rr-graduation-cap" style={{ fontSize: "20px", color: "black" }}></i>
              </div>
              <div>
                <h4 style={styles.degreeTitle}>{edu.degree}</h4>
                <p style={styles.year}>{edu.year}</p>
                <p style={styles.school}>{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Biography */}
      <div style={styles.right}>
        <h2 style={styles.biographyTitle}>Biography</h2>
        
        <div style={styles.biographyContent}>
          <p style={styles.paragraph}>
            I am currently a Master's student in Electrical and Computer Engineering at the 
            University of Toronto, working under the supervision of Prof. Hans-Arno Jacobsen. 
            My thesis focuses on the intersection of Large Language Models and Causal Inference, 
            exploring novel approaches to enhance reasoning capabilities in AI systems.
          </p>
          
          <p style={styles.paragraph}>
            My research interests lie in the development and application of advanced AI technologies, 
            particularly Large Language Models (LLMs), generative AI, and multi-modal learning systems. 
            I am passionate about causal inference, Bayesian networks, and probabilistic modeling, 
            with a focus on their applications in semantic communication and distributed systems analysis.
          </p>
          
          <p style={styles.paragraph}>
            Currently, I am leading the design of a LLMs-based closed-loop auto-tuning system for 
            topic modeling at the University of Toronto's AIMMLab. Additionally, I am working as a 
            Research Assistant in collaboration with CAMH, developing transformer-based modeling and 
            explainability techniques for early prediction of adolescent depression relapse.
          </p>
          
          <p style={styles.paragraph}>
            Previously, I completed my Bachelor's degree in Electrical & Electronic Engineering at 
            the University of Nottingham with a GPA of 3.82/4.0, ranking in the top 5% of my class. 
            During my undergraduate studies, I conducted research on ML-based Speech Emotion Recognition 
            and was actively involved in the Formula Student Racing Team as an electrical team member and leader.
          </p>
          
          <p style={styles.paragraph}>
            Beyond academics, I have been recognized with several awards including the Outstanding Graduate 
            Award from the University of Nottingham and the Provost's Scholarship. I am also an accomplished 
            musician (Piano, China Musicians Association Level 10) and athlete (Professional Badminton and 
            Squash player, Varsity team member 2022-2024).
          </p>
          
          <p style={styles.paragraph}>
            You can <a href="/cv/yiyangliu_cv.pdf" style={styles.link}>download my Resume</a> (updated July 2025).
          </p>

          <p style={styles.paragraph}>
            More information on <a href="#" onClick={(e) => {e.preventDefault(); handlePageChange('research');}} style={styles.link}>Research</a>, <a href="#" onClick={(e) => {e.preventDefault(); handlePageChange('projects');}} style={styles.link}>Projects</a>, and <a href="#" onClick={(e) => {e.preventDefault(); handlePageChange('skills');}} style={styles.link}>Skills</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    maxWidth: '1200px',
    margin: 'auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    gap: '60px'
  },
  
  left: {
    flex: '0 0 300px',
    textAlign: 'center',
  },
  
  avatarContainer: {
    marginBottom: '20px'
  },
  
  avatar: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 auto',
    boxShadow: '0 8px 32px rgba(155, 35, 35, 0.1)'
  },
  
  name: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '20px 0 8px 0',
    color: '#333'
  },
  
  title: {
    fontSize: '16px',
    color: '#666',
    margin: '4px 0',
    lineHeight: '1.4'
  },
  
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '30px'
  },
  
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    color: '#666',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  },
  
  section: {
    textAlign: 'left',
    marginBottom: '30px'
  },
  
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#333',
    borderBottom: '2px solid #eee',
    paddingBottom: '0px'
  },
  
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  
  listItem: {
    padding: '2px 0',
    fontSize: '14px',
    color: '#555',
    paddingLeft: '16px'
  },
  
  educationItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    gap: '12px'
  },
  
  degreeIcon: {
    fontSize: '20px',
    marginTop: '2px'
  },
  
  degreeTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 4px 0',
    color: '#333'
  },
  
  year: {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 4px 0'
  },
  
  school: {
    fontSize: '14px',
    color: '#555',
    margin: '0 0 4px 0'
  },
  
  right: {
    flex: 1,
  },
  
  biographyTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333'
  },
  
  biographyContent: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#444'
  },
  
  paragraph: {
    marginBottom: '20px',
    textAlign: 'justify'
  },
  
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500'
  }
};