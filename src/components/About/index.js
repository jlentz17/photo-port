import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
      <div className="my-2">
        <p>
          Lorem ipsum hadihadshjasdo asghdsaihas ashgdhiag asgdhagdhakhd ashgfjvfsKjs dahfjsh dshfjsHzfkjhsdKJkj dsjhfsjkdsjkh hdj  dahz hadih hasih  dhjahdfjahj.
        </p>
      </div>
    </section>
  );
}

export default About;
