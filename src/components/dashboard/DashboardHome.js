import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import SideBar from './Sidebar'; // Adjust the path as needed
import DashboardNavbar from './DashboardNavbar';
import UploadArea from './dashboardText/UploadArea'; // Adjust the path as needed
import YourUploads from './dashboardText/YourUploads'


const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Container fluid style={{ paddingLeft: '0', paddingRight: '0', paddingTop: "20px" }}>
          <Row className="mt-3">
            <input type="text" placeholder='Search Notes, Books and Course...' className='search_inpnt' style={{ width:"90%"}} />
          </Row>
          <Row className="mt-2" style={{ padding: "0 40px" }}>
            <Col>
              <UploadArea />
            </Col>
          </Row>
          <Row className="mt-2" style={{ padding: "0 40px" }}>
            <Col>
              <YourUploads />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
