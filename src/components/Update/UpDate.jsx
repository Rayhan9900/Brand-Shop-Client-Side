
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom'

function UpDate() {

    const singleData = useLoaderData()

    const { Name, BrandName, Type, Price, ShortDescription, Rating, Image, _id } = singleData;
    console.log(singleData)

    const handleUpdatePhone = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const BrandName = form.brandName.value;
        const Type = form.phone.value;
        const Price = form.price.value;
        const ShortDescription = form.short.value;
        const Rating = form.rating.value;
        const Image = form.photo.value;
        const updata = { Name, BrandName, Type, Price, ShortDescription, Rating, Image }

        fetch(`https://brand-shop-server-i09jslbpl-rayhanmahmud990099-gmailcom.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updata)

        })
            .then(res => res.json())

            .then(data => {
                if (data.acknowledged) {
                    toast.success('Update Product SuccessFully')
                }
            })


    }




    return (
        <div>
            <form onSubmit={handleUpdatePhone} >
                {/* form name and brand name row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={Name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" defaultValue={BrandName} placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form sphone and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="phone" defaultValue={Type} placeholder="Phone" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="short" defaultValue={ShortDescription} placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={Rating} placeholder="Reting" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" defaultValue={Image} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="UpDate Phone" className="btn btn-block" />
            </form>

        </div>
    )
}

export default UpDate