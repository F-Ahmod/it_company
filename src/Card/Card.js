import React from 'react';
import "./Card.css";


const Card = () => {
  return (
    <div>

      <body class='bbody'>
        <div class="ccontainer">
          <div class="ccard">

            <div class="card-item">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt="" />
              <h3>Design</h3>
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
              <img src="https://raw.githubusercontent.com/Jhonierpc/Web_Practice.io/master/CSS%20Card%20Hover%20Effects/img/code_128.png" alt="" />
              <h3>Code</h3>
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
              <img src="https://raw.githubusercontent.com/Jhonierpc/Web_Practice.io/master/CSS%20Card%20Hover%20Effects/img/launch_128.png" alt="" />
              <h3>Lunch</h3>
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