// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  { NextApiRequest, NextApiResponse } from 'next'
import homepageController from "../../controllers/homepageController";

import chatbotService from "../../services/chatbotService";
export default function handler(
    req,
    res
) {

     chatbotService.sendMessage('6617646054939282', {"text": "The super bot came back !!!"});
    res.status(200).send('EVENT_RECEIVED');
    //res.status(200).json({ name: 'John Doe' })
}