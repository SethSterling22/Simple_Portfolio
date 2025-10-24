##################################################################################################################
STERLING'S PORTFOLIO

Hecho por: Sebastián Hernández Sterling
Número de estudiante: 801 - 21 - 1038
Profesora: Yaira K. Rivera Sánchez
Clase: CCOM4995-0U1
##################################################################################################################

##################################################################################################################
¿CÓMO CORRER EL PROYECTO?

Para correr la aplicación basta con tener apache instalado y colocar el directorio del proyecto en
la dirección /var/www/html de un sistema linux que lo esté corriendo, mediante de alguna extensión
de visualización web en algún editor de código o simplemente abriendo el archivo "index.html" con
cualquier navegador.

También puede verse la aplicación entrando al siguiente enlace:
	* https://webserver1.stegosaurus-panga.ts.net/portfolio/index.html

(El enlace fue creado con la herramienta Funnel de Tailscale en mi servidor personal)

##################################################################################################################



##################################################################################################################
PALETA DE COLORES:

Se quizo mantener una estética básica y seria para el proyecto, por lo cual no se utilizaron colores
muy llamativos, del mismo modo que el programa fue desarrollado entre 12am y 3am , por lo cual se pensó
que fuera amigable a la vista.

Colores principales de la aplicación:
	* Gris oscuro: #1a1c23 (se le añadieron gradientes para dar un fondo más nutrido)
	* Blanco crema claro: #e0e0e0 (Un blanco menos intenso que el convencional)
	* Negro claro: #171717 (Se utilizó para dar más contraste en la tarjeta de presentación)

##################################################################################################################
				

##################################################################################################################
FUNCIONALIDADES: 

Gran parte de las funcionalidades visuales pudieron lograrse gracias a CSS, como movimiento de algunos
elementos e interacción con ellos. 

Funcionalidades de Javascript:

	* Comprobación de E-mail:
		En el footer se encuentra un form que "Envía" un mensaje, en el cual se debe colocar un
		E-mail, este mismo es llamado a la función de comprobación cuando se oprime el botón de
		"send", esta función dará un mensaje si el E-mail no cumple con las condiciones establecidad
		por la expresión regular (string "@" string "." string).

	* Aumento de imágenes:
		Puede utilizarse en todas las imágenes de la página (menos en la de perfil [hecho a drede]),
		Esto enviará el valor del patrón de esa imágen en concreto a la función, la cual activará un
		modal que desplegará la imagen por encima de todo el contenido. Se puede salir de este modo
		haciendo click tanto en la "Equis" arriba a la derecha como en el mismo fondo del modal. 

##################################################################################################################


<El número de teléfono de la tarjeta de presentación es el ip privado del servidor que aloja la página>


