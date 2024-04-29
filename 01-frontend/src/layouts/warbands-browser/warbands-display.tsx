import "../../css/warbands-browser/warbands-display.css";
import React, {useState} from "react";
import WarbandModel from "../../models/warbands/warband-model";
import {SearchWarband} from "./search-warband";
import {Pagination} from "../../universal-components/pagination";
import {ClearFilters} from "../../universal-components/clear-filters";
import {within} from "@testing-library/react";


export const WarbandsDisplay: React.FC<{ warbands: WarbandModel[] }> = (props) => {
    const [postsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentWarbands = props.warbands.slice(indexOfFirstPost, indexOfLastPost);

    const screenWidth = window.innerWidth;


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (Object.keys(currentWarbands).length === 0) {
        return (
            <div className="warbands-display">

                <div className="button-holder">
                    <div className="pagination-bar"><Pagination postsPerPage={postsPerPage}
                                                                totalPosts={props.warbands.length}
                                                                currentPage={currentPage}
                                                                paginate={paginate}></Pagination></div>
                    <div className="clear-filters">
                        <ClearFilters/></div>
                </div>
                {screenWidth < 600 ? <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                                            width="100%" role="grid">
                    <thead className="head-row">
                    <tr role="row">
                        <th>Name
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <td className="empty-row" colSpan={2}>No data available in table</td>
                    </tbody>
                </table> : <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                                  width="100%" role="grid">
                    <thead className="head-row">
                    <tr role="row">
                        <th>Name
                        </th>
                        <th>Faction
                        </th>
                        <th>Number of fighters
                        </th>
                        <th>Season
                        </th>
                        <th>Rating
                        </th>
                        <th>Details
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <td className="empty-row" colSpan={7}>No data available in table</td>
                    </tbody>
                </table>}
            </div>
        );
    }
    return (
        <div className="warbands-display">
            <div className="button-holder">
                <div className="pagination-bar"><Pagination postsPerPage={postsPerPage}
                                                            totalPosts={props.warbands.length} currentPage={currentPage}
                                                            paginate={paginate}></Pagination></div>
                <div className="clear-filters">
                    <ClearFilters/></div>
            </div>

            {screenWidth < 600 ? <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                                        width="100%" role="grid">
                <thead className="head-row">
                <tr role="row">
                    <th>Name
                    </th>
                </tr>
                </thead>
                <tbody>
                {currentWarbands.map(warband => (
                    <SearchWarband warband={warband} key={warband.id}/>
                ))}
                </tbody>
            </table> : <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                              width="100%" role="grid">
                <thead className="head-row">
                <tr role="row">
                    <th>Name
                    </th>
                    <th>Faction
                    </th>
                    <th>Number of fighters
                    </th>
                    <th>Season
                    </th>
                    <th>Rating
                    </th>
                    <th>Details
                    </th>
                </tr>
                </thead>
                <tbody>
                {currentWarbands.map(warband => (
                    <SearchWarband warband={warband} key={warband.id}/>
                ))}
                </tbody>
            </table>}

        </div>
    );
};