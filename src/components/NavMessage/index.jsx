import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";


import LabelBadge from '../LabelBadge'
import NewMsgBtn from '../NewMsgBtn'

import { FaStar } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegEye, FaPen } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { MdOutlineTask, MdDelete, MdKeyboardArrowLeft } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function NavMessage() {
    const typeData = [
        { icon: CiInboxIn, type: 'Inbox', to: 'Inbox' },
        { icon: LuSend, type: 'Sent Emails', to: 'SentEmails' },
        { icon: FaStar, type: 'favorite', to: 'favorite' },
        { icon: FaPen, type: 'Draft', to: 'Draft' },
        { icon: MdDelete, type: 'Deleted', to: 'Deleted' },
        { icon: RiArrowDownSLine, type: 'more', to: 'more' },
    ];
    const badgeData = [
        { color: "red", label: "Label 1" },
        { color: "green", label: "Label 2" },
        { color: "blue", label: "Label 3" },
        { color: "purple", label: "Label 4" },
    ];
    return (
        <div className={style.container}>
            <div className={style.title}><NavLink to={"/"}>
                <MdKeyboardArrowLeft className={style.iconTitle} /></NavLink> <h1>  MailBox</h1> </div>
            <NavLink to={`newmsgbtn`}>
                <NewMsgBtn />
            </NavLink>
            {/* <div className={style.sendBtn} ><SlEnvolopeLetter /><div>New Message</div></div> */}
            <ul>
                {typeData.map((obj, index) => (
                    <NavLink
                        to={`${obj.to}`.toLowerCase()}
                        className={({ isActive }) =>
                            isActive ? style.isActive : ""
                        }
                    >
                        <li className={style.typesEmail} key={index} >
                            <span><obj.icon className={style.icon} /></span>
                            <span>{obj.type}</span>
                        </li>
                    </NavLink>
                ))}
            </ul>
            {badgeData.map((badge, index) => (
                <LabelBadge key={index} color={badge.color} label={badge.label} />
            ))}
        </div>
    );
}