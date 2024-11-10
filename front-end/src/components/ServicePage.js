import React from 'react';

const ServicePage = ({ service }) => {
    return (
        <main>
            <h1>{service}</h1>
            <p>Details about {service}.</p>
        </main>
    );
};

export default ServicePage;