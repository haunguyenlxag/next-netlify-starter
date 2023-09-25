// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  { NextApiRequest, NextApiResponse } from 'next'
import homepageController from "../../controllers/homepageController";


export default function handler(
    req,
    res
) {
    if (req.method === 'POST') {
        homepageController.postWebhook(req, res);
    } else {
        homepageController.getWebhook(req, res);
        //res.status(200).json({ name: 'GET John Doe' })
    }

}