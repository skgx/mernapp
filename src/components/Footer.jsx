import React from "react";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col">
          <span className="text-muted" style={{"padding-left":"45%"}}>© 2023 FEASTO Inc</span>
        </div>
      </footer>
    </div>
  )
}
