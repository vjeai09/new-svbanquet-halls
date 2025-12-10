import React from "react";
import { motion } from "framer-motion";

const GalleryImage = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="gallery-image"
  />
);

export default GalleryImage;

