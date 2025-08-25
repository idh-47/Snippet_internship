import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.0831337652581!2d-7.608644705389177!3d33.592840288674296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd63ac990e7b%3A0x2a6426c847e11603!2s77%20Boulevard%20Mohamed%20Smiha%2C%20Casablanca%2020000!5e0!3m2!1sen!2sma!4v1676455449015!5m2!1sen!2sma"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
