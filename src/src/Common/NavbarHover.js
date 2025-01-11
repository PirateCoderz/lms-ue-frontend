import React from "react";
import { motion } from "framer-motion";

const NavbarHover = ({
  isHoverItem,
  toggleHoverChild,
  subMenuAnimate,
  title,
  children,
}) => {
  return (
    <motion.div
      onMouseOver={() => {
        toggleHoverChild(true);
      }}
      onMouseLeave={() => {
        toggleHoverChild(false);
      }}
      className="navbarLink relative cursor-pointer"
    >
      {title}
      <motion.div
        initial="exit"
        animate={isHoverItem ? "enter" : "exit"}
        variants={subMenuAnimate}
        className="absolute bg-bgColor top-[-20px] text-white  left-40 !w-48 !p-4 z-50 !flex !flex-col gap-1 "
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default NavbarHover;
