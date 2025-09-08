import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="card-img" src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Mortarion"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLNSVRKO1Zy_yWdB7H-pEW2GjxDookyjR0Q&s"
      tel="+0 000 00 000 001"
      email="morty@deathguard.void"
    />

    <Card
      name="Fulgrim"
      img="https://preview.redd.it/ypwhkt7lcoh31.jpg?width=1080&crop=smart&auto=webp&s=274eb8f582bba1fd6f3a01416753512ceb9db389"
      tel="+0 000 00 000 002"
      email="fulgrim@emperorschildren.perf"
    />

    <Card
      name="Magnus"
      img="https://i.pinimg.com/474x/39/66/6f/39666fb92351fa46ce4145244ca83032.jpg"
      tel="+0 000 00 000 003"
      email="magnus@ts.dust"
    />

    <Card
      name="Angron"
      img="https://www.warhammerart.com/cdn/shop/files/Angron-Primarch-of-the-World-Eaters.jpg?v=1741514888&width=800"
      tel="+0 000 00 000 004"
      email="angron@we.web"
    />
  </div>,
  document.getElementById("root")
);
