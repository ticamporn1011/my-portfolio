const SkillItem = () => {
  return (
    <div className="SkillItem">
      <div className="content-item me-5">
        <div className="line-head">
          <div className="line-hr1" />
          <div className="line-hr2" />
        </div>
        <section>
          <article>
            <span>JavaScript</span>
            <hr />
            <span>MongoDB</span>
            <hr />
          </article>
          <article>
            <span>TypeScript</span>
            <hr />
            <span>RESTful API</span>
            <hr />
          </article>
          <article>
            <span>Node.js</span>
            <hr />
            <span>Jest</span>
            <hr />
          </article>
        </section>
      </div>

      <div className="content-item">
        <div className="line-head">
          <div className="line-hr1" />
          <div className="line-hr2" />
        </div>
        <section>
          <article>
            <span>React</span>
            <hr />
            <span>SASS</span>
            <hr />
          </article>
          <article>
            <span>Angular</span>
            <hr />
            <span>Bootstrap</span>
            <hr />
          </article>
          <article>
            <span>Vue</span>
            <hr />
            <span>Figma</span>
            <hr />
          </article>
        </section>
      </div>
    </div>
  );
};

export default SkillItem;
