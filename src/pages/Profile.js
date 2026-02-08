
import { useEffect, useState } from 'react';
import Card from '../components/common/Card';
import { mockAPI } from '../service/MockData';
import './Profile.css';

function Profile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        setProfile(mockAPI.getProfile());
    }

    if (!profile) return null;
    const { personalInfo, education, workExperience, projects, hobbies } = profile;

    return (
        <div className="profile-container">
            {/* Hero Section */}
            <section className="profile-hero">
                <div className="profile-hero-content">
                    <div className="profile-picture-wrapper">
                        <img
                            src={personalInfo.profilePicture}
                            alt={personalInfo.name}
                            className="profile-picture"
                        />
                    </div>
                    <h1 className="profile-name">{personalInfo.name}</h1>
                    <p className="profile-title">{personalInfo.title}</p>
                    <div className="profile-contact">
                        <span>📍 {personalInfo.location}</span>
                        <span>✉️ {personalInfo.email}</span>
                        <span>📞 {personalInfo.phone}</span>
                    </div>
                </div>
            </section>

            <div className="profile-content">
                {/* About Section */}
                <Card className="profile-section">
                    <h2 className="section-title">About Me</h2>
                    <p className="profile-bio">{personalInfo.bio}</p>
                </Card>

                {/* Education Section */}
                <Card className="profile-section">
                    <h2 className="section-title">Education</h2>
                    <div className="education-list">
                        {education.map((edu) => (
                            <div key={edu.id} className="education-item">
                                <div className="education-header">
                                    <h3 className="education-degree">{edu.degree}</h3>
                                    <span className="education-year">{edu.year}</span>
                                </div>
                                <p className="education-institution">{edu.institution}</p>
                                {edu.description && (
                                    <p className="education-description">{edu.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Work Experience Section */}
                <Card className="profile-section">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="experience-list">
                        {workExperience.map((exp) => (
                            <div key={exp.id} className="experience-item">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-position">{exp.position}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="experience-duration">{exp.duration}</span>
                                        <span className="experience-location">{exp.location}</span>
                                    </div>
                                </div>
                                <p className="experience-description">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Projects Section */}
                <Card className="profile-section">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-image"
                                    />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            View Project →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Hobbies Section */}
                <Card className="profile-section">
                    <h2 className="section-title">Hobbies & Interests</h2>
                    <div className="hobbies-grid">
                        {hobbies.map((hobby) => (
                            <div key={hobby.id} className="hobby-card">
                                <div className="hobby-icon">{hobby.icon}</div>
                                <h3 className="hobby-name">{hobby.name}</h3>
                                <p className="hobby-description">{hobby.description}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Profile;