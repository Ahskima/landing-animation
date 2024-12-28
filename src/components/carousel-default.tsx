'use client'
import React, { useState } from "react";
import Carousel, {
    CarouselAnimation,
    CarouselContainer,
    CarouselContent,
    CarouselPreview,
  } from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import {v4 as uuidv4} from 'uuid'

const Images = [
    "https://images.unsplash.com/photo-1728963129443-5cc8442555fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728963129443-5cc8442555fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728963129443-5cc8442555fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728963129443-5cc8442555fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728963129443-5cc8442555fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728963129443-5cc8442555fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
const DefaultCarousel = () => {
    const [idx, setIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(idx);
  
    const trend = idx > prevIdx ? 1 : -1;
    const imageIndex = Math.abs(idx % Images.length);
  return (
    <Carousel className="relative">
      <CarouselContainer className="relative z-10">
        <CarouselContent className="flex flex-col max-lg:items-end gap-20">
          <div></div>
        </CarouselContent>
        <CarouselPreview className="">
          <CarouselAnimation
            onNext={() => {
              setPrevIdx(idx);
              setIdx((pv) => pv + 1);
            }}
            onPrev={() => {
              setPrevIdx(idx);
              setIdx((pv) => pv - 1);
            }}
            data={Images}
            dataIndex={imageIndex}
            setIndex={setIdx}
            noIndicator
          >
            <AnimatePresence initial={false} custom={trend}>
              <motion.img
                variants={imgVariants}
                custom={trend}
                initial="initial"
                animate="animate"
                exit="exit"
                key={uuidv4()}
                src={Images[imageIndex]}
                alt={""}
                className="absolute bg-black shadow-2xl mx-auto w-full h-full object-cover"
              />
            </AnimatePresence>
          </CarouselAnimation>
        </CarouselPreview>
      </CarouselContainer>
    </Carousel>
  );
};

export default DefaultCarousel;


const imgVariants = {
    initial: (trend: 1 | 0) => ({
      y: trend === 1 ? 10 : -10,
      opacity: 0,
    }),
    animate: { y: 0, opacity: 1 },
    exit: (trend: 1 | 0) => ({
      y: trend === 1 ? -2.5 : 2.5,
      opacity: 0,
    }),
  };
