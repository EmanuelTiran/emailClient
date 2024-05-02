import React from "react";
import style from "./style.module.css";

import { IoMdVideocam, IoIosTimer, IoMdPeople, IoIosStats } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavMain() {
    const iconsData = [
        { icon: IoIosTimer, title: 'Timer' },
        { icon: MdOutlineTask, title: 'Task' },
        { icon: FaRegEye, title: 'Watch' },
        { icon: IoMdPeople, title: 'Messages' },
        { icon: IoIosStats, title: 'Stats' },
        { icon: IoMdVideocam, title: 'Videocam' }
    ];

    return (
        <div className={style.container}>
            <img src="./vite.svg" alt="img" />
            <ul className={style.ul}>
                {iconsData.map((obj, index) => (
                    <NavLink
                        to={`${obj.title}`.toLowerCase()}
                        className={({ isActive }) =>
                        isActive ? style.isActive : ""
                        }
                    >
                        <div className={style.border}>
                            <li className={style.li} key={index} title={obj.title}>
                                <button href="#" tabIndex="0">
                                    <obj.icon className={style.icon} />
                                </button>
                            </li></div>
                    </NavLink>

                ))}
            </ul>
            <img src="https://media.licdn.com/dms/image/D4E03AQHe-CJLAEuSHw/profile-displayphoto-shrink_200_200/0/1710072847205?e=1717632000&v=beta&t=z8CGoYS3p3T-a63xZ2_qScuGgaihthXVxHFperQrkYs" alt="img" />
        </div>
    );
}