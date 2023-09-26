// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  { NextApiRequest, NextApiResponse } from 'next'
import homepageController from "../../controllers/homepageController";


export default async function handler(
    req,
    res
) {
    console.log("Call to here");
    if (req.method === 'POST') {
        homepageController.postWebhook(req, res);
    } else {
        homepageController.getWebhook(req, res);
        //res.status(200).json({ name: 'GET John Doe' })
    }

}