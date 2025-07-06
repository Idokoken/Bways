const express = require("express")
const cloudinary = require("cloudinary").v2;
const Product = require("../models/productModel")

exports.createProduct = async (req, res) => {
    const { name, description, category, rating, price, brand, countInSock, numReviews, sizes, bestseller } = req.body;

    try {
        if (!name || !description || !category || !price || !brand) {
            res.status(400).json({ success: false, msg: "fill required fields" })
        }

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter(a => a !== undefined)

        let imageUrl = await Promise.all(images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" })
            return result.secure_url
        }))

        const product = await new Product({
            name, description, category, rating, price: Number(price), brand, countInSock,
            numReviews,
            image: imageUrl,
            bestseller: bestseller === true ? true : false,
            sizes: JSON.parse(sizes),
            date: Date.now()
        })
        const newProduct = await product.save()
        res.status(200).json({ message: true, data: newProduct })

        // console.log(name, description, category, rating, price, brand, countInSock, numReviews, sizes,
        //     bestseller)
        console.log(imageUrl)

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

exports.updateProduct = async (req, res) => {
    const { name, description, category, rating, price, brand, countInSock, numReviews, image } = req.body;
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,
            { name, description, category, rating, price, brand, countInSock, numReviews, image })
        res.json(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.body.productId)
        res.status(200).json({ message: "Product successfully deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}