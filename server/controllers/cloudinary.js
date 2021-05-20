const cloudinary = require("cloudinary");

CLOUDINARY_CLOUD_NAME="djnht6rsi",
CLOUDINARY_API_KEY="475561858669826",
CLOUDINARY_API_SECRET="VabBJsijkvqtf2JuIk7GVrSD9ps"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.upload = async (req,res) => {
    let result = await cloudinary.uploader.upload(req.body.image, {
        public_id: `${Date.now()}` ,
        resource_type: "auto",
    });
    res.json({
        public_id: result.public_id,
        url: result.secure_url,
    })
};

exports.remove = async (req,res) => {
    let image_id = req.body.public_id

    cloudinary.uploader.destrpy(image_id, (err, result) => {
        if(err) return res.json({success: false, err});
        res.send("ok");
    });
};