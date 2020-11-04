import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ProductDetails = ({ match }) => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    // const [description, setDescription] = ('')


    useEffect(() => {
        async function fetchData() {
            await axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    const alldata = response.data
                    setPost(alldata)
                })
        }
        fetchData()
        setLoading(true)
    }, [])

    const RenderProductDeatils = () => {
        return (
            <div>
                {post.filter(item => item.id === parseInt(match.params.id)).map(filterprod => {

                    return (
                        <div key={filterprod.id} className=" m-5">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6">
                                    <img style={{ width: "70%" }} src={filterprod.image} alt={filterprod.image} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 text-left">
                                    <h2>{filterprod.title}   <span className="badge badge-secondary">{filterprod.category}</span></h2>
                                    <hr />
                                    <h5>Price(USD) : <span className="badge badge-info">{filterprod.price} $</span> </h5>
                                    <h5>Description : </h5>
                                    <p> {filterprod.description}  </p>
                                    <button type="button" className="btn btn-outline-info">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            { loading ? <RenderProductDeatils /> : (<div> <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
            </div></div>)}
        </div>
    )
}