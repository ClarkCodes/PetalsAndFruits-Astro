import { defineDb, defineTable, column, NOW } from 'astro:db';

const ProductServiceType = defineTable( {
  columns: {
    id_pstype: column.number( { primaryKey: true } ),
    pstype_name: column.text( { unique: true } ),
    is_active: column.boolean( { default: true } ),
  },
} )

const ProductServiceCategory = defineTable( {
  columns: {
    id_pscategory: column.number( { primaryKey: true } ),
    pscategory_name: column.text( { unique: true } ),
    is_active: column.boolean( { default: true } ),
  },
} )

const ProductService = defineTable( {
  columns: {
    id_ps: column.number( { primaryKey: true } ),
    ps_name: column.text( { unique: true } ),
    id_pstype: column.number(),
    id_pscategory: column.number(),
    ps_description: column.text(),
    ps_price: column.number(),
    ps_img_path: column.text(),
    is_active: column.boolean( { default: true } ),
    alt: column.text(),
  },
  foreignKeys: [
    {
      columns: ["id_pstype", "id_pscategory"],
      references: () => [ProductServiceType.columns.id_pstype, ProductServiceCategory.columns.id_pscategory],
    },
  ],
} )

const SaleHistory = defineTable( {
  columns: {
    id_sale: column.number( { primaryKey: true } ),
    id_ps: column.number( { references: () => ProductService.columns.id_ps } ),
    quant: column.number(),
    sale_date: column.date( { default: NOW } ),
  },
} )

export default defineDb({
  tables: { 
    ProductServiceType, 
    ProductServiceCategory, 
    ProductService, 
    SaleHistory, 
  },
});
