// ----------- IMPORTS ----------- //

// import aboutImage from "../assets/images/avatar.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={aboutImage} alt="About Me" className="about-image" />
          </div>
          <div className="col-md-6">
            <h2>About</h2>
            <p>
              At Horn & Hooves, we serve as a bridge between your vision and
              exceptional 3D artistry, uniting you with the finest 3D artists
              globally. Our platform is dedicated to delivering unparalleled
              architectural rendering services, leveraging the expertise of our
              top-tier freelancers to transform your concepts into breathtaking
              visual realities. What sets us apart is our commitment to
              excellence across a spectrum of services tailored to meet your
              project's unique demands. From the grandeur of Aerial Rendering
              capturing the essence of spatial designs to the intricate details
              of Interior Rendering that bring comfort and aesthetics to life,
              and the captivating allure of Exterior Rendering that portrays the
              essence of your architectural marvels - we cover it all. Not just
              limited to static representations, our portfolio extends to
              dynamic and immersive experiences. Engage your audience with
              compelling Video Animation/Walkthroughs, allowing them to navigate
              through your envisioned spaces virtually. Our team is driven by a
              passion for creativity, precision, and client satisfaction.
              Collaborate with us, and together, we'll explore the
              possibilities, meticulously crafting a roadmap to breathe life
              into your projects. Let's embark on this journey, discuss your
              aspirations, and weave your dreams into stunning visual
              narratives. Why not partner with us and let your visions take
              flight? Let's have a conversation and envision the extraordinary
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
