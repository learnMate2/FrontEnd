import React from 'react'
import { MdPersonSearch } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc"
import Card from 'react-bootstrap/Card';
// import "../../styles/styles.css"
const EasyWork = () => {
    const Data = [
        {
            icon: <MdPersonSearch />,
            heading: "Search Counselors",
            paragraph: "Create your free job posting and start receiving Quotes within hours."
        },
        {
            icon: <FaUsers />,
            heading: "Hire Counselors",
            paragraph: "Compare the Quotes you receive and hire the best freelance professionals for the job."
        },
        {
            icon: <MdOutlineAssuredWorkload />,
            heading: "Get Counseling",
            paragraph: "Compare the Quotes you receive and hire the best freelance professionals for the job."
        },
        {
            icon: <VscWorkspaceTrusted />,
            heading: "Make Secure Payments",
            paragraph: "Choose from multiple payment methods with SafePay payment protection."
        }
    ]
    return (
        <div className='easy_work p-5'>
            <div className='text-center position-relative'>
                <h1 className='fs-2 mb-4 heading text-center'>It's Easy to Get Work Done on LearnMate</h1>
            </div>
            <div className='d-flex text-center mt-3 flex-wrap'>
                {
                    Data.map((item, index) => (
                        <div key={index} style={{margin:"0 auto"}}>
                            <Card style={{ width: '18rem',background:"transparent",border:"none" }} >
                                <Card.Text style={{fontSize:"50px",textAlign:"center",color:"#6b21a8"}}>
                                    {item.icon}
                                </Card.Text>
                                <Card.Body>
                                    <Card.Title style={{marginTop:"-15px"}}>{item.heading}</Card.Title>
                                    <Card.Text>
                                        {item.paragraph}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EasyWork
