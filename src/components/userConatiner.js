/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import Pagination from './Pagination'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserConatainer = ({ userData, fetchUsers }) => {
    const [post, setPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    useEffect(() => {
        // fetchUsers()
        // // console.log(userData)
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const alldata = response.data

                setPost(alldata)
                if (post === []) {
                    console.log('laoding...')
                }


            })
    }, [])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)



    return (
        <div>
            <div className="row m-4">
                {currentPost.map((item, i) => {
                    return (
                        <div key={i} className="card m-4" style={{ width: "18rem", height: "475px" }}>
                            <p style={{ textAlign: "right" }}><span className="badge badge-info">{item.category}</span></p>
                            <img style={{ width: "50%", margin: "auto", padding: "20px" }} className="card-img-top" src={item.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p> <strong> Price: {item.price}$  </strong></p>
                                <div>
                                    <Link to={`products/${item.id}`} className="btn btn-outline-info">Get Details</Link>
                                </div>

                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    )
                })}
            </div>
            <hr />

            <Pagination currentPage={currentPage} postPerPage={postPerPage} totalPost={post.length} paginate={paginate} />

            <hr />

        </div>


    )

}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserConatainer)