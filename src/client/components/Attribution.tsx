import * as React from 'react';
import Form from './Form';


const Attribution: React.FC<AttributionProps> = props => {

    return (
      <section className="page-section bg-light" id="team">
      <div className="container">
      <h1 className="text-dark card-title text-center display-6"><strong>Welcome to the TIGR tracker!</strong></h1>
                        <p className="text-dark text-center my-3">TIGR Tracker was built by four people who felt that you should spend less time hunting for deals and more time doing what you want.</p>
                        <p className="text-dark text-center my-3">We watch websites of the hottest retailers around, checking for sales on the products you crave every minute to ensure you don't miss a thing.</p>
                        <p className="text-dark text-center my-3">Once our little robots spot a sale, you immediately receive an email letting you know that it's time to pounce!</p>
          <div className="text-center">
              <h2 className="section-heading text-uppercase">Meet the Tigr Team!</h2>
              <h3 className="section-subheading text-muted"></h3>
          </div>
          <div className="row">
              <div className="col-lg-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="media/headshots/brandon_bw.jpg" alt="..." />
                      <h4>Brandon Varner</h4>
                      <p className="text-muted">Back-End</p>
                      <p className="card-text">I’m a writer, editor, videographer, and junior-level full-stack software engineer with a strong attention to detail. I’ve earned an intersectional project management perspective through a diverse working background.</p>
                      <a className="btn btn-dark btn-social mx-2" href="https://github.com/brvarner" target="blank"><i className="fab fa-github"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="media/headshots/timple_bw.jpeg" alt="..." />
                      <h4>Timple Basinger</h4>
                      <p className="text-muted">Back-End</p>
                      <p className="card-text">Web development bootcamp graduate seeking to merge new skillset with accounting background to become a junior-level developer. Strong problem solver eager to conquer new projects.</p>
                      <a className="btn btn-dark btn-social mx-2" href="https://github.com/Tarrin247" target="blank"><i className="fab fa-github"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="media/headshots/mal_bw.png" alt="..." />
                      <h4>Mallorie Corbin</h4>
                      <p className="text-muted">Front-End</p>
                      <p className="card-text">Early career Full Stack Engineer excited to support your organization's growth and sustainability. Supported the development and launch of two startup companies, that are still in operation today, with leadership and team-building skills.</p>
                      <a className="btn btn-dark btn-social mx-2" href="https://github.com/careerstudent" target="blank"><i className="fab fa-github"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="row justify-content-around">
              <div className="col-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="media/headshots/nick_bw.png" alt="..." />
                      <h4>Nick Harris</h4>
                      <p className="text-muted">Front-End</p>
                      <p className="card-text">Learned how to code in HTML, CSS, and JavaScript languages, and familiar with basic Game Development. I can write and arrange Instrumental Music, experienced video editing skills, and have tons of knowledge in building computers.</p>
                      <a className="btn btn-dark btn-social mx-2" href="https://github.com/NickTheFerret" target="blank"><i className="fab fa-github"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div> 
              <div className="col-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="media/headshots/luis_bw.jpg" alt="..." />
                      <h4>Luis Garcia</h4>
                      <p className="text-muted">Front-End</p>
                      <p className="card-text">Early technology developer, with a focus on web  design and layout. Excited to transition into a technical position to leverage and utilize new skills for  the future of work.</p>
                      <a className="btn btn-dark btn-social mx-2" href="https://github.com/LuisG-Zero" target="blank"><i className="fab fa-github"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
        </div>
        </div>
          <div className="row">
              <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Our team of developers work hard, so you won't have to!</p></div>
          </div>
      </div>
  </section>
    );
};

interface AttributionProps {}

export default Attribution;
