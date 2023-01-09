import React, {FC} from 'react'
import { Characters_filter,  Locations_filter } from './Filters/Filters';

import "./sidebar.scss";

const github_logo = require("../../images/github.png");

export const sidebarTypes = {
    characters: "character",
    locations: "location",
    startpage: "startpage",
    elementpage: "elementpage"
}

interface IProps {
    type:
        typeof sidebarTypes.characters |
        typeof sidebarTypes.locations |
        typeof sidebarTypes.startpage | 
        typeof sidebarTypes.elementpage
};

const Sidebar: FC<IProps> = (props) => {
    const typeID = Object.values(sidebarTypes).indexOf(props.type);
    const sidebarClassName = props.type === "startpage" ? "" : "sidebar--open";
    const Filter = [Characters_filter, Locations_filter, () => <></>, () => <></>][typeID];

    return (
        <div className={"sidebar "+sidebarClassName}>
            <h3 className="sidebar__title">RickMortyAPI</h3>
            <Filter />
            <a className="sidebar__github" href="https://github.com/EmreKose0">
                <img src={github_logo} alt="link to github" />
            </a>
        </div>
    )
}

export default Sidebar