import React, {FC} from 'react';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {EmptyList} from "../EmptyList/EmptyList";
import {IRepo} from '../../App';
import {Aside} from "./Aside/Aside";
import {Repo} from "./Repo/Repo";
import s from './Main.module.css';
import ReactPaginate from "react-paginate";

interface IProps {
    repos: IRepo[];
    userName: string;
    pageCount: number;
    setCurrentPage: (selectedPage: number) => void;
    reposCount: number;
    error: string;
}

export const Main: FC<IProps> = ({repos, userName,error, reposCount, pageCount, setCurrentPage}) => {

    const handlePageClick = (e: { selected: number }) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1)
    };

    return (
        <>
            {error && userName ? <EmptyList title="User not found" Icon={PersonOutlineIcon}/>
                : (
                    <div className={s.MainBlock}>
                        <Aside userName={userName} repos={repos}/>
                        <div className={s.Reppp}>
                            <Repo repos={repos} reposCount={reposCount}/>
                            <div className={s.Paginate}>
                                <ReactPaginate
                                    previousLabel={<ArrowBackIosNewIcon className={s.previous}/>}
                                    nextLabel={<ArrowForwardIosIcon className={s.next}/>}
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    // marginPagesDisplayed={2}
                                    // pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={s.pagination}
                                    activeClassName={s.active}
                                />
                            </div>
                        </div>
                    </div>
            )}</>
    )
}