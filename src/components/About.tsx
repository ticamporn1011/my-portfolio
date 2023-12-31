const About = () => {
  return (
    <div id="about" className="About about">
      <div>
        <img src="/profile2.jpg" alt="profile2" width={350} />
      </div>
      <div className="about__content">
        <h1>Profile</h1>
        <p className="mb-4 p-descript">
          I chose full stack developer. Because I think this is the best I can do. It
          always gives me new and creative ideas. Because it requires a fair amount of
          coding skills, I have to be thorough for the best results. I am always ready to
          improve myself, update my knowledge and practice doing projects to improve my
          skills.
        </p>
        <section>
          <article>
            <div>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <p>
              <b>University:</b> Mae Fah Luang University
            </p>
            <p>
              <b>School:</b> Information Technology
            </p>
            <p>
              <b>Major: </b>Computer Engineering
            </p>
          </article>
          <article>
            <div>
              <i className="fa-solid fa-address-card"></i>
            </div>
            <p>
              <b>Gmail:</b> ticamporn.g@gmail.com
            </p>
            <p>
              <b>Tel:</b> +66 6109 62733
            </p>
            <p>
              <b className="pe-1">Discord:</b>
              <a href="https://discordapp.com/users/916298337232252939">
                My link of user id
              </a>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
