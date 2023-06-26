import "./index.css";
import React, { useEffect, useState } from "react";
import Task from "../Task/Task";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TaskList = ({ todos }) => {
  const NextButton = () => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext}>Next</button>;
  };
  useEffect(() => {}, [todos]);
  return (
    <div className="TaskList">
      <Swiper modules={[Pagination]} className="Task__Swiper">
        
        <SwiperSlide>
          <h3>  Personale    <br />🔜</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>  🔙 Health 🔜</h3>
     
        </SwiperSlide>
        <SwiperSlide>
          <h3>  🔙Work</h3>
        </SwiperSlide>
      </Swiper>
      <ul>
        {todos?.map((todos) => (
          <li key={todos.id}>
            <Task todos={todos} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
