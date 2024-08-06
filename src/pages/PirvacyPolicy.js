import React from 'react'
import Layout from "../components/layout/Layout"
const PirvacyPolicy = () => {
    return (
        <Layout>
            <div className="privacy_content p-5">
                <h1>Privacy Policy</h1>
                <hr />
                <div>
                    <h3>1. Information We Collect</h3>
                    <h3 className="fs-4">Personal Information:</h3>
                    <h2 className="fs-6">Registration Data:</h2>
                    <p className="lead">When users sign up for ScholarConnect, we collect basic information such as name, email address, educational institution, and course of study. This information helps us to create a unique profile for each user and to tailor the services we provide.
                    </p>
                    <h2 className="fs-6">Profile Data:</h2>
                    <p className="lead">Users can add more details to their profiles, such as their resumes, career interests, and feedback on counseling sessions. This data allows us to offer more personalized career counseling and support.
                    </p>
                </div>
                <div>
                    <h3 className="fs-4">Usage Data</h3>
                    <h2 className="fs-6">Interaction Data</h2>
                    <p className="lead">We collect data about how users interact with our platform, including chat logs with the AI, notes transactions, and session bookings. This information helps us to improve the accuracy of our AI and the overall user experience.
                    </p>
                    <h2 className="fs-6">Technical Data</h2>
                    <p className="lead"> Information such as device type, internet connection, IP address, and usage patterns are collected to ensure that our platform runs smoothly and efficiently.
                    </p>
                </div>
                <div>
                    <h3>2. How We Use Your Information</h3>
                    <h2 className="fs-6">Service Delivery</h2>
                    <p className="lead"> We use the collected information to provide and personalize the services users request. For example, career counseling sessions are tailored based on a user's career interests and feedback.
                        <br />Information about notes transactions helps us facilitate the buying and selling process between students.
                    </p>
                    <h2 className="fs-6">Improvement and Development</h2>
                    <p className="lead"> By analyzing usage patterns and feedback, we can improve existing services and develop new features to better meet user needs.Interaction data with the AI is used to train and refine our models, making them more accurate and relevant.
                    </p>
                    <h2 className="fs-6">Communication</h2>
                    <p className="lead"> We use contact information to send notifications, updates, and promotional materials related to ScholarConnect. Users can manage their communication preferences. Responding to user inquiries and providing customer support is an essential part of our service.
                    </p>
                    <h2 className="fs-6">Security</h2>
                    <p className="lead"> We use data to monitor and enhance the security of our platform, protecting against fraud and unauthorized access.
                    </p>
                </div>
                <div>
                    <h3>3. Data Sharing and Disclosure</h3>
                    <h2 className="fs-6">Third-Party Service Providers</h2>
                    <p className="lead"> We may share user information with third-party service providers who help us operate our platform, process payments, and deliver services. These providers are obligated to protect user data and use it only for the purposes specified by ScholarConnect.
                    </p>
                    <h2 className="fs-6">Legal Requirements</h2>
                    <p className="lead"> We may disclose user information to comply with legal obligations, such as court orders or subpoenas, or to protect our rights and respond to lawful requests from public authorities.
                    </p>
                    <h2 className="fs-6">Business Transfers</h2>
                    <p className="lead"> If LearnMate undergoes a merger, acquisition, or sale of assets, user information may be transferred to the new ownership as part of the business transaction.
                    </p>
                </div>
                <div>
                    <h3>4. Data Security</h3>
                    <p className="lead"> We implement robust security measures, including encryption and access controls, to protect user data from unauthorized access, alteration, disclosure, or destruction. <br /> Regular security assessments help us identify and address vulnerabilities in our system.
                    </p>
                </div>
                <div>
                    <h3>5. Your Rights</h3>
                    <h2 className="fs-6">Access and Correction</h2>
                    <p className="lead"> Users have the right to access their personal information held by LearnMateand can update or correct this information as needed.
                    </p>
                    <h2 className="fs-6">Data Deletion</h2>
                    <p className="lead"> Users can request the deletion of their personal data. We will comply with such requests unless we have a legal obligation to retain the data.
                    </p>
                    <h2 className="fs-6">Opt-Out</h2>
                    <p className="lead"> Users can opt-out of receiving promotional communications by following the instructions provided in those communications. This allows users to manage their communication preferences.
                    </p>
                </div>
                <div>
                    <h3>6. Changes to this Privacy Policy</h3>
                    <p className="lead"> We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Users will be notified of significant changes by posting the new Privacy Policy on our platform and updating the effective date.
                    </p>
                </div>
                <div>
                    <h3>7. Contact Us</h3>
                    <p className="lead"> Users can contact us with any questions or concerns about our Privacy Policy or data practices at <b>support@LearnMate.com.</b> Our physical address is also provided for additional contact options.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default PirvacyPolicy
