import '../style/Home.css';

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
              src="src/assets/icons/hello.png"
              alt="hello"
              width={35}
              height={35}
            />
          </div>
          <span>{name}</span>
          <span>See more about me</span>
        </div>
        <div className="intro-footer">
          <button type="button" className="fs-4 me-3">
            Resume
          </button>
          <a href="#g-mail">
            <img src="src/assets/icons/email.png" alt="gmail" width={40} />
          </a>
          <a href="#gitHub">
            <img
              src="src/assets/icons/github.png"
              className="p-1"
              alt="github"
              width={40}
            />
          </a>
        </div>
      </div>
      <div className="img-profile">
        <img
          src="src/assets/profile.jpg"
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