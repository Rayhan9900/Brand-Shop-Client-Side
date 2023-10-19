import { Link } from "react-router-dom"


function ProductCard({ product }) {
    const { Image, BrandName, Name, ShortDescription, Price, Rating, _id } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{BrandName}</p>
                    <h2 className="card-title">{product.Name}</h2>
                    <p>{ShortDescription}</p>
                    <p>{Price}</p>
                    <p>{Rating}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/upDate/${_id}`}>
                            <button className="btn btn-primary">Update</button>

                        </Link>

                        <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard