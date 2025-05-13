// Exportamos un objeto de configuración para el entorno de producción.
export const environments = {
    // Indicamos que este es el entorno de producción.
    production: true,

    // URL base para el backend principal de la aplicación.
    baseUrl: 'https://kubetest.unicauca.edu.co/sed-back',

    // URL base para el servicio de estadísticas.
    baseUrlStatistics: 'https://kubetest.unicauca.edu.co/sed-estadisticas',

    // URL base para el servicio de autenticación de usuarios.
    baseUrlAuth: 'https://kubetest.unicauca.edu.co/sed-usuarios',

    // URL base para el servicio de gestión de labores docentes.
    baseUrlLaborDocente: 'https://kubetest.unicauca.edu.co/sed-labor',

    // URL base para el servicio de mensajería.
    baseUrlEmail: 'https://kubetest.unicauca.edu.co/sed-mensajeria',

    // Configuración de Firebase para la integración con servicios como autenticación y almacenamiento.
    firebaseConfig: {
        apiKey: 'AIzaSyDraRIAHEQTxallqQvuEJ42NetIXjbXpf4', // Clave de API para acceder a los servicios de Firebase.
        authDomain: 'sed-fiet-unicauca.firebaseapp.com', // Dominio de autenticación de Firebase.
        projectId: 'sed-fiet-unicauca', // ID del proyecto de Firebase.
        storageBucket: 'sed-fiet-unicauca.firebasestorage.app', // Almacenamiento de archivos en Firebase.
        messagingSenderId: '978006211217', // ID del remitente para mensajería de Firebase.
        appId: '1:978006211217:web:bdfa8b05b30c4d0972dd30', // ID de la aplicación de Firebase.
        measurementId: 'G-BTLGTJ0CSH', // ID para medición y análisis en Firebase.
    },
};
