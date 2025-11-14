import { Recipe } from '../types';

export const mockRecipes: Recipe[] = [
  {
    id: 1001,
    name: 'Paella Valenciana Tradicional',
    category: 'Platos Principales',
    ingredients: [
      '300g de arroz bomba',
      '400g de pollo troceado',
      '300g de conejo troceado',
      '200g de judías verdes planas (bajoqueta)',
      '150g de garrofón',
      '1 tomate maduro rallado',
      'Aceite de oliva virgen extra',
      'Pimentón dulce',
      'Hebras de azafraán',
      'Romero fresco',
      'Sal',
      'Agua (aprox. 1.5 litros)'
    ],
    instructions: [
      'En una paella, calentar aceite y sofreír el pollo y el conejo hasta que estén dorados.',
      'Añadir las judías verdes y el garrofón y sofreír unos minutos.',
      'Incorporar el tomate rallado y sofreír hasta que se evapore el agua.',
      'Añadir el pimentón, remover y verter el agua rápidamente. Añadir azafrán, romero y sal.',
      'Dejar cocer el caldo unos 20-30 minutos a fuego medio.',
      'Subir el fuego, y cuando hierva, añadir el arroz repartiéndolo bien.',
      'Cocer 10 min a fuego fuerte y 8-10 min a fuego lento hasta que absorba el caldo.',
      'Dejar reposar 5 minutos tapada antes de servir.'
    ],
    imageUrl: 'https://olorahierbabuena.com/wp-content/uploads/2019/10/paella-caracoles-m.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1002,
    name: 'Gazpacho Andaluz',
    category: 'Sopas',
    ingredients: [
      '1 kg de tomates pera maduros',
      '1 pimiento verde italiano',
      '1 pepino pequeño',
      '1/4 de cebolla',
      '1 diente de ajo',
      '50g de pan del día anterior',
      '100ml de aceite de oliva virgen extra',
      '30ml de vinagre de Jerez',
      'Sal',
      'Agua fría (opcional)'
    ],
    instructions: [
      'Lavar y trocear todos los vegetales.',
      'Poner todos los ingredientes en el vaso de la batidora: tomates, pimiento, pepino, cebolla, ajo, el pan remojado, aceite, vinagre y sal.',
      'Triturar a máxima potencia hasta obtener una crema fina.',
      'Pasar por un colador fino para eliminar pieles y semillas.',
      'Probar y rectificar de sal o vinagre. Si está muy espeso, añadir agua fría.',
      'Enfriar en la nevera al menos 2 horas antes de servir.'
    ],
    imageUrl: 'https://img2.rtve.es/v/5912010/?w=1600',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1003,
    name: 'Tortilla de Patatas',
    category: 'Entrantes',
    ingredients: [
      '600g de patatas',
      '1 cebolla grande',
      '6 huevos L',
      'Aceite de oliva virgen extra',
      'Sal'
    ],
    instructions: [
      'Pelar y cortar las patatas en láminas finas. Cortar la cebolla en juliana.',
      'En una sartén grande con abundante aceite, pochar las patatas y la cebolla a fuego lento hasta que estén tiernas.',
      'Batir los huevos en un bol grande con sal.',
      'Escurrir bien las patatas y cebolla y mezclarlas con los huevos. Dejar reposar 5 minutos.',
      'Calentar un poco de aceite en una sartén antiadherente. Verter la mezcla.',
      'Cuajar a fuego medio-bajo por un lado, dar la vuelta con un plato y cuajar por el otro.',
      'Servir al punto deseado, más o menos jugosa.'
    ],
    imageUrl: 'https://www.pequerecetas.com/wp-content/uploads/2022/10/tortilla-patatas-receta.webp',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1004,
    name: 'Crema Catalana',
    category: 'Postres',
    ingredients: [
      '1 litro de leche entera',
      '8 yemas de huevo',
      '200g de azúcar',
      '40g de maicena',
      'La piel de 1 limón',
      '1 rama de canela',
      'Azúcar para caramelizar'
    ],
    instructions: [
      'Infusionar la leche (reservando un vaso) con la piel de limón y la canela a fuego lento.',
      'En un bol, mezclar las yemas, el azúcar y la maicena disuelta en la leche fría reservada.',
      'Colar la leche infusionada y volver a ponerla al fuego.',
      'Verter la mezcla de yemas y remover constantemente a fuego bajo hasta que espese, sin que hierva.',
      'Repartir en cazuelitas de barro y dejar enfriar en la nevera.',
      'Antes de servir, espolvorear azúcar y quemar con un soplete.'
    ],
    imageUrl: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/A13E0EAA-DFA7-4264-8B3B-79CCC77F9282/Derivates/B59B434D-7C1D-4EEB-9CE2-B21BD45533D9.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1005,
    name: 'Croquetas de Jamón',
    category: 'Entrantes',
    ingredients: [
      '100g de jamón serrano picado',
      '1 litro de leche entera',
      '100g de mantequilla',
      '100g de harina',
      '1 cebolla pequeña picada',
      'Nuez moscada, pimienta y sal',
      'Huevo y pan rallado para rebozar',
      'Aceite para freír'
    ],
    instructions: [
      'Pochar la cebolla en la mantequilla. Añadir el jamón y sofreír.',
      'Incorporar la harina y tostarla un par de minutos (roux).',
      'Verter la leche caliente poco a poco, sin dejar de remover, hasta formar una bechamel espesa.',
      'Sazonar con sal, pimienta y nuez moscada. Cocinar 15-20 minutos a fuego bajo.',
      'Extender la masa en una fuente, cubrir con film y enfriar en la nevera (idealmente, toda la noche).',
      'Formar las croquetas, pasarlas por huevo batido y pan rallado.',
      'Freír en abundante aceite caliente hasta que estén doradas.'
    ],
    imageUrl: 'https://imag.bonviveur.com/croquetas-de-jamon-y-queso.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1006,
    name: 'Lentejas con Chorizo',
    category: 'Platos Principales',
    ingredients: [
      '400g de lentejas pardinas',
      '1 chorizo para guisar',
      '1 morcilla',
      '1 punta de jamón',
      '1 patata grande',
      '1 zanahoria',
      '1 cebolla',
      '1 pimiento verde',
      '2 dientes de ajo',
      '1 hoja de laurel',
      'Pimentón dulce',
      'Aceite de oliva y sal'
    ],
    instructions: [
      'Poner las lentejas (previamente remojadas si es necesario) en una olla con agua fría.',
      'Añadir el chorizo, la morcilla, el jamón, la zanahoria entera, media cebolla y el laurel.',
      'Llevar a ebullición y cocer a fuego lento.',
      'Mientras, hacer un sofrito con la otra media cebolla, el pimiento y los ajos picados.',
      'Cuando el sofrito esté listo, añadir una cucharadita de pimentón fuera del fuego.',
      'Incorporar el sofrito a la olla. Añadir la patata chascada.',
      'Cocer hasta que las lentejas y las patatas estén tiernas (aprox. 45-60 min).',
      'Retirar las verduras enteras y el embutido, trocear y volver a añadir. Rectificar de sal.'
    ],
    imageUrl: 'https://www.javirecetas.com/wp-content/uploads/2010/04/lentejas-con-chorizo.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1007,
    name: 'Bacalao a la Vizcaína',
    category: 'Platos Principales',
    ingredients: [
        '4 lomos de bacalao desalado',
        '1 kg de cebollas rojas',
        '8 pimientos choriceros',
        '2 dientes de ajo',
        '1 rebanada de pan frito',
        'Aceite de oliva virgen extra',
        'Sal'
    ],
    instructions: [
        'Hidratar los pimientos choriceros en agua caliente y sacarles la pulpa.',
        'Pochar las cebollas cortadas en juliana fina en abundante aceite a fuego muy lento hasta que estén caramelizadas (puede tardar más de 1 hora).',
        'Añadir la pulpa de los pimientos choriceros a la cebolla y cocinar 15 minutos.',
        'Triturar la salsa. Majar los ajos con el pan frito y un poco de caldo y añadirlo a la salsa para espesar.',
        'Pasar los lomos de bacalao por harina y freír ligeramente (marcar).',
        'Introducir el bacalao en la salsa con la piel hacia arriba y cocinar a fuego lento unos 10 minutos, meneando la cazuela.',
        'Dejar reposar unos minutos antes de servir.'
    ],
    imageUrl: 'https://cdn.recetasderechupete.com/wp-content/uploads/2014/05/bacalao_vizcaina.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1008,
    name: 'Arroz con Leche',
    category: 'Postres',
    ingredients: [
        '1 litro de leche entera',
        '100g de arroz redondo',
        '120g de azúcar',
        'La piel de 1 limón',
        '1 rama de canela',
        'Canela en polvo para decorar'
    ],
    instructions: [
        'Lavar el arroz bajo el grifo.',
        'Poner a calentar la leche con la piel de limón y la rama de canela.',
        'Cuando empiece a hervir, añadir el arroz y bajar el fuego al mínimo.',
        'Cocer durante 45-50 minutos, removiendo frecuentemente para que no se pegue.',
        'Cuando el arroz esté cremoso y cocido, añadir el azúcar y remover bien.',
        'Cocer 10 minutos más. Retirar la piel de limón y la canela.',
        'Verter en cuencos, dejar enfriar y espolvorear con canela en polvo antes de servir.'
    ],
    imageUrl: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2024/11/arroz-con-leche-1024x683.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1009,
    name: 'Pulpo a la Gallega (Polbo á Feira)',
    category: 'Entrantes',
    ingredients: [
      '1 pulpo de 1.5 - 2 kg',
      '4 patatas gallegas grandes (cachelos)',
      'Pimentón dulce',
      'Pimentón picante',
      'Aceite de oliva virgen extra',
      'Sal gorda'
    ],
    instructions: [
      'Congelar el pulpo al menos 48h para ablandarlo. Descongelar en la nevera.',
      'Poner una olla grande con agua a hervir (sin sal).',
      'Cuando hierva, "asustar" el pulpo: meterlo y sacarlo del agua 3 veces.',
      'Cocer el pulpo a fuego medio durante 30-40 minutos (depende del tamaño).',
      'Pinchar para comprobar que está tierno. Dejar reposar en el agua caliente 10 minutos.',
      'En la misma agua de cocción, cocer las patatas peladas y cortadas en rodajas gruesas.',
      'Cortar el pulpo en rodajas con unas tijeras. Servir sobre una base de patatas.',
      'Aliñar con abundante aceite de oliva, los dos tipos de pimentón y sal gorda.'
    ],
    imageUrl: 'https://treurer.com/wp-content/uploads/Pulpo-Gallega-Dieta-Mediterranea.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1010,
    name: 'Sopa de Ajo (Castellana)',
    category: 'Sopas',
    ingredients: [
      '1 cabeza de ajos',
      '100g de jamón serrano en tacos',
      '8 rebanadas de pan duro',
      '4 huevos',
      '1.5 litros de caldo de pollo o jamón',
      '1 cucharada de pimentón dulce de la Vera',
      'Aceite de oliva virgen extra',
      'Sal'
    ],
    instructions: [
      'Laminar los ajos y dorarlos en una cazuela con aceite. Retirar y reservar.',
      'En el mismo aceite, freír el pan por ambos lados. Retirar y reservar.',
      'Añadir los tacos de jamón y saltear. Incorporar el pimentón y remover rápido.',
      'Verter el caldo caliente, añadir el pan y los ajos.',
      'Cocer a fuego lento durante 15 minutos, machacando un poco el pan.',
      'Justo antes de servir, cascar los huevos en la sopa y dejar que se cuajen con el calor residual.',
      'Servir muy caliente en cazuelitas de barro.'
    ],
    imageUrl: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2024/03/sopa-de-ajo-receta-1024x683.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1011,
    name: 'Gambas al Ajillo',
    category: 'Entrantes',
    ingredients: [
      '300g de gambas o langostinos pelados',
      '4 dientes de ajo',
      '1 guindilla cayena',
      '100ml de aceite de oliva virgen extra',
      'Perejil fresco picado',
      'Sal'
    ],
    instructions: [
      'Laminar los ajos y cortar la guindilla en aros.',
      'Calentar el aceite en una cazuela de barro a fuego medio.',
      'Añadir los ajos y la guindilla y sofreír hasta que los ajos empiecen a bailar y tomar color.',
      'Subir el fuego, añadir las gambas y una pizca de sal.',
      'Cocinar 1-2 minutos, removiendo, hasta que las gambas cambien de color.',
      'Retirar del fuego, espolvorear perejil picado y servir inmediatamente en la misma cazuela.'
    ],
    imageUrl: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2024/11/gambas-al-ajillo-1024x683.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1012,
    name: 'Fabada Asturiana',
    category: 'Platos Principales',
    ingredients: [
      '500g de fabes de la Granja',
      '2 chorizos asturianos',
      '2 morcillas asturianas',
      '200g de panceta curada',
      '1 hueso de jamón',
      'Hebras de azafrán',
      'Sal'
    ],
    instructions: [
      'Poner las fabes a remojo en agua fría la noche anterior.',
      'En una olla grande, poner las fabes escurridas y cubrirlas con agua fría.',
      'Añadir el compango (chorizo, morcilla, panceta) y el hueso de jamón.',
      'Llevar a ebullición y desespumar. Bajar el fuego al mínimo.',
      '"Asustar" las fabes 2-3 veces durante la cocción añadiendo un chorrito de agua fría para romper el hervor.',
      'Añadir el azafrán diluido en un poco de caldo.',
      'Cocer a fuego muy lento durante 2-3 horas, hasta que las fabes estén mantecosas.',
      'Retirar el compango, trocear y servir junto a las fabes. Dejar reposar antes de comer.'
    ],
    imageUrl: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2022/10/fabada-asturiana-receta-facil.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1013,
    name: 'Tarta de Santiago',
    category: 'Postres',
    ingredients: [
      '250g de almendra molida',
      '250g de azúcar',
      '5 huevos L',
      'Ralladura de 1 limón',
      '1 cucharadita de canela en polvo',
      'Azúcar glas para decorar',
      'Mantequilla para el molde'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un bol grande, batir los huevos con el azúcar hasta que blanqueen.',
      'Añadir la ralladura de limón y la canela. Mezclar bien.',
      'Incorporar la almendra molida poco a poco, mezclando con movimientos envolventes.',
      'Engrasar un molde desmontable de 22-24 cm con mantequilla.',
      'Verter la mezcla en el molde y hornear durante 30-35 minutos, hasta que esté dorada y firme.',
      'Dejar enfriar completamente antes de desmoldar.',
      'Colocar la plantilla de la Cruz de Santiago en el centro y espolvorear con abundante azúcar glas.'
    ],
    imageUrl: 'https://recipesblob.oetker.es/assets/c104e75b79384f3b94873bd15cdfe66c/1272x764/tarta-de-santiago.webp',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1014,
    name: 'Patatas Bravas',
    category: 'Entrantes',
    ingredients: [
      '4 patatas grandes',
      'Para la salsa brava:',
      '1 cebolla',
      '2 dientes de ajo',
      '400g de tomate triturado',
      '1 cucharada de pimentón picante',
      '1 guindilla',
      'Aceite de oliva, vinagre y sal'
    ],
    instructions: [
      'Para la salsa: pochar la cebolla y el ajo. Añadir la guindilla y el pimentón. Incorporar el tomate y freír 20 min.',
      'Triturar la salsa y añadir un chorrito de vinagre. Reservar.',
      'Pelar las patatas y cortarlas en trozos irregulares (cachelos).',
      'Freír las patatas en abundante aceite. Primero a fuego medio para que se confiten por dentro, y al final a fuego fuerte para que se doren por fuera.',
      'Escurrir bien las patatas sobre papel absorbente y sazonar.',
      'Servir las patatas calientes y napar con la salsa brava.',
      'Opcional: acompañar con alioli.'
    ],
    imageUrl: 'https://www.goya.com/wp-content/uploads/2023/10/spicy-potatoes.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1015,
    name: 'Ensaladilla Rusa',
    category: 'Entrantes',
    ingredients: [
      '500g de patatas',
      '2 zanahorias',
      '2 huevos',
      '150g de guisantes congelados',
      '1 lata de atún en aceite de oliva (150g)',
      '150g de mayonesa de calidad',
      'Aceitunas y pimiento morrón para decorar',
      'Sal'
    ],
    instructions: [
      'Cocer las patatas y las zanahorias (con piel) en agua con sal hasta que estén tiernas. Dejar enfriar.',
      'Cocer los huevos durante 10 minutos. Enfriar y pelar.',
      'Cocer los guisantes siguiendo las instrucciones del paquete.',
      'Pelar y cortar las patatas y zanahorias en daditos pequeños. Picar los huevos cocidos.',
      'En un bol grande, mezclar las patatas, zanahorias, guisantes, el huevo picado y el atún escurrido y desmigado.',
      'Incorporar la mayonesa y mezclar con cuidado hasta que todos los ingredientes estén bien integrados.',
      'Probar y rectificar de sal. Guardar en la nevera al menos 2 horas.',
      'Servir fría, decorada con tiras de pimiento morrón y aceitunas.'
    ],
    imageUrl: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2015/10/receta-ensaladilla-rusa.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1016,
    name: 'Pollo al Ajillo',
    category: 'Platos Principales',
    ingredients: [
      '1 pollo troceado',
      '1 cabeza de ajos entera',
      '1 vaso de vino blanco',
      'Harina',
      'Aceite de oliva virgen extra',
      'Perejil fresco',
      'Sal y pimienta'
    ],
    instructions: [
      'Salpimentar el pollo y pasarlo ligeramente por harina.',
      'En una cazuela ancha, dorar el pollo en aceite de oliva por todos lados. Retirar y reservar.',
      'En el mismo aceite, freír los dientes de ajo enteros y con piel, dándoles un golpe previo.',
      'Cuando los ajos estén dorados, volver a incorporar el pollo a la cazuela.',
      'Verter el vino blanco y subir el fuego para que se evapore el alcohol.',
      'Bajar el fuego, tapar y cocinar durante 20-25 minutos, hasta que el pollo esté tierno.',
      'Espolvorear con perejil fresco picado antes de servir.'
    ],
    imageUrl: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2023/08/pollo-al-ajillo.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1017,
    name: 'Merluza en Salsa Verde',
    category: 'Platos Principales',
    ingredients: [
      '4 rodajas de merluza gruesas',
      '200g de almejas',
      '2 dientes de ajo',
      '1/2 cebolleta',
      '1 cucharada de harina',
      '100ml de vino blanco',
      'Caldo de pescado',
      'Perejil fresco abundante',
      'Aceite de oliva virgen extra',
      'Sal'
    ],
    instructions: [
      'Poner las almejas en agua con sal para que suelten la arena.',
      'Picar muy finos los ajos y la cebolleta. Rehogar en una cazuela baja con aceite.',
      'Cuando pochen, añadir la harina y cocinarla un minuto.',
      'Verter el vino blanco y dejar que evapore el alcohol. Añadir un par de cazos de caldo.',
      'Incorporar el perejil muy picado y dejar que la salsa hierva unos minutos.',
      'Sazonar la merluza y colocarla en la cazuela con la piel hacia arriba.',
      'Añadir las almejas escurridas. Tapar y cocinar 5-8 minutos, moviendo la cazuela en vaivén.',
      'Servir inmediatamente cuando la merluza esté en su punto y las almejas se hayan abierto.'
    ],
    imageUrl: 'https://i.blogs.es/cce1b1/merluza_salsa_verde/450_1000.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1018,
    name: 'Flan de Huevo Casero',
    category: 'Postres',
    ingredients: [
      '5 huevos L',
      '500ml de leche entera',
      '150g de azúcar',
      'Para el caramelo:',
      '100g de azúcar',
      '3 cucharadas de agua'
    ],
    instructions: [
      'Hacer el caramelo: poner el azúcar y el agua en un cazo a fuego medio hasta obtener un color dorado. Verter en el fondo de una flanera.',
      'Precalentar el horno a 180°C.',
      'En un bol, batir los huevos con el azúcar (sin hacer espuma).',
      'Calentar ligeramente la leche y añadirla a la mezcla de huevos sin dejar de remover.',
      'Verter la mezcla en la flanera sobre el caramelo, pasando por un colador.',
      'Cocer al baño maría en el horno: colocar la flanera en una fuente más grande con agua caliente hasta la mitad.',
      'Hornear durante 45-50 minutos, o hasta que al pinchar con un palillo, éste salga limpio.',
      'Dejar enfriar completamente en la nevera (mínimo 4 horas) antes de desmoldar.'
    ],
    imageUrl: 'https://yhoyquecomemos.com/wp-content/uploads/2020/05/flan-de-huevo-receta.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1019,
    name: 'Churros con Chocolate',
    category: 'Postres',
    ingredients: [
      'Para los churros:',
      '250ml de agua',
      '150g de harina de trigo',
      '1 cucharadita de sal',
      'Aceite de girasol para freír',
      'Azúcar para rebozar',
      'Para el chocolate:',
      '200g de chocolate para postres (50% cacao)',
      '500ml de leche entera'
    ],
    instructions: [
      'Para el chocolate: calentar la leche y, antes de que hierva, añadir el chocolate troceado. Remover a fuego bajo hasta que se derrita y espese.',
      'Para los churros: calentar el agua con la sal en un cazo.',
      'Cuando hierva, retirar del fuego y echar la harina de golpe. Remover enérgicamente hasta formar una bola compacta.',
      'Dejar que la masa temple. Introducir en una churrera o manga pastelera con boquilla de estrella.',
      'Calentar abundante aceite. Formar los churros sobre el aceite caliente y freír hasta que estén dorados.',
      'Sacar a un plato con papel absorbente y rebozar en azúcar.',
      'Servir los churros calientes acompañados del chocolate.'
    ],
    imageUrl: 'https://i0.wp.com/bacidangelo-shop.com/wp-content/uploads/2020/03/IMG_3865-scaled.jpg?fit=1920%2C1296&ssl=1',
    userId: 0,
    authorName: 'Mi Recetario'
  },
  {
    id: 1020,
    name: 'Albóndigas en Salsa Española',
    category: 'Platos Principales',
    ingredients: [
      '500g de carne picada (mitad cerdo, mitad ternera)',
      '1 huevo',
      '2 dientes de ajo',
      'Perejil picado',
      'Miga de pan remojada en leche',
      'Harina para rebozar',
      'Para la salsa:',
      '1 cebolla grande',
      '2 zanahorias',
      '1 pimiento verde',
      '400g de tomate triturado',
      '100ml de vino blanco',
      'Caldo de carne',
      'Aceite de oliva, sal y pimienta'
    ],
    instructions: [
      'Mezclar la carne picada con el huevo, ajo y perejil picados, la miga de pan escurrida, sal y pimienta.',
      'Formar las albóndigas, pasarlas por harina y freírlas en aceite hasta que estén doradas. Reservar.',
      'Para la salsa: en el mismo aceite, pochar las verduras (cebolla, zanahoria, pimiento) bien picadas.',
      'Cuando estén tiernas, añadir el vino y dejar reducir. Incorporar el tomate y freír 15 minutos.',
      'Triturar la salsa, pasarla por un chino y volver a ponerla al fuego.',
      'Introducir las albóndigas en la salsa y añadir caldo hasta casi cubrirlas.',
      'Cocer a fuego lento durante 20-25 minutos. Servir caliente, opcionalmente con patatas fritas.'
    ],
    imageUrl: 'https://imag.bonviveur.com/albondigas-en-salsa-espanola-caseras.jpg',
    userId: 0,
    authorName: 'Mi Recetario'
  }
];
