import '../style/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const name = `I'm Ticamporn`;
  return (
    <div className="Intro">
      <div>
        <div className="intro-cont-1 d-flex flex-column">
          <div className="d-flex gap-2 hello">
            <span>Hello !!!</span>
            <img
              className="hello-img"
              src="/icons/hello.png"
              alt="hello"
              width={35}
              height={35}
            />
          </div>
          <span>{name}</span>
          <span>See more about me</span>
        </div>
        <div className="intro-footer">
          <Link to="/resume.pdf" target="_blank">
            <button type="button" className="fs-4 me-3">
              Resume
            </button>
          </Link>
          <a href="mailto:ticamporn.g@gmail.com">
            <img src="/icons/email.png" alt="gmail" width={40} />
          </a>
          <a href="https://github.com/ticamporn1011" target="_blank">
            <img src="/icons/github.png" className="p-1" alt="github" width={40} />
          </a>
        </div>
      </div>
      <div className="img-profile">
        <img
          src="/profile.jpg"
          className="rounded-circle"
          alt="profile"
          width={410}
          height={380}
        />
      </div>
    </div>
  );
};

export default Home;
