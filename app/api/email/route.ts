import { NextResponse } from "next/server";

export async function POST( req: Request)
{
    const data = await req.json();

    if(!data)
        return NextResponse.json({ error: 'No data could be found' }, { status: 500 });

    const {firstName, lastName, email, phone, message} = data;
    const response = await fetch('https://xcta-strapi-do-7jsnm.ondigitalocean.app/api/subscriptions', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
        },
        method: 'POST',
        body: JSON.stringify({data:{
            first_name: firstName, 
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message
    
        }})
    });

    if(response.status != 201)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        
    return NextResponse.json('success', {status: 200});
}