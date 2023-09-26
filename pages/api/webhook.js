// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  { NextApiRequest, NextApiResponse } from 'next'
import homepageController from "../../controllers/homepageController";


export default async function handler(
    req,
    res
) {
    console.log("Call to here");
    if (req.method === 'POST') {
        let result = await homepageController.postWebhook(req, res);
        if (result) {
            console.log("Send thanh cong");
            res.status(200).send('EVENT_RECEIVED');
        }
        else {
            console.log("Send ERROR");
            res.status(400).send('');
        }

    } else {
        homepageController.getWebhook(req, res);
        //res.status(200).json({ name: 'GET John Doe' })
    }

}