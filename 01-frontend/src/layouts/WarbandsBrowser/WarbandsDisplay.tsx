import "../../css/WarbandsBrowser/WarbandsDisplay.css";
import React, {useState} from "react";
import WarbandModel from "../../models/warbands/WarbandModel";
import {SearchWarband} from "./SearchWarband";
import {Pagination} from "../../universal-components/Pagination";
import {ClearFilters} from "../../universal-components/ClearFilters";


export const WarbandsDisplay: React.FC<{warbands: WarbandModel[]}> = (props) => {
    const [postsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentWarbands = props.warbands.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if(Object.keys(currentWarbands).length === 0)
    {
        return(
            <div className="warbands-display">

                <div className="button-holder">
                    <div className="pagination-bar"><Pagination postsPerPage={postsPerPage} totalPosts={props.warbands.length} currentPage={currentPage} paginate={paginate}></Pagination></div>
                    <div className="clear-filters">
                        <ClearFilters /> </div>
                </div>
                <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                       width="100%" role="grid">
                    <thead className="head-row">
                    <tr role="row">
                        <th >Name
                        </th>
                        <th  >Faction
                        </th>
                        <th  >Number of fighters
                        </th>
                        <th  >Season
                        </th>
                        <th >Rating
                        </th>
                        <th >Details
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr role="row">
                        <td className="empty-row" colSpan={7}>No data available in table</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    return(
        <div className="warbands-display">
<div className="button-holder">
    <div className="pagination-bar"><Pagination postsPerPage={postsPerPage} totalPosts={props.warbands.length} currentPage={currentPage} paginate={paginate}></Pagination></div>
    <div className="clear-filters">
        <ClearFilters /> </div>
</div>

            <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                       width="100%" role="grid">
                    <thead className="head-row">
                    <tr role="row">
                        <th >Name
                        </th>
                        <th  >Faction
                        </th>
                        <th  >Number of fighters
                        </th>
                        <th  >Season
                        </th>
                        <th >Rating
                        </th>
                        <th >Details
                        </th>
                    </tr>
                    </thead>
            <tbody>
            {currentWarbands.map(warband => (
                <SearchWarband warband={warband} key={warband.id}/>
            ))}
            </tbody>
                </table>
        </div>
    );
};