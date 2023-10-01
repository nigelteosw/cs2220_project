// export a hello wprld function
// export async function GET(req, res) {
//     const message = {response: "Hello World!"};
    
//     return new Response({ message: 'Hello World!', status: 200});
// }

import { NextResponse } from 'next/server'
 
export async function GET(request) {
    const message = {response: "Hello World!"};
    return NextResponse.json(message, { status: 200 })
}