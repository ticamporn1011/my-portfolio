import { Image } from 'antd';

const PortfolioItem = () => {
  return (
    <div className="PortfolioItem">
      <section>
        <Image src="/port-img/mern-workshop.png" alt="port-1" />
        <h5>MERN Stack Project</h5>
        <button type="button">
          <a href="https://github.com/ticamporn1011/mern-stack-project" target="_blank">
            GitHub
          </a>
        </button>
      </section>
      <section>
        <Image src="/port-img/intern-pro.png" alt="intern-pro" />
        <h5>Internship Project</h5>
        <button type="button">
          <a href="https://github.com/ticamporn1011/internship-project" target="_blank">
            GitHub
          </a>
        </button>
      </section>
      <section>
        <Image src="/port-img/web-requests.png" alt="port-1" />
        <h5>Web Requests Project</h5>
        <button type="button">
          <a href="https://github.com/ticamporn1011/web-requests-project" target="_blank">
            GitHub
          </a>
        </button>
      </section>
    </div>
  );
};

export default PortfolioItem;
