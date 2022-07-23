import React from 'react';
import tw from 'tailwind-styled-components';
import aboutBg from 'assets/images/about-bg.jpg';
const Container = tw.div`container pt-8 mx-auto max-w-6xl px-2 relative z-10`;
const Card = tw.div`p-4 bg-neutral-50 shadow-[box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;]`;
const H3 = tw.h3`text-2xl pt-12 tracking-wide uppercase font-semibold pb-4`;
const P = tw.p`leading-6 mb-4 font-light after:bg-amber-300 after:top-0 after:-left-2 after:absolute relative after:h-full after:w-0.5`;
const Banner = tw.div`relative z-10 py-20 text-center overflow-hidden`;
const Bold = tw.span`font-semibold`;
//
//

const links = [
  'https://images.unsplash.com/photo-1596040014776-459f4fdf9df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1550955295-77d6e18a24da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
  'https://images.unsplash.com/photo-1558464678-2f1570e8d60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80',
  'https://images.unsplash.com/photo-1565363887715-8884629e09ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  'https://images.unsplash.com/photo-1617721926586-4eecce739745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1574936145840-28808d77a0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
];
const AboutUs = () => {
  return (
    <div>
      <div>
        <Banner>
          <Container>
            <h2 className="mb-8 text-xl font-semibold text-neutral-50">
              360 Virtual Tour, 3D Virtual Tour, Google Street View Trusted
              Agency And VR Tour Service Provider In Bangladesh
            </h2>
            <p className="text-xl text-neutral-50">
              Clyde visuals offers the Ideal Solutions to showcase your Property
              on a Virtual Medium and Magnetize Your Target Customers. We are
              Google Street View Trusted Photographer and Matterport trusted
              partner based in Dhaka, Bangladesh. We are expertise ourselves in
              360 Virtual Tour, Matterport Photography And Google Street View
              Photography. Give Your Business the Competitive Edge- Call Us
              Today!
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
              <H3 className="pt-0">Who We Are</H3>
              <P>
                We at Clyde Visuals can help you to perfectly showcase your
                property and provide a completely immersive 3D Virtual Tour
                experience for discerning clients. No matter the type of
                establishment, being the top 360 virtual tour company in
                Bangladesh, Clyde Visuals can deliver 360 Virtual Tour or 3D
                virtual tours that can effectively show off your premises. It is
                crucial to showcase your establishment and its facilities in the
                best possible manner if they are the key calling cards for your
                business. Whether you have a hotel, restaurant, or even a
                showroom, you have to showcase the infrastructure, interiors,
                and landscape of your establishment impeccably to impress your
                clients. This is where 360 virtual tours can become your perfect
                marketing tool. 360 virtual tours can essentially aid your
                prospective clients, buyers, and patrons to take part in a
                unique, immersive experience of your facilities, without even
                having to step out. As a leading provider of 360 virtual tour
                services in Bangladesh, we at Clyde Visuals can effectively
                enable you to take your visitors on a smooth 360 virtual tour of
                your premises. Our team of experts at Clyde Visuals uses
                cutting-edge and innovative technologies to provide you with
                quality, 360 virtual tour services. We cater to a wide range of
                sectors and industries, including hospitality, education,
                real-estate, healthcare, and fitness, and help our patrons
                attract customers with engaging 360 virtual tour of their
                facilities. The aspect of 360 virtual tours has become a
                standard feature in many sectors today, and through Clyde
                Visuals you can avail premium quality of services in this
                domain.
              </P>
              <H3>Our 360 Virtual Tour Services</H3>
              <P>
                <Bold>3D Virtual Tours: </Bold>
                As a top 360 virtual tour company in Bangladesh, we at Clyde
                Visuals can provide you with a 3D showcase of your property that
                would enable your patrons to experience the facilities of your
                premises right from the comfort of their own home.
              </P>
              <P>
                <Bold>3 Professional Photography: </Bold>
                Through us you can avail professional photography packages for
                your business. Clyde Visuals is staffed with experienced
                photographers who can help you to show your customers the
                absolute the best representation of your business online.
              </P>
              <P>
                <Bold> Schematic Floor Plans: </Bold>
                Schematic Floor Plans: We can develop black and white schematic
                floor plans for your property.
              </P>
              <H3>
                Types of Businesses we offer 360 virtual tour services for
              </H3>
              <div className="md:grid md:grid-cols-2">
                <div className="justify-between md:h-full md:flex-col ">
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
                </div>
                <div className="mt-4">
                  <div className="grid grid-cols-3 ">
                    {links.map((p, i) => {
                      return (
                        <div className="relative w-full h-full mb-[100%]">
                          <img
                            src={p}
                            alt="sectors"
                            className="absolute object-cover w-full h-full"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default AboutUs;
