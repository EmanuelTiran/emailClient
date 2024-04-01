import React from 'react'
import { IoMdVideocam, IoIosTimer,  IoMdPeople, IoIosStats, } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";
import IconMain from '../IconMain/index'
export default function NavMain() {
    const iconsData = [
        { icon: <IoIosTimer />, title: 'Timer' },
        { icon: <MdOutlineTask />, title: 'Task' },
        { icon: <FaRegEye />, title: 'Watch' },
        { icon: <IoMdPeople />, title: 'Messages' },
        { icon: <IoIosStats />, title: 'Stats' },
        { icon: <IoMdVideocam />, title: 'Videocam' }
    ];

    return (
        <div>
            {iconsData.map((data, index) => (
                <IconMain key={index} icon={data.icon} title={data.title} />
            ))}
        </div>
    )
}
