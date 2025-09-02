import React from "react";
import ReactDOM from "react-dom";

// When adding in HTML elements for JSX, such as global attributes, you need to use camel case.  So something like
// contenteditable in the global elements for HTML, would need to be added as contentEditable for JSX

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Movies
    </h1>
    <div>
      <img
        src="https://www.coverwhiz.com/uploads/movies/jurassic-park.jpg"
        alt="Jurassic Park"
      />
      <img
        src="https://i.ebayimg.com/images/g/z-QAAOSwIYtdZiKy/s-l1200.jpg"
        alt="Donnie Darko"
      />
      <img
        src="https://artofthemovies.co.uk/cdn/shop/products/green_mile_advance_intl_BM13321_B-441997_fa98fce1-ef40-4cde-9618-3a4c014122c0.jpg?v=1656081505"
        alt="The Green Mile"
      />
    </div>
  </div>,
  document.getElementById("root")
);
