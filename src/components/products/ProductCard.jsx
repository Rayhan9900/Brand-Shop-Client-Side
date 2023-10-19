import { Link } from "react-router-dom"


function ProductCard({ product }) {
    const { Image, BrandName, Name, ShortDescription, Price, Rating, _id } = product;
    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-72 h-48" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="ml-7 text-amber-500">{BrandName}</p>
                    <h2 className="card-title ml-7 text-amber-600">{product.Name}</h2>
                    <p className="ml-7">{ShortDescription}</p>
                    <p className="ml-7">{Price}</p>
                    <p className="ml-7">{Rating}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/upDate/${_id}`}>
                            <button className="btn btn-secondary">Update</button>

                        </Link>

                        <Link to={`/details/${_id}`}><button className="btn btn-secondary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard