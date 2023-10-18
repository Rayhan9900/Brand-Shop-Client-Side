import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";


function AddProduct() {
    const navigate = useNavigate()
    const handlePhone = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const BrandName = form.brand.value;
        const Type = form.phone.value;
        const Price = form.price.value;
        const ShortDescription = form.short.value;
        const Rating = form.rating.value;
        const Image = form.photo.value;
        const data = { Name, BrandName, Type, Price, ShortDescription, Rating, Image }
        console.log(data)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())

            .then(data => {
                if (data.insertedId) {
                    toast.success('Add Product SuccessFully')
                    navigate('/products')
                }
            })


    }

    return (
        <div>
            <form onSubmit={handlePhone} >
                {/* form name and brand name row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form sphone and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Phone</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form short and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Reting" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Phone" className="btn btn-block" />
            </form>
        </div>
    )
}

export default AddProduct