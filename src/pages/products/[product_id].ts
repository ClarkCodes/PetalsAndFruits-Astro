import type { APIRoute } from "astro";

export const POST:APIRoute = ( { params, request } ) => {

    
    return new Response( "Helo World!", { status: 200 } )
}