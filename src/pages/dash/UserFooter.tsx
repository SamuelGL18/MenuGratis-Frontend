import { useEffect, useState, useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ControllersContext } from "./Context";

const UserFooter = () => {
  const { data } = useContext(ControllersContext);
  const url = `http://localhost:5173/ver/${data?._id}`;
  const handleClick = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // Reset copied state after 1.5 seconds
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <footer className="bg-primary-subtle py-5">
      <div className="d-flex justify-content-center">
        <NavLink
          className="me-3"
          to={"https://www.instagram.com/j_samuel190/?hl=es-la"}
        >
          <Image src="../../../public/instagram.png" height={30} width={30} />
        </NavLink>
        <NavLink
          className="me-3"
          to={"https://www.facebook.com/profile.php?id=100026046003163"}
        >
          <Image src="../../../public/facebook.png" height={30} width={30} />
        </NavLink>
        <NavLink to={""}>
          <Button
            variant="transparent"
            onClick={handleClick}
            className="nav-link p-text-style"
          >
            <Image src="../../../public/link.png" height={30} width={30} />
          </Button>
        </NavLink>
      </div>
    </footer>
  );
};

export default UserFooter;