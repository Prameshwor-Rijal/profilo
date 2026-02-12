/**
 * Admin Dashboard
 * CRUD operations for all profile sections
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Modal from '../components/common/Modal';
import './Dashboard.css';
import { mockAPI } from '../service/MockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('personal')


  useEffect(() => {
    loadProfile();
  }, [])

  const loadProfile = () => {
    setProfile(mockAPI.getProfile());
  }


  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <div className="dashboard-actions">
            <Button variant="secondary">
              View Public Profile
            </Button>
            <Button variant="danger">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <nav className="dashboard-tabs">
          <button
            className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button
            // className={`tab-button`}
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`tab-button`}
          >
            Work Experience
          </button>
          <button
            className={`tab-button`}
          >
            Projects
          </button>
          <button
            className={`tab-button`}
          >
            Hobbies
          </button>
        </nav>

        <div className="dashboard-panel">
          {/* Personal Info Tab */}
          {activeTab === 'personal' &&
            <Card>
              <div className="panel-header">
                <h2>Personal Information</h2>
                <Button onClick={''}>
                  Edit
                </Button>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <label>Name</label>
                  <p></p>
                </div>
                <div className="info-item">
                  <label>Title</label>
                  <p></p>
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <p></p>
                </div>
                <div className="info-item">
                  <label>Phone</label>
                  <p></p>
                </div>
                <div className="info-item">
                  <label>Location</label>
                  <p></p>
                </div>
                <div className="info-item full-width">
                  <label>Bio</label>
                  <p></p>
                </div>
              </div>
            </Card>
          }


          {/* Education Tab */}
          <Card>
            <div className="panel-header">
              <h2>Education</h2>
              <Button>
                Add Education
              </Button>
            </div>
            <div className="items-list">

              <div className="item-card">
                <div className="item-content">
                  <h3></h3>
                  <p className="item-meta"></p>
                  <p></p>
                </div>
                <div className="item-actions">
                  <Button size="small">
                    Edit
                  </Button>
                  <Button size="small" variant="danger">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Work Experience Tab */}
          <Card>
            <div className="panel-header">
              <h2>Work Experience</h2>
              <Button>
                Add Experience
              </Button>
            </div>
            <div className="items-list">
              <div className="item-card">
                <div className="item-content">
                  <h3></h3>
                  <p className="item-meta"></p>
                  <p></p>
                </div>
                <div className="item-actions">
                  <Button size="small">
                    Edit
                  </Button>
                  <Button size="small" variant="danger">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Projects Tab */}
          <Card>
            <div className="panel-header">
              <h2>Projects</h2>
              <Button>
                Add Project
              </Button>
            </div>
            <div className="items-list">

              <div className="item-card">
                <div className="item-content">
                  <h3></h3>
                  <p></p>
                  <div className="tech-tags">

                    <span className="tech-tag"></span>
                  </div>
                  <a href='' target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="item-actions">
                  <Button size="small">
                    Edit
                  </Button>
                  <Button size="small" variant="danger">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Hobbies Tab */}
          <Card>
            <div className="panel-header">
              <h2>Hobbies</h2>
              <Button>
                Add Hobby
              </Button>
            </div>
            <div className="items-list">

              <div className="item-card">
                <div className="item-content">
                  <h3><span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}></span></h3>
                  <p></p>
                </div>
                <div className="item-actions">
                  <Button size="small">
                    Edit
                  </Button>
                  <Button size="small" variant="danger">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal for Forms */}
      <Modal
        isOpen={''}
        onClose={''}
        title={''}
        footer={
          <>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary" >Save</Button>
          </>
        }
      >
        <form className="modal-form">
          <>
            <Input label="Name" name="name" onChange = {''} value={''} required />
            <Input label="Title" name="title" value={''} required />
            <Input label="Email" name="email" type="email" value={''} required />
            <Input label="Phone" name="phone" value={''} required />
            <Input label="Location" name="location" value={''} required />
            <Input label="Profile Picture URL" name="profilePicture" value={''} />
            <Input label="Bio" name="bio" value={''} required multiline />
          </>

          <>
            <Input label="Degree" name="degree" value={''} required />
            <Input label="Institution" name="institution" value={''} required />
            <Input label="Year" name="year" value={''} placeholder="e.g., 2015 - 2019" required />
            <Input label="Description" name="description" value={''} multiline />
          </>

          <>
            <Input label="Position" name="position" value={''} required />
            <Input label="Company" name="company" value={''} required />
            <Input label="Duration" name="duration" value={''} placeholder="e.g., 2021 - Present" required />
            <Input label="Location" name="location" value={''} required />
            <Input label="Description" name="description" value={''} required multiline />
          </>

          <>
            <Input label="Project Name" name="name" value={''} required />
            <Input label="Description" name="description" value={''} required multiline />
            <Input label="Technologies" name="technologies" value={''} placeholder="Comma separated: React, Node.js, MongoDB" required />
            <Input label="Project Link" name="link" value={''} type="url" />
            <Input label="Image URL" name="image" value={''} type="url" />
          </>
          <>
            <Input label="Hobby Name" name="name" value={''} required />
            <Input label="Icon (Emoji)" name="icon" value={''} placeholder="e.g., 📷" required />
            <Input label="Description" name="description" value={''} required multiline />
          </>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;
