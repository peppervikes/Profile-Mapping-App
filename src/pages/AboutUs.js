import React from 'react';

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <h1>About Me</h1>
            <div style={styles.content}>
                <img
                    src="/Vikalp.jpg" 
                    alt="My Photo"
                    style={styles.image}
                />
                <div style={styles.text}>
                    <h2>Your Name</h2>
                    <p>
                        Hello! I am Vikalp, a passionate web developer with experience in React,
                        Node.js, and various other technologies. I love creating user-friendly applications
                        and am always exploring new ways to improve my skills. I believe in continuous
                        learning and strive to stay updated with the latest trends in the tech world.
                    </p>
                    <p>
                        Feel free to reach out to me if you have any questions or want to collaborate on a
                        project!
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '800px',
        margin: '0 auto',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    text: {
        textAlign: 'left',
        fontSize: '18px',
        maxWidth: '600px',
    },
};

export default AboutUs;
