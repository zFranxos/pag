# 🎄 Regalo de Navidad - Árbol 3D Interactivo

## Cómo personalizar

### 1. Agregar las fotos de tu novia
Coloca 5 fotos en la carpeta `fotos/` con estos nombres:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- `foto4.jpg`
- `foto5.jpg`

### 2. Personalizar los mensajes
Abre el archivo `script.js` y edita el objeto `gifts` al inicio del archivo:

```javascript
const gifts = {
    1: {
        message: "Tu mensaje personalizado aquí 💕",
        image: "fotos/foto1.jpg"
    },
    // ... etc
};
```

### 3. Abrir la página
Simplemente abre el archivo `index.html` en tu navegador.

## Funcionalidades
- 🎄 Árbol de navidad 3D que puedes girar arrastrando
- 🎁 5 regalos colgantes interactivos
- 📸 Al tocar un regalo se abre mostrando una foto y mensaje
- ❄️ Copos de nieve cayendo
- ✨ Efectos de brillo y luces parpadeantes
- 📱 Funciona en móviles (táctil)

## Tip
Si quieres cambiar el título, edita el `<h1>` en `index.html`.

¡Feliz Navidad! 🎅❤️
