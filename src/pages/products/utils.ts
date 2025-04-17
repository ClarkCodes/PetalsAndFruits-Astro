
import { db, eq, SaleHistory, ProductService } from 'astro:db';

export async function getProduct( id: number ){ 
	return await db.select().from( ProductService ).where( eq( ProductService.id_ps, id ) ); 
}

export async function getAllProducts(){
    return await db.select().from( ProductService ).where( eq( ProductService.is_active, true ) ); 
}