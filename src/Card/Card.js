import React from 'react';
import "./Card.css";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image2.jpeg";

const Card = () => {
  return (
    <div>

      <body class='bbody'>
        <div class="ccontainer">
          <div class="ccard">

            <div class="card-item">
              <img src={image1}alt="" />
              <h3>QA Tasting</h3>
            </div>
            <div class="card-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni blanditiis, mollitia hic soluta
                voluptatibus maiores sit, laborum delectus voluptatum velit modi suscipit eum maxime corporis
                doloribus placeat omnis neque?</p>
              <a href="#">Read More</a>
            </div>

          </div>
          <div class="ccard">

            <div class="card-item">
              <img src={image2} alt="" />
              <h3>Web Developr</h3>
            </div>
            <div class="card-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni blanditiis, mollitia hic soluta
                voluptatibus maiores sit, laborum delectus voluptatum velit modi suscipit eum maxime corporis
                doloribus placeat omnis neque?</p>
              <a href="#">Read More</a>
            </div>

          </div>
          <div class="ccard">

            <div class="card-item">
              <img src={image3} alt="" />
              <h3>seccority</h3>
            </div>
            <div class="card-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni blanditiis, mollitia hic soluta
                voluptatibus maiores sit, laborum delectus voluptatum velit modi suscipit eum maxime corporis
                doloribus placeat omnis neque?</p>
              <a href="#">Read More</a>
            </div>

          </div>
        </div>

      </body>

    </div>
  );
};

export default Card;