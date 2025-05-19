import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import {fetch} from 'undici';

const plaid_url = 'https://sandbox.plaid.com/link/token/create';

dotenv.config();

export const createLinkToken = async(req: Request,res: Response, next:NextFunction)=>{
    const request_meta_info = {
        'client_id':process.env.PLAID_CLIENT_ID,
        'secret':process.env.PLAID_SECRET,
        'client_name':'Kaizen Money',
        'products':['auth','transactions'],
        'country_codes':['US'],
        'language':'en',
        'user':{
            'client_user_id':'john-doe'
        }
    };

    const response = await fetch(plaid_url,{
        method:'POST',
        body:JSON.stringify(request_meta_info),
        headers:{
            'Content-Type':'application/json'
        }
    })

    const data = await response.json();

    console.log(data);

}

