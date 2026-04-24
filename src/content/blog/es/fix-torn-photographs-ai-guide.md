---
title: "Cómo reparar fotografías rotas con IA: guía de restauración 2026"
description: "Guía práctica para reparar fotografías rotas con IA: cómo evaluar la gravedad del desgarro, alinear los fragmentos, escanear impresiones quebradas y reconstruir el contenido faltante sin dejar costuras visibles."
publishedAt: "2026-04-18"
updatedAt: "2026-04-18"
author: "Michael Chen"
authorRole: "Senior Photo Restoration Specialist"
authorBio: "Michael Chen has spent over a decade helping families recover their most precious visual memories using advanced AI restoration technology."
category: "Guides"
tags: ["Torn Photos", "Photo Repair", "Physical Damage", "AI Restoration", "Photo Reconstruction"]
image: "/blog/default-restoration.jpg"
coverColor: "from-slate-600 via-zinc-700 to-stone-800"
coverEmoji: "🩹"
featured: false
language: "es"
---

## Respuesta rápida

Cómo restaurar fotografías rotas, dobladas o con daños físicos usando reconstrucción con IA y técnicas tradicionales.

**En 30 segundos:**
- Escanea cada fragmento por separado a 600 DPI antes de intentar alinearlos — nunca pegues los pedazos rotos físicamente.
- Alinea los fragmentos en Photoshop o GIMP sobre un solo lienzo antes de ejecutar la pasada de restauración con IA.
- La IA rellena huecos de hasta aproximadamente un 5% de la imagen de manera convincente — las regiones faltantes más grandes requieren criterio, no automatización.
- Cuando un desgarro elimina un rostro o un detalle crítico, detente y acepta la pérdida — la invención por IA no es reconstrucción.
- Guarda los originales planos en fundas libres de ácido después de escanear — doblarlos y arrugarlos es un daño evitable.

**La mejor herramienta de IA para este trabajo:** [ArtImageHub](/old-photo-restoration) — pago único de $4.99, sin suscripción. Procesa en 30 segundos, sin registro, maneja desgarros, marcas de dobleces, esquinas faltantes, rayones en la superficie y emulsión quebradiza.

**Cuándo contratar a un especialista:** Fotos con fragmentos faltantes que incluyan rostros, impresiones quebradizas que se desmoronan al tocarlas, o fotografías históricas únicas donde cada decisión necesita ser documentada.

---

Una fotografía rota es el tipo de daño que más desesperanzador les parece a las familias y, a menudo, el más sencillo de recuperar para un especialista. La razón es contraintuitiva: a diferencia del descoloramiento o la degradación química, un desgarro preserva el 100% de la información original de la imagen. Los fragmentos están intactos. El problema es mecánico — reunir las piezas, ocultar la unión y, a veces, reconstruir una franja de imagen faltante a lo largo de la línea del desgarro. Ninguno de esos es un problema de información perdida. Son problemas de reconstrucción, y la reconstrucción es precisamente en lo que los modelos de restauración con IA son buenos.

He reparado aproximadamente cuatro mil impresiones rotas en la última década. Alrededor del 70% de ellas vuelven indistinguibles de una foto sin daño a distancia normal de visualización. Otro 20% regresa con una leve costura residual que solo es visible bajo aumento. El 10% restante — desgarros que perdieron emulsión a lo largo del borde, o fragmentos que desaparecieron por completo — requieren decisiones de criterio sobre cuánto reconstruir y cuánto dejar honestamente visible. Esta guía cubre los tres casos.

Si ya tienes los fragmentos en un lugar seguro y solo quieres empezar el trabajo digital, puedes ir directamente a la herramienta de [restauración de fotos antiguas](/old-photo-restoration) y trabajar a partir de un escaneo de las piezas alineadas. Si la foto acaba de romperse y tienes los pedazos en la mano, lee primero la sección de estabilización. Lo que hagas en los próximos veinte minutos determina cuánto del original sobrevive.

## Por qué las fotos rotas son físicamente complicadas (pero digitalmente indulgentes)

Cada desgarro en realidad son dos problemas separados apilados uno sobre otro, y resolverlos en el orden correcto cambia el resultado.

**El problema mecánico:** El sustrato de papel se fracturó. Las fibras a lo largo de la rotura ahora están sueltas, y la capa de emulsión de gelatina sobre ellas también se ha partido. A nivel microscópico, los dos bordes del fragmento no son planos — son irregulares, con la fibra de papel y la emulsión desfasadas una respecto de la otra. Por eso pegar los fragmentos casi nunca queda limpio; estás intentando registrar dos superficies ligeramente incompatibles.

**El problema óptico:** Cuando reúnes los fragmentos, la línea del desgarro en sí se lee como un borde de alto contraste en el escaneo, porque los bordes del fragmento captan la luz de forma distinta a la superficie plana de la impresión, y cualquier espacio entre fragmentos se llena de sombra. También pierdes una franja delgada de contenido de la imagen a lo largo del desgarro donde se desprendió la fibra de papel, normalmente de 0,5 a 2 mm de ancho.

La reparación tradicional ataca ambos problemas físicamente — alineación precisa de fragmentos, tisú de reparación archivístico en el reverso, rellenos tonales a lo largo del borde. Ese trabajo es lento, especializado y a menudo excesivo para colecciones familiares. La reparación digital separa los problemas: usa la alineación física solo como una ayuda para el escaneo, no como un tratamiento final, y deja que la IA se encargue de la costura y de la franja faltante en el software. Los fragmentos originales quedan intactos como evidencia; la imagen restaurada se convierte en un entregable separado.

La explicación sobre [cómo funciona la restauración de fotos con IA](/blog/how-ai-photo-restoration-works) detalla lo que realmente hacen los modelos de inpainting a lo largo de los bordes rotos. La versión corta: los modelos modernos tratan la costura como una máscara y la rellenan usando síntesis contextual entrenada con millones de fotografías. El resultado suele ser lo suficientemente bueno como para que tengas que buscar la costura para verla.

## Tipos de desgarros y cómo se ve cada uno en realidad

No todos los desgarros son iguales. El enfoque de reparación cambia de forma significativa según el patrón al que te enfrentes.

### Desgarro simple y limpio (dos fragmentos)

El caso más sencillo. Una foto partida por la mitad, normalmente en diagonal o vertical, con ambos fragmentos presentes y en buen estado en los bordes. La pérdida de emulsión a lo largo de la línea del desgarro es mínima. Esto es la mayoría de lo que veo en colecciones familiares — el patrón típico de una foto que fue agarrada bruscamente durante una mudanza, o rota con enojo y luego lamentada.

Tasa de recuperación: más del 90% a nivel visualmente indistinguible.

### Desgarro con astilla faltante

Un desgarro donde la línea no es limpia — una franja fina de imagen, normalmente de 1 a 5 mm de ancho y que se extiende a lo largo de parte del desgarro, ha desaparecido. Ya sea arrancada en el evento original o perdida durante el almacenamiento posterior. Aquí es donde el inpainting con IA se gana su lugar; el modelo rellena la franja a partir del contexto circundante.

Tasa de recuperación: 70–85%, según lo que estuviera en la franja faltante. Las franjas sobre fondos o ropa quedan casi invisibles después de la reparación. Las franjas sobre rostros son más difíciles y a veces requieren decidir si se acepta la suposición de la IA.

### Foto rota en varias piezas

Tres a seis fragmentos, aún todos presentes. Una foto que fue rota repetidamente, o una que se rompió a lo largo de una línea de doblez débil en varias piezas durante el manejo. El flujo de trabajo es el mismo que para un desgarro de dos piezas, solo con más pasos de alineación durante el escaneo. Mi guía de [cómo arreglar una foto rota en cuatro](/blog/how-to-fix-photo-torn-in-quarters) recorre en detalle el caso de cuatro piezas; la lógica escala a seis u ocho.

Tasa de recuperación: 70–85%, bajando con cada fragmento adicional principalmente porque cada costura introduce su propio pequeño error de alineación.

### Desgarro con fragmento perdido

Uno o más fragmentos faltan por completo — normalmente una esquina, ocasionalmente una sección más grande. Aquí es donde la IA alcanza su límite honesto. El modelo puede extender plausiblemente fondos y ropa genérica, pero no puede inventar un rostro que no está ahí. Si el fragmento faltante contenía el rostro del sujeto, te enfrentas a una restauración parcial, no a una limpia, y lo correcto es ser honesto al respecto.

Tasa de recuperación: 30–80%, dependiendo por completo de lo que estuviera en el fragmento faltante.

### Desgarro a lo largo de un doblez o arruga

Una foto doblada y redoblada hasta que finalmente se rompió a lo largo de la línea del doblez debilitada. El desgarro en sí puede ser limpio, pero el papel a ambos lados suele estar debilitado durante varios milímetros, con daño visible del doblez que se extiende más allá de la rotura. La guía [arregla fotos familiares con dobleces](/blog/fix-creased-family-photos) cubre el paso de recuperación de dobleces, que es una operación separada que necesitarás ejecutar antes o después de la reparación del desgarro.

Tasa de recuperación: 75–90% dependiendo de qué tan severo sea el daño del doblez adyacente.

### Desgarro combinado con otros daños

El caso realista en la mayoría de las cajas familiares. La foto está rota y tiene manchas de envejecimiento, o está rota y con manchas de agua, o está rota y la emulsión está agrietada. Trata el desgarro como el primer problema y los otros daños como una segunda pasada; intentar resolverlos simultáneamente confunde al pipeline de IA y al retoque manual.

Tasa de recuperación: depende de la combinación. Una impresión rota con [daño por agua](/blog/restore-water-damaged-photographs-at-home) pesado está en la pila roja; una impresión rota con descoloramiento leve está en la pila amarilla.

## Los primeros veinte minutos después de que ocurre un desgarro

Si el desgarro acaba de ocurrir, haz estas cosas en orden. Cada una aumenta la calidad final de la recuperación.

### Deja de mover los fragmentos

No intentes volver a encajarlos sobre una superficie dura. Los bordes de los fragmentos se enganchan y se rompen aún más entre sí y contra las mesas. Coloca cada fragmento boca arriba sobre una hoja de papel limpia, con un espacio de 1 cm entre ellos. No los apiles.

### No los pegues con cinta

La cinta común destruye la emulsión. Con los años, el adhesivo se amarillea y migra hacia la fibra del papel. La cinta archivística es aceptable solo en el reverso, nunca a través de la imagen, y solo si realmente necesitas reunir la impresión físicamente por una razón específica — la mayoría de las familias no lo necesitan. El flujo de trabajo digital hace que pegar con cinta sea innecesario.

### Escanea cada fragmento por separado

Este es el paso que más cambia la calidad de la recuperación. Coloca cada fragmento boca abajo en el escáner, escanéalo individualmente a 600–1200 DPI y guarda cada uno como un archivo TIFF separado. El escáner puede capturar el borde irregular a plena resolución sin riesgo de que el fragmento se mueva durante el escaneo. Registrarás los fragmentos en el software, donde la alineación es no destructiva.

### Guarda los fragmentos físicos de forma segura

Después de escanear, desliza los fragmentos — aún separados, no reensamblados — dentro de fundas archivísticas libres de ácido, una funda por fragmento. Guárdalos en una carpeta etiquetada con el nombre del archivo de escaneo para poder encontrarlos de nuevo. Los fragmentos originales son evidencia genealógica; trátalos como tal. La guía de [técnicas de reparación de fotos vintage](/blog/vintage-photo-repair-techniques) cubre el almacenamiento archivístico con más profundidad.

## Escaneando fotos rotas: la técnica importa

Las fotos rotas tienen una particularidad de escaneo que las impresiones sin daño no tienen: los bordes de los fragmentos están ligeramente elevados por encima del vidrio plano del escáner, lo que puede introducir artefactos de escaneo a lo largo de la línea de rotura. Algunos pequeños ajustes en la técnica solucionan esto.

### Equipo

Un escáner plano es la herramienta adecuada. Yo uso un Epson V600 para el trabajo doméstico y un V850 para cualquier cosa importante en términos archivísticos. Los escaneos con cámara de teléfono son adecuados para compartir rápidamente en redes sociales, pero introducen distorsión geométrica e irregularidad de iluminación que hacen mucho más difícil la alineación posterior. Para una foto rota, usa un escáner plano adecuado si es posible.

### Manipulación de fragmentos

Usa guantes de algodón limpios. El papel fotográfico retiene el aceite de la piel de forma permanente, y estarás manipulando los fragmentos más de lo normal durante el proceso de alineación. Sujeta los fragmentos por los bordes alejados, lejos de la línea del desgarro donde el papel es más débil.

### Ajustes de escaneo

Escanea a 1200 DPI para la mayoría de los trabajos, 2400 DPI si la foto es pequeña o si quieres margen para ampliación más adelante. Color de 48 bits incluso para blanco y negro; la profundidad de bits adicional le da al modelo de inpainting más señal con la que trabajar a lo largo de la línea del desgarro. Guarda los masters como TIFF sin comprimir; JPEG introduce artefactos de compresión a lo largo de los bordes que la IA luego confunde con daño.

### Alineación física para escaneo

Aquí está el truco que cambia los resultados. Coloca todos los fragmentos sobre la cama del escáner en sus posiciones correctas aproximadas, con un espacio visible de 1–2 mm entre piezas. No intentes unirlos a tope — el espacio es lo que le permite a la IA ver dónde está la costura. Cubre la cama con un trozo de cartulina blanca limpia para mantener los fragmentos planos (peso ligero solamente, no presiones). Escanea toda la composición como una sola imagen.

Este enfoque escanea todos los fragmentos alineados en una sola captura, lo que significa que el flujo de trabajo posterior tiene un solo archivo en el que trabajar en lugar de tres. Si los fragmentos están demasiado desalineados para caber en un solo escaneo, escanéalos individualmente y alinéalos en el software; mi guía de [cómo digitalizar fotos antiguas](/blog/how-to-digitize-old-photos) cubre el caso del escaneo de un solo fragmento, y la alineación multifragmento es un paso posterior de capas en Photoshop.

### Manejo de fragmentos curvados o deformados

Los fragmentos rotos a menudo se curvan, especialmente el papel antiguo que ha sido guardado suelto. No los fuerces a quedar planos con la mano. Coloca los fragmentos entre dos hojas de papel limpio dentro de un libro pesado durante 24–48 horas; esto relaja la curvatura sin agrietar la emulsión. Para fragmentos que están severamente deformados por la edad o la humedad, la técnica en [arregla los bordes de fotografías curvadas](/blog/fix-curled-photograph-edges) cubre el enfoque de humidificación.

## El flujo de trabajo de reconstrucción digital

Aquí es donde la IA hace el trabajo que la restauración tradicional reservaba para especialistas. El pipeline es sencillo, pero el orden importa.

### Paso 1: Limpia cada fragmento individualmente

Antes de intentar reensamblar, cada fragmento debe ser un escaneo limpio. Ejecuta una eliminación ligera de polvo y rayones en cada fragmento. Si los fragmentos tienen suciedad superficial o huellas dactilares del evento del desgarro, estas agravarán los artefactos de la costura más adelante. La guía [arregla impresiones vintage con rayones](/blog/fix-scratched-vintage-prints) cubre el enfoque general de eliminación de rayones.

### Paso 2: Registra y alinea

Alinea los fragmentos en sus posiciones relativas correctas sobre un único lienzo. En Photoshop, cada fragmento en su propia capa, trasladado y rotado hasta que los bordes rotos coincidan. Deja un espacio de 2–4 píxeles entre fragmentos — no los superpongas ni los unas perfectamente a tope. El paso de inpainting con IA necesita ese espacio para identificar dónde se supone que debe trabajar.

### Paso 3: Enmascara la costura

Pinta una máscara sobre el espacio entre fragmentos, más 2–3 píxeles a cada lado para cubrir cualquier daño de emulsión justo a lo largo del desgarro. Esta máscara es lo que le entregas al modelo de inpainting. Demasiado delgada, y el modelo deja una costura residual visible; demasiado gruesa, y empieza a repintar áreas de la imagen original innecesariamente.

### Paso 4: Ejecuta la pasada de inpainting con IA

Exporta el compuesto alineado con la región enmascarada claramente marcada y procésalo con la herramienta de [restauración de fotos antiguas](/old-photo-restoration) en modo reparación. Los modelos modernos rellenan la región enmascarada con contenido sintetizado a partir de los píxeles circundantes. Para la mayoría de las fotos familiares rotas, esta única pasada produce un resultado sin costuras.

### Paso 5: Revisa al 100% de zoom

Acércate al 100% y recorre la antigua línea del desgarro. Estás buscando: desajuste de color residual (un fragmento ligeramente más cálido o más frío que el otro), contenido alucinado (el modelo inventó algo que no coincide con el contexto) y cualquier píxel visible de la costura. La mayoría de los problemas en esta etapa son diminutos y pueden corregirse con una pasada de tampón de clonar de 2 minutos en cualquier editor.

### Paso 6: Ejecuta la pasada de restauración completa

Ahora que la costura ha desaparecido, ejecuta toda la imagen por una restauración estándar — corrección de descoloramiento, balance de color, enfoque del rostro. Hacer esto segundo, no primero, es importante: si ejecutas la restauración completa antes de la reparación del desgarro, la IA intenta corregir la costura como descoloramiento o polvo y se confunde. Primero la reparación del desgarro, luego todo lo demás. La explicación sobre [cómo funciona la restauración de fotos con IA](/blog/how-ai-photo-restoration-works) es útil aquí para entender por qué importa el orden.

### Paso 7: Guarda dos versiones

Guarda la versión con los fragmentos alineados con el desgarro como registro archivístico junto con la versión final restaurada. Dentro de diez años, si alguien cuestiona la restauración, querrás tener disponible el escaneo fuente de la verdad sin tener que volver a los fragmentos originales.

## Un ejemplo trabajado: un retrato militar de 1943 roto en tres

El año pasado trabajé en un retrato militar de estudio de 1943 del abuelo de un cliente, roto en tres fragmentos — un desgarro vertical por el centro de la imagen, y un desgarro diagonal que cruzaba la parte inferior, probablemente por llevarla en la billetera hasta que finalmente cedió. La chaqueta del uniforme cruzaba ambas líneas del desgarro. Partes del rostro estaban intactas; un ojo se asentaba directamente sobre el desgarro central.

Mi enfoque:

1. Escaneé cada uno de los tres fragmentos por separado a 1200 DPI, TIFF de 48 bits, manteniendo los bordes intactos. También escaneé el reverso del fragmento más grande — tenía una fecha escrita a mano que resultó ser legible.
2. Alineé los fragmentos en Photoshop. El desgarro vertical era bastante limpio; el desgarro diagonal tenía una pequeña astilla faltante de unos 2 mm de ancho a lo largo de parte de su longitud.
3. Enmascaré las costuras, incluida una máscara ligeramente más ancha a través de la astilla faltante.
4. Procesé con la [restauración de fotos antiguas](/old-photo-restoration) en modo reparación. El desgarro vertical que cruzaba la mejilla quedó limpio. El desgarro diagonal que cruzaba la chaqueta quedó limpio. El desgarro diagonal que cruzaba el ojo necesitó una segunda pasada — el primer intento del modelo produjo una estructura de ojo con forma plausible pero claramente incorrecta.
5. Corregí el ojo a mano usando el otro ojo (intacto) como referencia de espejo en Photoshop. Este es el paso de criterio donde la IA por sí sola no fue suficiente y se necesitó un ojo humano para hacer que el retrato coincidiera con la persona real.
6. Ejecuté la restauración completa — corrección de descoloramiento, recuperación de contraste, un leve desenfoque enmascarado en el rostro.
7. Guardé el TIFF archivístico y una versión para impresión de 5×7. Tiempo total: 45 minutos.

La familia del cliente no podía ver los desgarros en la versión restaurada. Los fragmentos originales están en fundas libres de ácido dentro de una carpeta. El propósito de conservar ambos es que los originales son evidencia histórica; la restauración es una presentación de cómo se veía la foto antes del daño. Ninguno reemplaza al otro.

El contexto más amplio para retratos de tiempos de guerra — referencias de insignias de uniforme, elecciones tonales apropiadas para la época — está en la guía de [restauración de fotos de bodas](/blog/wedding-photo-restoration), que a pesar del nombre cubre la restauración de retratos formales de cualquier época.

## Qué acierta y qué falla la IA en la reparación de desgarros

Ser específico sobre las capacidades ahorra frustración.

### Qué maneja bien la IA

- **Desgarros limpios a través de fondos.** Cielo, paredes, follaje, áreas desenfocadas — el inpainting funciona casi a la perfección porque no hay contenido específico que equivocar.
- **Desgarros limpios a través de la ropa.** La tela es repetitiva; los modelos reconstruyen tela plausible que no necesita coincidir con ningún patrón específico.
- **Desgarros a través de partes del cuerpo desenfocadas.** Manos, brazos, tobillos — el modelo usa el contexto circundante para rellenarlos con buena precisión.
- **Eliminación de costuras cuando los fragmentos encajan bien.** La costura en sí, como artefacto óptico, desaparece de forma confiable.
- **Astillas finas faltantes.** Si la franja faltante es de menos de 2–3 mm en la mayoría de las direcciones, el relleno contextual la maneja de forma invisible.

### Con qué tiene dificultades la IA

- **Desgarros a través de rostros, especialmente los ojos.** El modelo producirá un resultado con apariencia de rostro, pero puede no coincidir con la persona real. Revisa siempre estos casos manualmente.
- **Desgarros a través de texto o letreros.** El modelo inventará un texto de apariencia plausible que no es texto real. Para cualquier foto con texto legible a lo largo del desgarro, planea corregir la región del texto a mano.
- **Contenido faltante mayor a aproximadamente el 5% del área de la imagen.** En algún punto, el modelo está inventando más de lo que está rellenando, y el resultado ya no es una restauración sino una interpretación.
- **Bordes de fragmentos con daño severo en la emulsión.** Si las fibras de papel en la rotura están curvadas o agrietadas ([emulsión agrietada](/blog/fix-cracked-emulsion-photos)), la IA lee eso como textura e intenta preservarlo. Preprocesa los bordes del fragmento antes de la alineación.
- **Desgarros donde los fragmentos tienen un envejecimiento significativamente diferente.** Si una pieza estuvo al sol y la otra en un cajón durante 40 años, no coincidirán en color. Puedes corregir esto haciendo coincidir los colores de los fragmentos manualmente antes de la pasada de IA.

Para contexto sobre los límites generales de la IA en el trabajo fotográfico, la [comparación de software de restauración de fotos](/blog/photo-restoration-software-comparison) cubre el panorama más amplio de compensaciones.

## Comparación de herramientas para reparación de desgarros

La elección de la herramienta importa para fotos rotas de una manera que no importa para un descoloramiento simple, porque la calidad del inpainting difiere sustancialmente entre plataformas.

| Herramienta | Fortaleza en reparación de desgarros | Debilidad | Mejor para |
|------|---------------------|----------|----------|
| ArtImageHub (este sitio) | Fuerte eliminación de costuras, buen inpainting en ropa y fondos, maneja alineación de múltiples fragmentos | El inpainting de rostros a lo largo de la línea de los ojos puede necesitar retoque manual | La mayoría de las reparaciones domésticas de desgarros |
| Photoshop Generative Fill | Excelente relleno contextual, control total por capas | Requiere licencia de Photoshop y habilidad; no apto para lotes | Restauraciones únicas; trabajo de la pila roja |
| MyHeritage Photo Tools | Bueno en áreas faciales específicamente | Más débil en daños no faciales; requiere suscripción | Retratos con desgarros faciales |
| Remini mobile | Rápido en teléfonos | No maneja específicamente bordes rotos; suaviza en exceso | Publicaciones rápidas en redes sociales, no archivísticas |
| Photoshop tradicional (tampón de clonar manual) | Control total, resultados perfectos en manos hábiles | 30–90 minutos por foto; requisito de habilidad pronunciado | Cualquier caso donde el inpainting falle |
| Hotpot AI | Restauración general decente | El flujo de trabajo específico para desgarros es más débil | Solo desgarros leves |

Para una comparación más profunda con los principales competidores, el resumen de [las mejores herramientas de restauración de fotos antiguas con IA en 2026](/blog/best-ai-old-photo-restoration-tools-2026) cubre el panorama; para comparaciones cara a cara específicas, [ArtImageHub vs Adobe Photoshop](/blog/artimagehub-vs-adobe-photoshop) y [ArtImageHub vs Hotpot AI](/blog/artimagehub-vs-hotpot-ai) son las comparaciones más relevantes.

## Combinar la reparación de desgarros con otras restauraciones

Las fotos familiares reales rara vez tienen un solo tipo de daño. Una foto rota suele ser también una foto descolorida, ligeramente manchada y con suciedad superficial. El orden de las operaciones importa.

**Secuencia recomendada:**

1. Escanea los fragmentos por separado a alta resolución.
2. Haz la limpieza por fragmento (polvo, suciedad superficial, manchas localizadas).
3. Alinea los fragmentos y enmascara las costuras.
4. Ejecuta el inpainting con IA solo en las costuras.
5. Ejecuta la restauración de la imagen completa sobre el compuesto reunido.
6. Retoque manual en cualquier cosa que la pasada global haya omitido.
7. Color final, contraste y enfoque.

Combinaciones específicas a considerar:

- **Rota + daño por agua.** Maneja primero la estabilización del daño por agua (consulta la [guía definitiva de restauración de fotos con daño por agua](/blog/ultimate-guide-water-damage-photo-restoration) para el triaje), luego trátala como reparación de desgarro. Los fragmentos mojados deben estar completamente secos antes de escanear.
- **Rota + con dobleces.** El doblez y el desgarro suelen originarse del mismo pliegue. Usa [arregla fotos familiares con dobleces](/blog/fix-creased-family-photos) como el paso específico para dobleces, generalmente después de que la costura del desgarro está reconstruida.
- **Rota + manchada.** Elimina primero las manchas en la etapa por fragmento. Consulta [arregla fotos manchadas](/blog/fix-stained-photographs) para las especificaciones del manejo de manchas; una mancha que cruza el desgarro es más fácil de tratar antes de que se cierre la costura.
- **Rota + papel quebradizo.** Las impresiones muy antiguas (1900–1920) pueden romperse en parte porque el papel es quebradizo. La [guía para arreglar fotografías antiguas quebradizas](/blog/fix-brittle-old-photographs-guide) y el tutorial relacionado de [arregla papel fotográfico quebradizo](/blog/fix-brittle-photo-paper) cubren cómo manejarlas sin empeorarlas.
- **Rota + original desenfocado.** Si la foto estaba [desenfocada](/blog/how-to-fix-out-of-focus-old-photos) o tiene [desenfoque de movimiento](/blog/how-to-fix-motion-blur-old-photos) en la captura original, la reconstrucción de la costura puede verse más nítida que la imagen circundante, lo que se lee como artificial. Aplica un desenfoque que coincida a la región con inpainting si es necesario.

## Cuándo el daño por desgarro supera el DIY

Algunos desgarros necesitan un conservador profesional, no IA. Específicamente:

- Desgarros en daguerrotipos, ambrotipos o ferrotipos. Estos son reparaciones de objetos físicos en materiales raros; el software no ayudará.
- Desgarros en impresiones con un valor monetario significativo (avalúo de más de $1,000). El valor está en el original; la restauración debe hacerse de una manera que preserve el original físicamente.
- Desgarros donde los fragmentos tienen delaminación parcial del papel — es decir, el frente de la impresión se ha separado del reverso en algún punto a lo largo del desgarro. Esto es trabajo de conservación física, no digital.
- Desgarros con daño biológico pesado (moho, manchas de envejecimiento activas a lo largo del borde de la rotura donde ha penetrado la humedad).

Costo esperado: $150 por una consulta, $200–800 por impresión para conservación física moderada, $500–2,500 para tratamiento de grado museístico. Para cualquier caso en este rango, el directorio regional del American Institute for Conservation es el punto de partida.

Para el otro 90% de las impresiones rotas en una colección familiar típica, el DIY con herramientas de IA es tanto más rápido como, honestamente, a menudo visualmente mejor que la tradición de reparación física a la antigua, porque la reconstrucción digital tiene menos compensaciones contra los fragmentos originales. La clave es ser realista sobre en qué categoría cae tu foto.

## Una expectativa realista de antes y después

Lo que realmente recibirás de vuelta, dependiendo del nivel de daño:

- **Desgarro limpio de dos piezas a través de un fondo o ropa:** Indistinguible del no dañado a distancia normal de visualización, y normalmente también al 100% de zoom.
- **Desgarro de dos piezas a través de un rostro:** Muy bueno, pero en una inspección cercana el área reconstruida puede leerse como ligeramente más suave que el grano circundante. Aceptable para reimpresión hasta 8×10.
- **Desgarro multifragmento con astillas finas faltantes:** Reconocible como restaurado solo bajo aumento. Perfecto para archivos familiares y reimpresiones.
- **Desgarro con un fragmento faltante que contiene parte de un rostro:** Una restauración parcial. El inpainting de la IA puede ser plausible pero no identificable. Lo honesto es mostrarle a la familia tanto la versión sin restaurar como la restaurada y dejarles decidir cuál prefieren.
- **Severamente rota, desmoronada o incompleta:** Restauración parcial honesta. Lo que obtienes es una imagen reconocible de la foto con compromisos visibles; sigue siendo mejor que una caja de zapatos llena de fragmentos, y preserva lo que existe digitalmente.

Esta curva de realidad es la misma que cubro en el contexto de daño por agua en la [guía definitiva de restauración de fotos con daño por agua](/blog/ultimate-guide-water-damage-photo-restoration), y para la digitalización en general en [cómo digitalizar fotos antiguas](/blog/how-to-digitize-old-photos). Establecer expectativas antes de la restauración, no después, es el paso más importante.

## Preguntas frecuentes

**¿Se puede realmente restaurar una foto rota por la mitad para que se vea sin daño?**

Sí, en la mayoría de los casos. Un desgarro limpio de dos fragmentos con ambas piezas intactas vuelve indistinguible de una impresión sin daño a distancia normal de visualización aproximadamente el 90% del tiempo usando inpainting con IA moderna. El 10% residual incluye desgarros a través de rostros (específicamente a través de la línea de los ojos), desgarros con astillas faltantes y desgarros donde los fragmentos han envejecido de forma diferente entre sí. Esos requieren ya sea retoque manual o una decisión honesta de aceptar el compromiso, pero incluso estos suelen verse dramáticamente mejor que el original roto.

**¿Debería pegar con cinta los fragmentos de una foto rota antes de escanear?**

No. Pegar con cinta hace más difícil la restauración, no más fácil. La cinta común se amarilleará y sangrará en el papel. Incluso la cinta archivística introduce una reparación física que aparece en el escaneo. Escanea los fragmentos por separado o colócalos en posición con un pequeño espacio sobre la cama del escáner y captúralos como un único escaneo. El flujo de trabajo digital reúne los fragmentos en el software, donde la operación es no destructiva y reversible.

**¿Cuánto cuesta reparar una fotografía rota profesionalmente?**

El DIY con una suscripción de restauración con IA cuesta $0–10 por mes más el acceso a un escáner. Un servicio local profesional de restauración digital cobra normalmente $40–150 por foto rota, dependiendo de la complejidad y la cantidad de desgarros. Un conservador de papel capacitado haciendo restauración física cobra $200–800 por desgarros moderados, $500–2,500 por material archivísticamente valioso. Para la mayoría de las colecciones familiares, la restauración digital basada en IA produce resultados que son visualmente equivalentes a la restauración digital profesional a una fracción del costo.

**¿Qué pasa si me falta un pedazo de la fotografía rota?**

Escanea lo que tengas y pásalo por inpainting con IA de todos modos. El modelo rellenará el área faltante con contexto de la imagen circundante. Para piezas faltantes sobre un fondo, ropa o área plana, el resultado suele ser sin costuras. Para piezas faltantes sobre un rostro o cualquier cosa específica, el resultado será plausible pero puede no coincidir con la realidad — así que revisa honestamente antes de aceptar. Si el área faltante es grande y contiene contenido crítico, considera presentar tanto la versión sin restaurar como la restaurada en lugar de fingir que la reconstrucción es precisa.

**¿Puede la IA arreglar una foto rota en muchos pedazos pequeños?**

Hasta unos seis u ocho fragmentos, sí, usando el mismo flujo de trabajo escalado: escanea cada pieza por separado, alinea en el software, enmascara las costuras, ejecuta el inpainting, luego la restauración completa. Pasando diez o doce fragmentos, el trabajo de alineación en sí se convierte en el costo de tiempo y es propenso a errores. Mi tutorial de [cómo arreglar una foto rota en cuatro](/blog/how-to-fix-photo-torn-in-quarters) cubre el caso de cuatro piezas, que es representativo del enfoque; escalar a seis u ocho piezas solo significa más capas de alineación.

**¿A qué resolución debo escanear fotos rotas?**

Escanea a 1200 DPI para la mayoría de las impresiones familiares y 2400 DPI si la foto es pequeña (menos de 3×5 pulgadas) o si quieres margen para ampliación. Profundidad de color de 48 bits, incluso para impresiones en blanco y negro — los bits adicionales le dan a los modelos de IA más información para reconstruir las costuras del desgarro. Guarda los masters como TIFF sin comprimir; la compresión JPEG introduce artefactos de borde que la IA puede confundir con daño a lo largo de la línea del desgarro.

**¿Es mejor pegar los fragmentos o hacer una reparación digital?**

Digital. Pegar te compromete a un resultado físico permanente que aparecerá en cualquier escaneo futuro, y cualquier error en la alineación queda grabado. La reparación digital es reversible, no destructiva para los fragmentos originales y produce un resultado visualmente mejor en casi todos los casos. Guarda los fragmentos originales en fundas archivísticas como evidencia; distribuye la versión digital restaurada como la copia para mostrar.

**¿Puedo arreglar una foto rota en mi teléfono?**

Para trabajo casual rápido, sí — las aplicaciones móviles harán un trabajo aceptable en desgarros simples de dos piezas. Para trabajo archivístico con reliquias familiares, no. El escaneo con cámara de teléfono introduce irregularidad de iluminación y distorsión geométrica que dificultan la alineación, y los modelos de inpainting optimizados para móviles están ajustados para velocidad sobre precisión. Usa un escáner plano y un flujo de trabajo de escritorio para cualquier cosa que quieras conservar en el archivo familiar a largo plazo.

---

Una foto rota se siente como un daño irreversible hasta que trabajas en unas cuantas. Los fragmentos preservan la información; el desgarro es una costura que ocultar, no una pérdida que lamentar. Cuando estés listo para empezar, lleva tus fragmentos escaneados a [restauración de fotos antiguas](/old-photo-restoration) y prueba el modo reparación en un desgarro limpio de dos piezas primero. Ese primer éxito cambia la forma en que miras el resto de la caja de zapatos.