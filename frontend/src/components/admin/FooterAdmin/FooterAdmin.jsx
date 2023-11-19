import React from "react";
import { Link } from "react-router-dom";

const FooterAdmin = () => {
  return (
    <div>
      <footer className=" ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="mb-3 mt-4 block text-md text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2023 . All rights reserved. | Repost by{" "}
            <Link to={"https://debritto.sch.id/"} className="hover:underline">
              SMA Kolese De Britto
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FooterAdmin;
