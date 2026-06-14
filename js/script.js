// --- 1. Three.js Animación de Fondo (Partículas en 3D) ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Crear partículas
const geometry = new THREE.BufferGeometry();
const particlesCount = 700;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    // Esparcir partículas en un rango amplio
    posArray[i] = (Math.random() - 0.5) * 15; 
}

geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material de las partículas (puntos neón)
const material = new THREE.PointsMaterial({
    size: 0.03,
    color: 0x00E5FF, // Tu azul neón
    transparent: true,
    opacity: 0.8,
});

const particlesMesh = new THREE.Points(geometry, material);
scene.add(particlesMesh);

camera.position.z = 4;

// Interacción con el Mouse
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
});

// Loop de animación
const animate = () => {
    requestAnimationFrame(animate);

    // Rotación suave automática
    particlesMesh.rotation.y += 0.002;
    particlesMesh.rotation.x += 0.001;

    // Reacción al mouse (Efecto parallax)
    particlesMesh.rotation.y += mouseX * 0.05;
    particlesMesh.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
};

animate();

// Redimensionar ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- 2. Datos del Portafolio (Basado en tus archivos subidos) ---
const projects = [
    {
        id: 6,
        title: "Retoque Fotográfico",
        category: "retoque",
        desc: "RETOQUE FOTOGRÁFICO PROFESIONAL - ANTES Y DESPUÉS\n\nRetoque profesional enfocado en piel natural, corrección de color, mejora de iluminación y preservación de detalles.\n\nTÉCNICAS UTILIZADAS:\n• Retoque de Piel: Separación de frecuencias, Dodge & Burn, conservación de textura\n• Eliminación de Imperfecciones: Pincel corrector, limpieza de distracciones\n• Ajustes de Luz y Color: Corrección de exposición, contraste, balance de blancos\n• Corrección de Color: Ajustes HSL, equilibrio de color, curvas de tono\n• Mejora de Detalles: Nitidez selectiva, realce de detalles\n\nResultado: Limpio, natural y de alta calidad.",
        mediaType: "image",
        mediaSrc: "assets/images/retoque.png",
        poster: "assets/images/retoque.png",
        software: ["Ps", "Lr"]
    },
    {
        id: 1,
        title: "GasBone - Identidad & IA",
        category: "video",
        desc: "Creación integral de la identidad para una línea de refrescos llamada GasBone. Desarrollo del logotipo, diseño completo del packaging y producción de un video promocional con estética cinematográfica, destacando los sabores Cherry y Mango. Además, se elaboró un spot audiovisual de alto impacto que presentó estos dos productos de manera inmersiva y sensorial, logrando que la marca GasBone experimentara un incremento notable y sostenido en sus ventas gracias a esta estrategia visual.",
        mediaType: "video",
        mediaSrc: "assets/videos/GasBone.mp4",
        poster: "assets/images/gasbone.png",
        software: ["Ai", "Ps", "IA"]
    },
    {
        id: 2,
        title: "Alcaldía de Samaná - Rebranding",
        category: "branding",
        desc: "Rediseño de la identidad visual institucional, incluyendo la modernización del logotipo, la papelería corporativa y la creación de piezas digitales para campañas en redes sociales, destacando eventos como la 'Semana de la Juventud y Salud Mental'. Además, desarrollé material publicitario para celebraciones especiales como 'Año Viejo' y el concurso 'Mejor Cuento Infantil', junto con la elaboración de tarjetas de agradecimiento y felicitación navideña de la administración municipal. También produje contenido audiovisual, edité videos para las plataformas oficiales y diseñé flyers, infografías y piezas informativas que fortalecieron la comunicación visual de la Alcaldía",
        mediaType: "image",
        mediaSrc: "assets/images/branding.png",
        poster: "assets/images/AlcaldiaPost.png" ,
        software: ["Ai", "Ps"]
    },
    {
        id: 3,
        title: "WAKU Energy Drink",
        category: "video",
        desc: "Diseño de identidad visual para una bebida energizante natural, desarrollando un logotipo distintivo y un packaging con texturas orgánicas para los sabores Raspberry Grape y Lime Lemon. Dentro del proceso creativo realizado para la empresa Waku, también llevé a cabo la conceptualización visual de la línea, la exploración cromática basada en ingredientes reales y la elaboración de mockups comerciales para su presentación interna y externa. Además, produje un video promocional con estilo cinematográfico que destacó las bebidas de Lima Limón y Frambuesa Uva, resaltando su energía natural, frescura y propósito funcional, contribuyendo al posicionamiento visual y comercial de la marca.",
        mediaType: "video",
        mediaSrc: "assets/videos/videowaku.mp4",
        poster: "assets/images/waku.png",
        software: ["Ai", "Ps"]
    },
    {
        id: 4,
        title: "Mr. Blue's Style",
        category: "branding",
        desc: "Identidad corporativa para una marca de accesorios de mascotas. Desarrollo de un catálogo editorial con línea gráfica coherente, diseño de piezas para redes sociales y creación del packaging del empaque del producto. Además, realicé el diseño completo del manual de identidad corporativa de Mr Blue's Style, incluyendo la construcción del logotipo, la definición de la paleta de colores, tipografías y usos visuales de la marca. También elaboré mockups personalizados para la presentación comercial de las pañoletas, produje tarjetas de visita con un estilo moderno y clásico, y diseñé variaciones del logo en diferentes formatos y proporciones para su aplicación en productos, empaques y material publicitario. Todo este trabajo consolidó una identidad sólida, pet friendly y visualmente atractiva para la marca.",
        mediaType: "image",
        mediaSrc: "assets/images/BluePost.png",
        poster: "assets/images/Blue.png",
        software: ["Id", "Ai", "Ps"]
    },
    {
        id: 5,
        title: "Campaña Ambiental Samaná",
        category: "social",
        desc: "Diseño de piezas gráficas para campañas de concienciación ambiental y promoción del uso correcto de las basuras en Samaná. Además, desarrollé material publicitario para redes sociales de EMSamana, elaboré flyers informativos para actividades comunitarias y diseñé piezas educativas enfocadas en el manejo responsable de residuos. También produje contenido visual para eventos institucionales y apoyé la creación de material digital que fortalecció la comunicación ambiental del municipio, logrando transmitir mensajes claros, llamativos y adaptados a las necesidades de la comunidad.",
        mediaType: "image",
        mediaSrc: "assets/images/123.png",
         poster: "assets/images/Emsamana.png",
        software: ["Ps", "Ai"]
    }
];

// --- 3. Renderizar Portafolio Dinámicamente ---
const grid = document.getElementById('portfolio-grid');

function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    
    projects.forEach(project => {
        if (filter === 'all' || project.category === filter) {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.setAttribute('data-id', project.id);

            // Determinar si mostrar video o imagen en la miniatura
            // Para optimizar, usaremos imagen de poster por defecto en grid
            let mediaContent = `<img src="${project.poster || project.mediaSrc}" alt="${project.title}">`;

            card.innerHTML = `
                ${mediaContent}
                <div class="project-overlay">
                    <span>${project.category}</span>
                    <h3>${project.title}</h3>
                </div>
            `;
            
            // Evento Click para abrir Modal
            card.addEventListener('click', () => openModal(project));
            grid.appendChild(card);
        }
    });
}

// Inicializar
renderProjects();

// Filtros
document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.getAttribute('data-filter'));
    });
});

// --- 4. Sistema de Modales ---
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');

function openModal(project) {
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-desc').innerText = project.desc;
    document.getElementById('modal-tag').innerText = project.category.toUpperCase();
    
    const mediaContainer = document.getElementById('modal-media-container');
    mediaContainer.innerHTML = ''; // Limpiar anterior

    if (project.mediaType === 'video') {
        mediaContainer.innerHTML = `
            <video controls autoplay loop class="modal-video">
                <source src="${project.mediaSrc}" type="video/mp4">
                Tu navegador no soporta video.
            </video>`;
    } else {
        mediaContainer.innerHTML = `<img src="${project.mediaSrc}" alt="${project.title}">`;
    }

    // Renderizar iconos de software (simulado texto)
    const softContainer = document.getElementById('modal-software');
    softContainer.innerHTML = project.software.map(s => `<span style="margin-right:10px; border:1px solid #555; padding:2px 8px; border-radius:4px; font-size:0.8rem;">${s}</span>`).join('');

    modal.classList.add('show');
}

closeModal.addEventListener('click', () => modal.classList.remove('show'));
window.addEventListener('click', (e) => {
    if (e.target == modal) modal.classList.remove('show');
});

// --- 5. Efecto Typewriter (Máquina de escribir) ---
const typeText = ["Diseñador Gráfico", "Editor de Video", "Creador de Contenido"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === typeText.length) {
        count = 0;
    }
    currentText = typeText[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typewriter").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pausa al terminar palabra
    } else {
        setTimeout(type, 100); // Velocidad de escritura
    }
})();

// --- 6. Scroll Animations (Fade In) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// CSS Helper for observer
const styleSheet = document.createElement("style");
styleSheet.innerText = ".visible { opacity: 1 !important; transform: translateY(0) !important; }";

document.head.appendChild(styleSheet);
