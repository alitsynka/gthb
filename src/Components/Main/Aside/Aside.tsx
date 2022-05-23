import React, {FC, useEffect, useState} from "react";
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { IRepo } from "../../../App";
import s from './Aside.module.css';

interface IUser {
    avatar_url: string,
    name: string,
    followers: number,
    following: number,
    login: string,
    html_url: string
}

interface IProps {
    userName: string;
    repos: IRepo[];
}

export const Aside: FC<IProps> = ({userName, repos}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!userName) {
            return;
        }
        fetch(`https://api.github.com/users/${userName}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userName, repos]);

    const {avatar_url, name, followers, following, login, html_url} = user as IUser;

    return (
        <div className={s.Wrapper}>
            {/*<div className={s.photo}></div>*/}
            <img
                className={s.photo}
                src={avatar_url}
                alt={`Avatar for ${userName}`}
            />
            <div className={s.GreetingContainer}>
                <h2 className={s.name}>{name}</h2>
                <a href={html_url}
                >{login}</a>
                <div className={s.followers}>
                    <div className={s.follower1}>
                        <PeopleIcon style={{color: "#808080", fontSize: "20px"}} className={s.peoples}/>
                        <p>{followers} followers</p>
                    </div>
                    <div className={s.follower2}>
                        <PersonIcon style={{color: "#808080", fontSize: "20px"}} className={s.peoples}/>
                        <p>{following} following</p>
                    </div>
                </div>
            </div>
        </div>
    )
}