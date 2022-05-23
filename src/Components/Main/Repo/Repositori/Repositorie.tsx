import React, { FC } from "react";
import s from './Repositorie.module.css'

type RepositoriePropsType = {
    title: string;
    description: string;
    link: string;
}

export const Repositorie: FC<RepositoriePropsType> = ({link, title, description}) => (
    <div className={s.Wrapper}>
        <a href={link} target={"_blank"} className={s.title}>{title}</a>
        <p className={s.description}>{description}</p>
    </div>
)
