import { Image } from 'antd';

const PortfolioItem = () => {
  return (
    <div className="PortfolioItem">
      <section>
        <Image src="/port-img/mern-workshop.png" alt="port-1" />
        <h5>MERN Stack Project</h5>
        <span>
          Article management system that users can use to read articles And admins can
          add, delete, and edit articles using CRUD RestAPI and set access permissions
          with JWT.
        </span>
        <button type="button">
          <a href="">GitHub</a>
        </button>
      </section>
      <section>
        <Image src="/port-img/intern-pro.png" alt="intern-pro" />
        <h5>Internship Project</h5>
        <span>
          It is a project that I have done during my internship period. By creating a
          system to add features to the seller-side products, such as specifying size and
          color for clothing products, using the MEAN Stack.
        </span>
        <button type="button">
          <a href="">GitHub</a>
        </button>
      </section>
      <section>
        <Image src="/port-img/web-requests.png" alt="port-1" />
        <h5>Web Requests Project</h5>
        <span>
          This project is in the Web Application Development course. It's about user
          requests. Users can add, delete and edit data. It also links to MySQL database
          to show the dashboard.
        </span>
        <button type="button">
          <a href="">GitHub</a>
        </button>
      </section>
      {/* <section>
        <img src="src/assets/images/port/port-1.jpg" alt="port-1" />
        <h5>MERN Stack project</h5>
        <span>Lorem ipsum dolor, sit amet consect</span>
        <button type="button">
          <a href="">GitHub</a>
        </button>
      </section>
      <section>
        <img src="src/assets/images/port/port-1.jpg" alt="port-1" />
        <h5>MERN Stack project</h5>
        <span>Lorem ipsum dolor, si</span>
        <button type="button">
          <a href="">GitHub</a>
        </button>
      </section> */}
    </div>
  );
};

export default PortfolioItem;
