import * as React from 'react';
import Form from './Form';


const Attribution: React.FC<AttributionProps> = props => {

    return (
        <div className="card-group">
        <div className="card">
          <img className="card-img-top" src="media/headshots/luis_bw.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Luis Garcia</h5>
            <p className="card-text">Early technology developer, with a focus on web  design and layout. Excited to transition into a technical position to leverage and utilize new skills for  the future of work.</p>
            <a href="https://github.com/LuisG-Zero" target="blank" className="btn btn-primary">GitHub</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="media/headshots/timple_bw.jpeg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Timple Basinger</h5>
            <p className="card-text">Web development bootcamp graduate seeking to merge new skillset with accounting background to become a junior-level developer. Strong problem solver eager to conquer new projects.</p>
            <a href="https://github.com/Tarrin247" target="blank" className="btn btn-primary">GitHub</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="media/headshots/mal_bw.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Mallorie Corbin</h5>
            <p className="card-text">Early career Full Stack Engineer excited to support your organization's growth and sustainability. Supported the development and launch of two startup companies, that are still in operation today, with leadership and team-building skills.</p>
            <a href="https://github.com/careerstudent" target="blank" className="btn btn-primary">GitHub</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="media/headshots/nick_bw.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Nick Harris</h5>
            <p className="card-text">Learned how to code in HTML, CSS, and JavaScript languages, and familiar with basic Game Development. I can write and arrange Instrumental Music, experienced video editing skills, and have tons of knowledge in building computers.</p>
            <a href="https://github.com/NickTheFerret" target="blank" className="btn btn-primary">GitHub</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="media/headshots/brandon_bw.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Brandon Varner</h5>
            <p className="card-text">I’m a writer, editor, videographer, and junior-level full-stack software engineer with a strong attention to detail. I’ve earned an intersectional project management perspective through a diverse working background.</p>
            <a href="https://github.com/brvarner" target="blank" className="btn btn-primary">GitHub</a>
          </div>
        </div>
      </div>
    );
};

interface AttributionProps {}

export default Attribution;
