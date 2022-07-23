import React from 'react';
import tw from 'tailwind-styled-components';
import aboutBg from 'assets/images/about-bg.jpg';
const Container = tw.div`container pt-20 mx-auto max-w-6xl px-2 relative z-10`;
const Card = tw.div`p-4 bg-neutral-50 shadow-2xl`;
const H3 = tw.h3`text-2xl tracking-wide uppercase font-semibold pb-4`;
const P = tw.p`leading-6 mb-4`;
const Banner = tw.div`relative z-10 py-20 text-center overflow-hidden`;
const Bold = tw.span`font-semibold`;
//
//
const AboutUs = () => {
  return (
    <div>
      <Banner>
        <Container>
          <h2 className="mb-8 text-xl font-semibold text-neutral-50">
            360 Virtual Tour, 3D Virtual Tour, Google Street View Trusted Agency
            And VR Tour Service Provider In Bangladesh
          </h2>
          <p className="text-xl text-neutral-50">
            Clyde visuals offers the Ideal Solutions to showcase your Property
            on a Virtual Medium and Magnetize Your Target Customers. We are
            Google Street View Trusted Photographer and Matterport trusted
            partner based in Dhaka, Bangladesh. We are expertise ourselves in
            360 Virtual Tour, Matterport Photography And Google Street View
            Photography. Give Your Business the Competitive Edge- Call Us Today!
          </p>
        </Container>
        <img
          src={aboutBg}
          alt="banner"
          className="absolute top-0 left-0 object-cover w-full h-full scale-105 blur-sm"
        />
      </Banner>
      <div className="px-4">
        <Container>
          <Card>
            <H3>Who We Are</H3>
            <P>
              We at Starts360 can help you to perfectly showcase your property
              and provide a completely immersive 3D Virtual Tour experience for
              discerning clients. No matter the type of establishment, being the
              top 360 virtual tour company in Delhi, Starts360 can deliver 360
              Virtual Tour or 3D virtual tours that can effectively show off
              your premises. It is crucial to showcase your establishment and
              its facilities in the best possible manner if they are the key
              calling cards for your business. Whether you have a hotel,
              restaurant, or even a showroom, you have to showcase the
              infrastructure, interiors, and landscape of your establishment
              impeccably to impress your clients. This is where 360 virtual
              tours can become your perfect marketing tool. 360 virtual tours
              can essentially aid your prospective clients, buyers, and patrons
              to take part in a unique, immersive experience of your facilities,
              without even having to step out. As a leading provider of 360
              virtual tour services in Delhi, we at Starts360 can effectively
              enable you to take your visitors on a smooth 360 virtual tour of
              your premises. Our team of experts at Starts360 uses cutting-edge
              and innovative technologies to provide you with quality, 360
              virtual tour services. We cater to a wide range of sectors and
              industries, including hospitality, education, real-estate,
              healthcare, and fitness, and help our patrons attract customers
              with engaging 360 virtual tour of their facilities. The aspect of
              360 virtual tours has become a standard feature in many sectors
              today, and through Starts360 you can avail premium quality of
              services in this domain.
            </P>
            <H3>Our 360 Virtual Tour Services</H3>
            <P>
              <Bold>3D Virtual Tours: </Bold>
              As a top 360 virtual tour company in Delhi, we at Starts360 can
              provide you with a 3D showcase of your property that would enable
              your patrons to experience the facilities of your premises right
              from the comfort of their own home.
            </P>
            <P>
              <Bold>3 Professional Photography: </Bold>
              Through us you can avail professional photography packages for
              your business. Starts360 is staffed with experienced photographers
              who can help you to show your customers the absolute the best
              representation of your business online.
            </P>
            <P>
              <Bold> Schematic Floor Plans: </Bold>
              Schematic Floor Plans: We can develop black and white schematic
              floor plans for your property.
            </P>
            <H3>Types of Businesses we offer 360 virtual tour services for</H3>
            <P>Restaurants</P>
            <P>Hotels and Spas</P>
            <P>Bars and Clubs</P>
            <P>Educational Institutions</P>
            <P>Retail Shops and Showrooms</P>
            <P>New Home Builders</P>
            <P>Holiday Accommodation</P>
            <P>Public Spaces and Exhibitions</P>
            <P>Construction Projects ( Before and After)</P>
            <P>Commercial and Residential Property</P>
            <P>Car Showrooms and Individual Vehicles</P>
          </Card>
        </Container>
        <Container>
          <Card>
            <H3>Why Choose Us</H3>
            <P>Google Street View Trusted Partner</P>
            <P>Matterport Service Partner</P>
            <P>For Quality 360 Virtual Tour</P>
            <P>3D Virtual Reality Tour</P>
            <P>For Google Business Page</P>
            <P>Experienced In 3D Virtual Tour</P>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
