import { db, ProductServiceType, ProductServiceCategory, ProductService, SaleHistory } from 'astro:db';

export default async function seed() {
	await db.insert( ProductServiceType ).values([
		{ id_pstype: 1, pstype_name: "Product Flowers" },
		{ id_pstype: 2, pstype_name: "Product Fruits" },
		{ id_pstype: 3, pstype_name: "Service" },
	]);

	await db.insert( ProductServiceCategory ).values([
		{ id_pscategory: 1, pscategory_name: 'NA' },
		{ id_pscategory: 2, pscategory_name: 'San Valentín' },
		{ id_pscategory: 3, pscategory_name: 'Parejas' },
		{ id_pscategory: 4, pscategory_name: 'Día de la Madre y del Padre' },
		{ id_pscategory: 5, pscategory_name: 'Cumpleaños' },
		{ id_pscategory: 6, pscategory_name: 'Gourmet' },
		{ id_pscategory: 7, pscategory_name: 'Choco Fresas' },
		{ id_pscategory: 8, pscategory_name: 'Elegantes' },
		{ id_pscategory: 9, pscategory_name: 'Surtidos' },
		{ id_pscategory: 10, pscategory_name: 'Infantiles' },
	]);
	
	await db.insert( ProductService ).values([
		{ 
			id_ps: 1, 
			psname: 'Corazón de Girasoles', 
			id_pstype: 1, 
			id_pscategory: 2, 
			ps_description: 'Refinadas Rosas Rojas adornadas con Girasoles en el borde, y con chocolates Ferrero Rocher en el centro', 
			ps_price: 17.80, 
			ps_img_path: '../assets/images/CorazonGirasoles.webp' ,
			alt: 'Corazón de Girasoles'
		},
		{ 
			id_ps: 2, 
			psname: 'Letra de Rosas', 
			id_pstype: 1, 
			id_pscategory: 2, 
			ps_description: 'Elegante fondo de Rosas Rojas con letras en el centro formadas con Rosas Blancas', 
			ps_price: 10.00, 
			ps_img_path: '../assets/images/LetraRosas.jpg',
			alt: 'Letra de Rosas'
		},
		{ 
			id_ps: 3, 
			psname: 'Esfera de Rosas Pastel', 
			id_pstype: 1, 
			id_pscategory: 2, 
			ps_description: 'Sofisticado y fino ramo esférico de Rosas grandes y pequeñas, con colores pastel violeta y Rosado', 
			ps_price: 15.00, 
			ps_img_path: '../assets/images/Bouquet-RosasRosadas_1280.jpg',
			alt: 'Bouquet de Rosas Pastel'
		},
		{ 
			id_ps: 4, 
			psname: 'Caja Bouquet de Rosas Diversas', 
			id_pstype: 1, 
			id_pscategory: 2, 
			ps_description: 'Colorido arreglo de Rosas variadas de diferente tipo en una hermosa caja cilíndrica', 
			ps_price: 24.00, 
			ps_img_path: '../assets/images/valentine-BouquetRegaloRosasClaras_1280.jpg',
			alt: 'Caja Bouquet de Rosas Claras'
		},
		{ 
			id_ps: 5, 
			psname: 'Bouquet de Lilas', 
			id_pstype: 1, 
			id_pscategory: 3, 
			ps_description: 'Ramo de Lilas elegantemente armado', 
			ps_price: 12.00, 
			ps_img_path: '../assets/images/Bouquet-Lilas_1280.jpg',
			alt: 'Bouquet de Lilas'
		},
		{ 
			id_ps: 6, 
			psname: 'Bouquet Verde Sublime', 
			id_pstype: 1, 
			id_pscategory: 3, 
			ps_description: 'Sofisticado arreglo circular con flores verdes y lavanda, de aspecto mágico y encantador', 
			ps_price: 35.00, 
			ps_img_path: '../assets/images/Bouquet-VerdeSublime_1280.jpg',
			alt: 'Bouquet Verde Sublime'
		},
		{ 
			id_ps: 7, 
			psname: 'Ramo de Violetas Románticas', 
			id_pstype: 1, 
			id_pscategory: 3, 
			ps_description: 'Ramo de Flores violetas abiertas, irradia romanticismo', 
			ps_price: 7.00, 
			ps_img_path: '../assets/images/Ramo-Violetas_1280.jpg',
			alt: 'Ramo de Violetas Románticas'
		},
		{ 
			id_ps: 8, 
			psname: 'Florero de Flores Claras', 
			id_pstype: 1, 
			id_pscategory: 3, 
			ps_description: 'Elegante vasija con rosas y flores de colores claros', 
			ps_price: 18.00, 
			ps_img_path: '../assets/images/vase-FloresClaras_1280.jpg',
			alt: 'Florero de Flores Claras'
		},
		{ 
			id_ps: 9, 
			psname: 'Bouquet Vínculo', 
			id_pstype: 1, 
			id_pscategory: 3, 
			ps_description: 'Fino ramo armado con rosas blancas puras y rosadas, con un aspecto excelso', 
			ps_price: 19.99, 
			ps_img_path: '../assets/images/wedding-BouquetVinculo_1280.jpg',
			alt: 'Bouquet Vínculo'
		},
		{ 
			id_ps: 10, 
			psname: 'Canasta Clásica', 
			id_pstype: 1, 
			id_pscategory: 4, 
			ps_description: 'Una canasta con flores variadas, muy usadas en épocas de ayer y hoy', 
			ps_price: 11.20, 
			ps_img_path: '../assets/images/Clasico.webp',
			alt: 'Canasta Clásica'
		},
		{ 
			id_ps: 11, 
			psname: 'Paternal', 
			id_pstype: 1, 
			id_pscategory: 4, 
			ps_description: 'Vaso sobrio con Flores y Ramas de colores contrastantes, producen calma y vitalidad, perfecto para padres', 
			ps_price: 10.00, 
			ps_img_path: '../assets/images/Paternal.webp',
			alt: 'Arreglo Paternal'
		},
		{ 
			id_ps: 12, 
			psname: 'Señorial', 
			id_pstype: 1, 
			id_pscategory: 4, 
			ps_description: 'Arreglo grande de Rosas Blancas, magistral con un toque clásico', 
			ps_price: 11.99, 
			ps_img_path: '../assets/images/Seniorial.jpg',
			alt: 'Arreglo Señorial'
		},
		{ 
			id_ps: 13, 
			psname: 'Tulipanes Paternales', 
			id_pstype: 1, 
			id_pscategory: 4, 
			ps_description: 'Tulipanes para aquellos de gustos específicos, con un color vibrante', 
			ps_price: 9.99, 
			ps_img_path: '../assets/images/Tulipanes_1280.jpg',
			alt: 'Tulipanes Paternales'
		},
		{ 
			id_ps: 14, 
			psname: 'Florero Imperial', 
			id_pstype: 1, 
			id_pscategory: 4, 
			ps_description: 'Con flores variadas, un balance entre variedad y elegancia suprema, viene con una vasija rectangular de piedra labrada, una pieza artesanal y artística de estilo renacentista que le da el toque supremo', 
			ps_price: 15.99, 
			ps_img_path: '../assets/images/vase-Imperial_1280.jpg',
			alt: 'Florero Imperial'
		},
		{ 
			id_ps: 15, 
			psname: 'Caja Presente de Rosas', 
			id_pstype: 1, 
			id_pscategory: 5, 
			ps_description: 'Rosas Blancas y Amarillas en una caja de obsequio con un lacito, elegante y detallista', 
			ps_price: 24.99, 
			ps_img_path: '../assets/images/Bouquet-RosasBlancasAmarillas_1280.jpg',
			alt: 'Rosas Blancas y Amarillas'
		},
		{ 
			id_ps: 16, 
			psname: 'Bouquet Austral', 
			id_pstype: 1, 
			id_pscategory: 5, 
			ps_description: 'Fino entramado de Rosas Blancas y Lirios, idóneo para familiares y amigos, para aquellos a quien desee mostrarles confianza', 
			ps_price: 12.99, 
			ps_img_path: '../assets/images/Bouquet-RosasBlancasLirios_1280.jpg',
			alt: 'Bouquet de Rosas Blancas y Lirios'
		},
		{ 
			id_ps: 17, 
			psname: 'Bouquet Colorido Diverso', 
			id_pstype: 1, 
			id_pscategory: 5, 
			ps_description: 'Supremamente elegante entramado de Rosas y Flores coloridas, de tonos pasteles, estupendo obsequio desbordante de elegancia', 
			ps_price: 21.99, 
			ps_img_path: '../assets/images/Bouquet-ColoridoDiverso_1280.jpg',
			alt: 'Bouquet Colorido Diverso'
		},
		{ 
			id_ps: 18, 
			psname: 'Canasta Sol Rosa', 
			id_pstype: 1, 
			id_pscategory: 5, 
			ps_description: 'Canasta de Girasoles con Rosas, acojedor y de estilo hogareño', 
			ps_price: 18.99, 
			ps_img_path: '../assets/images/Canasta-GirasolesRosasClaras_1280.jpg',
			alt: 'Canasta de Girasoles y Rosas Claras'
		},
		{ 
			id_ps: 19, 
			psname: 'Berry Sandia', 
			id_pstype: 2, 
			id_pscategory: 6, 
			ps_description: 'Frutas tropicales frescas: sandia, arándanos, moras y frambuesas', 
			ps_price: 9.99, 
			ps_img_path: '../assets/images/Frutal_Gourmet_BerrySandia_1280.jpg',
			alt: 'Berry Sandia'
		},
		{ 
			id_ps: 20, 
			psname: 'Piqueos', 
			id_pstype: 2, 
			id_pscategory: 6, 
			ps_description: 'Un toque gourmet con frutas seleccionadas sobre una base de melón, ideal para regalar a los más exigentes', 
			ps_price: , 
			ps_img_path: '../assets/images/Frutal_Gourmet_Piqueos-2048x2048.jpg',
			alt: 'Piqueos'
		},
		{ 
			id_ps: 21, 
			psname: 'Copa Saludable', 
			id_pstype: 2, 
			id_pscategory: 6, 
			ps_description: 'Una copa con frutas adecuadas, tanto diuréticas como para el sistema digestivo', 
			ps_price: 7.00, 
			ps_img_path: '../assets/images/Frutal_Gourmet_CopaSaludable-2048x2048.jpg',
			alt: 'Copa Saludable'
		},
		{ 
			id_ps: 22, 
			psname: 'Sunny Blue', 
			id_pstype: 2, 
			id_pscategory: 6, 
			ps_description: 'Un toque gourmet excelso y premium, con frutas tropicales, decoradas de manera exquisita', 
			ps_price: 11.99, 
			ps_img_path: '../assets/images/Frutales_Gourmet_SunnyBlue-2048x2048.jpg',
			alt: 'Sunny Blue'
		},
		{ 
			id_ps: 23, 
			psname: 'Degustación', 
			id_pstype: 2, 
			id_pscategory: 6, 
			ps_description: 'Frutas cortadas en rodajas, con forma de flor, con pistachos, frambuesas y moras', 
			ps_price: 15.99, 
			ps_img_path: '../assets/images/Frutales_Gourmet_Degustacion-2048x2048.jpg',
			alt: 'Degustación'
		},
		{ 
			id_ps: 24, 
			psname: 'Rebanadas Frutales', 
			id_pstype: 2, 
			id_pscategory: 6, 
			ps_description: 'Una bandeja variada de frutas cortadas en rodajas y rebanadas, ideal para comer en la mañana y compartir', 
			ps_price: 2.99, 
			ps_img_path: '../assets/images/Frutales_Gourmet_RebanadasFrutales-2048x2048.webp',
			alt: 'Rebanadas Frutales'
		},
		{ 
			id_ps: 25, 
			psname: 'Bañado Parcial', 
			id_pstype: 2, 
			id_pscategory: 7, 
			ps_description: 'Vaso de Fresas naturales con Fresas bañadas en chocolate derretido, adornadas con chocolate blanco y aderezadas con maní', 
			ps_price: 13.99, 
			ps_img_path: '../assets/images/Frutales_ChocoFresas_BaniadoParcial-2048x2048.jpg',
			alt: 'Bañado Parcial'
		},
		{ 
			id_ps: 26, 
			psname: 'Multisabor', 
			id_pstype: 2, 
			id_pscategory: 7, 
			ps_description: 'Un variado vaso con fresas naturales, y bañadas en chocolate pero aderezadas con diferentes deliciosos aditivos entre maní, coco, chocolate blanco y el que tu elijas', 
			ps_price: 15.99, 
			ps_img_path: '../assets/images/Frutales_ChocoFresas_Multisabor-2048x2048.jpg',
			alt: 'Multisabor'
		},
		{ 
			id_ps: 27, 
			psname: 'Empastadas', 
			id_pstype: 2, 
			id_pscategory: 7, 
			ps_description: 'Para los amantes del chocolate puro, son Fresas bañadas en puro chocolate negro, enfriadas para un toque empastado', 
			ps_price: 14.99, 
			ps_img_path: '../assets/images/Frutales_ChocoFresas_Empastadas-2048x2048.jpg',
			alt: 'Empastadas'
		},
		{ 
			id_ps: 28, 
			psname: 'Glaciares Magnum', 
			id_pstype: 2, 
			id_pscategory: 7, 
			ps_description: 'Una opción Gourmet Premium con Fresas bañadas en chololate suizo Magnum de la más alta calidad, aderezadas con diferentes aditamentos como coco rallado, chispas de chocolate y lineas de dulce de leche, curadas al frío, un manjar de dioses', 
			ps_price: 20.99, 
			ps_img_path: '../assets/images/Frutales_ChcoFresas_GlaciaresMagnum-2048x2048.jpg',
			alt: 'Glaciares Magnum'
		},
		{ 
			id_ps: 29, 
			psname: 'Fresas de Pascua', 
			id_pstype: 2, 
			id_pscategory: 7, 
			ps_description: 'Son Fresas Glaciares Magnum con motivos de huevos de pascua, así como aderezos adicionales que le dan un valor agregado exquisito', 
			ps_price: 17.99, 
			ps_img_path: '../assets/images/Frutales_ChocoFresas_Fresas de Pascua-2048x2048.jpg',
			alt: 'Fresas de Pascua'
		},
		{ 
			id_ps: 30, 
			psname: 'Plenitud', 
			id_pstype: 2, 
			id_pscategory: 8, 
			ps_description: 'Fresas, uvas y piñas, con lindas formas y en un arreglo con una alta elegancia', 
			ps_price: 10.99, 
			ps_img_path: '../assets/images/Frutal_Elegante_Plenitud.jpg',
			alt: 'Plenitud'
		},
		{ 
			id_ps: 31, 
			psname: 'Frescura Palmerina', 
			id_pstype: 2, 
			id_pscategory: 8, 
			ps_description: 'Fresas, melón, uvas y piña, en una arreglo con motivo de palmera, esteticamente elaborado', 
			ps_price: 8.99, 
			ps_img_path: '../assets/images/Frutal_Elegante_FrescuraPalmerina.webp',
			alt: 'Frescura Palmerina'
		},
		{ 
			id_ps: 32, 
			psname: 'Piña Hawaiana', 
			id_pstype: 2, 
			id_pscategory: 8, 
			ps_description: 'Alta dotación de Piña Hawaiana con fresas, delicioso para cualquier amante de la piña', 
			ps_price: 12.99, 
			ps_img_path: '../assets/images/Frutal_Elegante_PiniaHawaiana.jpg',
			alt: 'Piña Hawaiana'
		},
		{ 
			id_ps: 33, 
			psname: 'Personal', 
			id_pstype: 2, 
			id_pscategory: 9, 
			ps_description: 'Dotación personal de frutas variadas', 
			ps_price: 3.00, 
			ps_img_path: '../assets/images/Frutal_Surtido_Personal.jpg',
			alt: 'Personal'
		},
		{ 
			id_ps: 34, 
			psname: 'Familiar', 
			id_pstype: 2, 
			id_pscategory: 9, 
			ps_description: 'Canasta familiar de frutas variadas, espectacular para obsequiar en reuniones familiares y amistosas', 
			ps_price: 18.99, 
			ps_img_path: '../assets/images/Frutal_Surtido_Familiar_1280.jpg',
			alt: 'Familiar'
		},
		{ 
			id_ps: 35, 
			psname: 'Canasta Poderosa', 
			id_pstype: 2, 
			id_pscategory: 9, 
			ps_description: 'Una Gran Canasta con muchas frutas variadas, de pequeño y mediano tamaño', 
			ps_price: 19.99, 
			ps_img_path: '../assets/images/Frutal_Surtido_CanastaPoderosa_1280.png',
			alt: 'Canasta Poderosa'
		},
		{ 
			id_ps: 36, 
			psname: 'Fiestero', 
			id_pstype: 2, 
			id_pscategory: 10, 
			ps_description: 'Vaso con Fresas, Moras, Uvas y Galletas, adecuado para fiestas infantiles', 
			ps_price: 10.99, 
			ps_img_path: '../assets/images/Frutal_Infantil_Fiestero.webp',
			alt: 'Fiestero'
		},
		{ 
			id_ps: 37, 
			psname: 'Canastita Feliz', 
			id_pstype: 2, 
			id_pscategory: 10, 
			ps_description: 'Canasta pequeña de paja toquilla armada artesanalmente, con frutas variadas como Fresas, Mandarinas, Uvas, Naranjas y Piña adornada como carita feliz con jalea de chocolate', 
			ps_price: 14.99, 
			ps_img_path: '../assets/images/Frutal_Infantiles_CanastitaFeliz-2048x2048.webp',
			alt: 'Canastita Feliz'
		},
		{ 
			id_ps: 38, 
			psname: 'Canastón Grupal', 
			id_pstype: 2, 
			id_pscategory: 10, 
			ps_description: 'Vaso Grande con frutas variadas como Fresas, Uvas, Piña y Naranja, ideal para compartir en grupo', 
			ps_price: 20.99, 
			ps_img_path: '../assets/images/Frutal_Infantil_CanastonGrupal-2048x2048.webp',
			alt: 'Canastón Grupal'
		},
		{ 
			id_ps: 39, 
			psname: 'Jarritos Frutales', 
			id_pstype: 2, 
			id_pscategory: 10, 
			ps_description: 'Jarros personales con frutas variadas, con aderezos opcionales, adecuado para sorpresas para niños en fiestas infantiles', 
			ps_price: 5.99, 
			ps_img_path: '../assets/images/Frutal_Infantil_JarrosFrutales-2048x2048.jpg',
			alt: 'Jarritos Frutales'
		},
	]);

	await db.insert( SaleHistory ).values([
		{ id_sale: 1, id_ps: 10, quant: 2, sale_date: "03/02/2022" },
		{ id_sale: 2, id_ps: 4, quant: 8, sale_date: "05/02/2022" },
		{ id_sale: 3, id_ps: 2, quant: 3, sale_date: "10/02/2022" },
		{ id_sale: 4, id_ps: 7, quant: 5, sale_date: "15/03/2022" },
		{ id_sale: 5, id_ps: 6, quant: 1, sale_date: "25/03/2022" },
		{ id_sale: 6, id_ps: 1, quant: 3, sale_date: "07/05/2022" },
		{ id_sale: 7, id_ps: 3, quant: 1, sale_date: "09/07/2022" },
		{ id_sale: 8, id_ps: 8, quant: 2, sale_date: "19/10/2023" },
		{ id_sale: 9, id_ps: 4, quant: 4, sale_date: "21/05/2023" },
		{ id_sale: 10, id_ps: 9, quant: 2, sale_date: "03/08/2023" },
		{ id_sale: 11, id_ps: 10, quant: 1, sale_date: "10/11/2023" },
		{ id_sale: 12, id_ps: 2, quant: 5, sale_date: "03/01/2024" },
		{ id_sale: 13, id_ps: 7, quant: 7, sale_date: "11/02/2024" },
		{ id_sale: 14, id_ps: 9, quant: 3, sale_date: "22/03/2024" },
		{ id_sale: 15, id_ps: 1, quant: 2, sale_date: "05/04/2024" },
	]);
}
