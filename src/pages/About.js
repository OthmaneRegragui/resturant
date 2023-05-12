/* eslint-disable jsx-a11y/img-redundant-alt */
import "../styles/About.css";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card>
      <Card.Header>About</Card.Header>
      <Card.Body>
        <div className="div-about-block">
          <div className="div-about-text">
            Welcome to [Restaurant Name], where we believe that dining is not
            just about the food, but also the experience. We are committed to
            providing our guests with an unforgettable dining experience through
            our exceptional service, exquisite food, and inviting atmosphere.
          </div>
          <img
            src={require("../assets/about/images/1.jpeg")}
            alt="My Image"
            className="div-about-image"
          />
        </div>
        <div className="div-about-block">
          <img
            src={require("../assets/about/images/2.jpeg")}
            alt="My Image"
            className="div-about-image"
          />
          <div className="div-about-text">
            Our restaurant was founded with the goal of offering an unparalleled
            dining experience to our guests. We are proud to use only the
            freshest ingredients in all of our dishes, ensuring that every bite
            is bursting with flavor. From our savory appetizers to our
            delectable entrees and desserts, every dish is carefully crafted to
            tantalize your taste buds.
          </div>
        </div>
        <div className="div-about-block">
          <div className="div-about-text">
            At [Restaurant Name], we believe that every guest deserves the
            highest level of service. Our team of dedicated professionals
            strives to provide a warm, welcoming atmosphere, ensuring that your
            dining experience is comfortable and enjoyable. Whether you are here
            for a romantic dinner for two or a lively group gathering, our staff
            is always ready to cater to your needs.
          </div>
          <img
            src={require("../assets/about/images/3.jpeg")}
            alt="My Image"
            className="div-about-image"
          />
        </div>
        <div className="div-about-block">
          <img
            src={require("../assets/about/images/4.jpeg")}
            alt="My Image"
            className="div-about-image"
          />
          <div className="div-about-text">
            We take pride in our commitment to sustainability. We are committed
            to using locally-sourced and organic ingredients whenever possible,
            reducing our environmental impact. Our dedication to sustainability
            is reflected not only in our menu, but also in our restaurant design
            and practices.
          </div>
        </div>
        <div className="div-about-block">
          <div className="div-about-text">
            We invite you to come and experience the magic of [Restaurant Name].
            Our elegant and inviting atmosphere, exceptional service, and
            delicious cuisine are sure to make your dining experience a
            memorable one. Whether you are celebrating a special occasion or
            simply looking for a delicious meal, we are here to exceed your
            expectations and provide you with an unforgettable dining
            experience.
          </div>
          <img
            src={require("../assets/about/images/5.jpeg")}
            alt="My Image"
            className="div-about-image"
          />
        </div>
      </Card.Body>
    </Card>
  );
}
export default About;
