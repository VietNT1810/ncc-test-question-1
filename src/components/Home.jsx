import React from "react";
import "../styles/Home.css";

function Home(props) {
  return (
    <div className="homepage">
      <div className="container">
        <div className="logo">
          <img src={require("../assets/images/logoNCC 1.png")} alt="" />
        </div>
        <div className="description">
          <h3 className="description-title">Lorem ipsum dolor sit amet.</h3>
          <div className="description-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </div>
        </div>
        <div className="content">
          <div className="content-item">
            <h3 className="content-title">Lorem ipsum dolor sit amet.</h3>
            <div className="content-info">
              <div className="content-image">
                <img src={require("../assets/images/css-icon 1.png")} alt="" />
              </div>
              <div className="content-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                iure vero ratione odio reiciendis, aliquid animi. Possimus
                quidem laboriosam officia consectetur accusantium, cumque
                laborum eius eaque aliquid asperiores provident corporis facere
                repudiandae quod deserunt omnis saepe culpa perspiciatis labore.
                Ut error atque eius omnis quod dolorem asperiores, porro culpa
                animi dolores accusamus recusandae sapiente ad sequi! Asperiores
                voluptate distinctio nam nisi obcaecati aliquam, non recusandae
                beatae sapiente aspernatur officiis blanditiis.
              </div>
            </div>
          </div>
          <div className="content-item">
            <h3 className="content-title">Lorem ipsum dolor sit amet.</h3>
            <div className="content-info">
              <div className="content-image">
                <img src={require("../assets/images/html-icon 1.png")} alt="" />
              </div>
              <div className="content-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
                qui. Dolorem odio quo aperiam perferendis molestiae dolores
                quidem atque accusamus, voluptatum expedita inventore doloribus
                iusto distinctio id eos libero! Exercitationem hic eos eveniet
                nesciunt! Ullam nesciunt facilis dolores, animi officia earum
                aliquam voluptates cum corporis harum ad omnis officiis deserunt
                autem atque recusandae rem soluta quas vero nemo sunt!
                Praesentium rem adipisci debitis magnam officiis tempora illum
                et saepe commodi!
              </div>
            </div>
          </div>
          <div className="content-item">
            <h3 className="content-title">Lorem ipsum dolor sit amet.</h3>
            <div className="content-info">
              <div className="content-image">
                <img src={require("../assets/images/url-icon 1.png")} alt="" />
              </div>
              <div className="content-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                adipisci accusantium rem reprehenderit in facere expedita,
                possimus reiciendis soluta praesentium corrupti harum aliquid
                vitae incidunt eius. Beatae rerum qui voluptates natus debitis!
                Alias iste vero saepe pariatur perspiciatis voluptatibus
                consectetur, mollitia eius temporibus qui id cum corrupti
                delectus rerum nihil placeat tenetur eligendi, itaque ad quos
                ullam asperiores aut. Rerum pariatur quas, omnis debitis nihil
                incidunt quo ex velit voluptatum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
