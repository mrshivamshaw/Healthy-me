import React from 'react'
import aboutUs from '../../assets/AboutUs.png'

function About() {
  return (
    <div className="w-[85vw] mx-auto mb-10  mt-[10vh]">
      <div className="flex gap-[12vw] justify-center items-center">
        <img className=" drop-shadow-md" src={aboutUs} alt="about us" />
        <div>
          <div className="text-[1.5vw] font-[700] tracking-wider bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] inline-block text-transparent bg-clip-text mt-10">
            ABOUT US
          </div>
          <div className="text-[3vw] font-[600] pb-10">Our Goal</div>
          <div className="text-[#999191] text-[1.2vw] pb-10">
            We are a team of aspiring engineers who are passionate about health
            and wellness. We believe that everyone deserves to live a healthy
            and happy life, regardless of their age, background, or location.
            That’s why we created this website, to provide you with reliable and
            relevant health guidance that you can trust.
          </div>
         
        </div>
        
      </div>
      <div>
      <div className="text-[3vw] font-[600] pb-10">Our Story</div>
      <div>
        <div>
        Hey there! We're Healthy ME!, a bunch of college friends who decided to tackle a common
problem - finding reliable info about health stuff. Yep, we've all been there, googling
symptoms and getting overwhelmed with jargon and this is our attempt at fixing the issue.
        </div>
        {/* Who we are */}
        <div>
        <div className="text-[2.5vw] font-[600] pb-10">Who We Are</div>
        <div>
        Our team comprises students from Information technology and AI and ML,brought together
by our shared enthusiasm for technology and a desire to contribute meaningfully to society.
What started as a late-night discussion has evolved into a dedicated effort to provide
accessible and accurate information to those seeking answers to their medical queries.
        </div>
        </div>
        {/* The Spark of Inspiration */}
        <div>
        <div className="text-[2.5vw] font-[600] pb-10">The Spark of Inspiration</div>
        <div>
        The idea behind Healthy ME! was born from our own experiences navigating the complexities
of healthcare. We recognized the need for a platform that not only answered medical
questions but also did so in a way that was easy to understand, trustworthy, and tailored to
individual needs.
        </div>
        </div>
        {/* Building Bridges to Wellness */}
        <div>
        <div className="text-[2.5vw] font-[600] pb-10">Building Bridges to Wellness</div>
        <div>
        Our journey involved countless hours of research, collaboration, and learning. We delved into
the intricacies of medical knowledge and combined our skills to create a user-friendly website
that serves as a reliable resource for anyone seeking answers to their medical queries.
        </div>
        </div>
        {/* Empowering You, One Query at a Time */}
        <div>
        <div className="text-[2.5vw] font-[600] pb-10">Empowering You, One Query at a Time</div>
        <div>
        At Healthy ME!, we believe that everyone deserves access to accurate information about
their health. Our commitment is to empower individuals with the knowledge they need to
make informed decisions about their well-being. Whether you're curious about symptoms,
treatments, or general health advice, our platform is here to guide you.
        </div>
        </div>
        {/* Join Us on This Journey */}
        <div>
        <div className="text-[2.5vw] font-[600] pb-10">Join Us on This Journey</div>
        <div>
        As we continue to grow and evolve, we invite you to join us on this exciting journey. Your
feedback, experiences, and stories inspire us to enhance our platform and make a positive
impact on the lives of many. Together, let's build a community where health information is
accessible, reliable, and empowers us all to lead healthier lives. <br /> <br />
Thank you for being a part of the Healthy ME! story.
        </div>
        </div>


      </div>
        </div>
    </div>
  )
}

export default About