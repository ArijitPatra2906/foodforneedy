import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from "../dummy.json"
import "../Pages/Ngo/Ngo.css"
import ReactPaginate from "react-paginate"

function Table() {
    const [query, setQuery] = useState("")
    const [ngoData, setNgoData] = useState(Data.NgoData)
    const [pageNumber, setPageNumber] = useState(0)
    const dataPerPage = 10
    const pageVisited = pageNumber * dataPerPage
    const dataNgo = ngoData.filter(NgoData => NgoData.address.toLowerCase().includes(query))
    const displayData = dataNgo.slice(pageVisited, pageVisited + dataPerPage).map((c) => {
        return (
            <>
                <div>
                </div>
                <div style={{
                    display: "flex",
                    border: "1px solid black",
                    marginLeft: "50px",
                    marginRight: "50px",
                    fontSize: "14px",
                    fontWeight: 'normal'

                }}>
                    <div style={{
                        display: "flex",
                        // borderLeft: "1px solid black",
                        borderRight: "1px solid black",


                    }}>
                        <div style={{
                            display: "flex",
                            borderRight: "1px solid black",
                            // borderLeft: "1px solid black",


                        }}>
                            <h3 style={{
                                width: "40px",
                                marginLeft: "20px",
                            }}>
                                {c.id}
                            </h3>
                            <h3 style={{
                                width: "230px"
                            }}>
                                {c.name}
                            </h3>
                        </div>
                        <h3 style={{
                            width: "700px",
                            marginLeft: "20px"
                        }}>{c.address}</h3>
                    </div>
                    <h3 style={{
                        width: "200px",
                        marginLeft: "80px"
                    }}>{c.contact}</h3>
                </div >
            </>



        )
    })

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    const pageCount = Math.ceil(ngoData.length / dataPerPage)


    return (
        <div className='ngo'
            style={{
                marginTop: "20px"
            }}>
            <div className='filter'>
                <input onChange={e => setQuery(e.target.value)} type="number" placeholder='Search by pincode' className='search' />
            </div>
            <div >
                {displayData}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"disabledBttn"}
                    activeClassName={"activeBttn"}
                />
            </div>
        </div >
    )
}

export default Table