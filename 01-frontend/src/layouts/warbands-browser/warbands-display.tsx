import React, { useState, useMemo, useEffect } from "react";
import WarbandModel from "../../models/warbands/warband-model";
import { SearchWarband } from "./search-warband";
import { Pagination } from "../../universal-components/pagination";
import { useWarbandFiltersTogglesContext } from "./contexts/warband-filters-toggles-context";
import { ClearFilters } from "../../universal-components/clear-filters";

export const WarbandsDisplay: React.FC<{ warbands: WarbandModel[] }> = (props) => {
    const [postsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sortedWarbands = useMemo(() => {
        if (sortField) {
            return props.warbands.slice().sort((a, b) => {
                let aValue;
                let bValue;

                if (sortField === "faction") {
                    aValue = a.factionName;
                    bValue = b.factionName;
                } else {
                    aValue = a[sortField as keyof WarbandModel];
                    bValue = b[sortField as keyof WarbandModel];
                }

                if (aValue < bValue) {
                    return sortDirection === "asc" ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortDirection === "asc" ? 1 : -1;
                }
                return 0;
            });
        }
        return props.warbands;
    }, [props.warbands, sortField, sortDirection]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentWarbands = sortedWarbands.slice(indexOfFirstPost, indexOfLastPost);

    const sortByField = (field: string) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
            setCurrentPage(1);
        }
    };

    const renderSortIndicator = (field: string) => {
        if (sortField === field) {
            return (
                <span>
                    {sortDirection === "asc" ? <>&uarr;</> : <>&darr;</>} <span className="sr-only"></span>
                </span>
            );
        }
        return (
            <span>
                <>&uarr;&darr;</>
            </span>
        );
    };

    const { clearAllFilters } = useWarbandFiltersTogglesContext();

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const clearFilters = () => {
        clearAllFilters();
    };

    return (
        <div className="warbands-display">
            <div className="button-holder">
                <div className="pagination-bar">
                    <Pagination postsPerPage={postsPerPage} totalPosts={sortedWarbands.length} currentPage={currentPage} paginate={paginate} />
                </div>
                <div className="clear-filters">
                    <ClearFilters onClick={clearFilters} />
                </div>
            </div>

            <table className="table table-striped dt-responsive dataTable no-footer dtr-inline" width="100%" role="grid">
                <thead className="head-row">
                <tr role="row">
                    {screenWidth >= 600 && (
                        <>
                            <th onClick={() => sortByField("name")}>
                                Name {renderSortIndicator("name")}
                            </th>
                            <th onClick={() => sortByField("faction")}>
                                Faction {renderSortIndicator("faction")}
                            </th>
                            <th onClick={() => sortByField("numberOfFighters")}>
                                Number of fighters {renderSortIndicator("numberOfFighters")}
                            </th>
                            <th onClick={() => sortByField("season")}>
                                Season {renderSortIndicator("season")}
                            </th>
                            <th onClick={() => sortByField("rating")}>
                                Rating {renderSortIndicator("rating")}
                            </th>
                        </>
                    )}
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {currentWarbands.length === 0 ? (
                    <tr>
                        <td colSpan={screenWidth >= 600 ? 6 : 2}>No warbands found</td>
                    </tr>
                ) : (
                    currentWarbands.map((warband) => (
                        <SearchWarband warband={warband} key={warband.id} />
                    ))
                )}
                </tbody>
            </table>
        </div>
    );

};
