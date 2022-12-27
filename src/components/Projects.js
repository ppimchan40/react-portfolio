import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/elite-move-ui.png";
import projImg2 from "../assets/img/elite-move-api.png";
import projImg3 from "../assets/img/find-your-hat.png";
import projImg4 from "../assets/img/jamming.png";
import projImg5 from "../assets/img/tgix.png";
import projImg6 from "../assets/img/rodray.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description: "EliteMove UI",
      imgUrl: projImg1,
      link: "https://elitemove-ui.vercel.app",
    },
    {
      description: "EliteMove APIs",
      imgUrl: projImg2,
      link: "https://github.com/JSD3G6/backend",
    },
    {
      description: "Find Your Hat",
      imgUrl: projImg3,
      link: "https://replit.com/@pavitpimchanagu/Pavit#index.js",
    },
    {
      description: "Jamming",
      imgUrl: projImg4,
      link: "https://vercel.com/ppimchan40/jamming",
    },
    {
      description: "TGIX",
      imgUrl: projImg5,
      link: "https://www.dga.or.th/policy-standard/standard/dga-005/tgix-framework/",
    },
    {
      description: "Rodray Application",
      imgUrl: projImg6,
      link: "https://apps.apple.com/th/app/%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A3/id1598053144?l=th",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I show you to all the big and small projects I have done so far</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                          neque provident velit, rem explicabo excepturi id illo molestiae
                          blanditiis, eligendi dicta officiis asperiores delectus quasi inventore
                          debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                          neque provident velit, rem explicabo excepturi id illo molestiae
                          blanditiis, eligendi dicta officiis asperiores delectus quasi inventore
                          debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
