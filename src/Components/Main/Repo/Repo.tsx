import React, {FC} from "react";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {Repositorie} from "./Repositori/Repositorie";
import {EmptyList} from "../../EmptyList/EmptyList";
import {IRepo} from "../../../App";
import s from './Repo.module.css'

interface IProps {
    repos: IRepo[];
    reposCount: number;
}

export const Repo: FC<IProps> = ({repos, reposCount}) => (
    <>
        {reposCount ? <div className={s.Wrapper}>
            <div>
                <h1 className={s.Header}>Repositories({reposCount})</h1>
            </div>
            {repos.map(({id, name, description, html_url}) => (
                <Repositorie key={id} title={name} link={html_url} description={description}/>
            ))}
        </div> : <EmptyList title="Repository list is empty" Icon={CancelPresentationIcon}/>
        }
    </>
)
