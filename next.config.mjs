// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['a57.foxnews.com'], // Ajoutez ici le domaine de l'image
//       },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['a57.foxnews.com', 'image.cnbcfm.com'], // Ajouter ici tous les domaines nécessaires
      deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Définit les tailles d'images pour les appareils
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Définit les tailles d'images statiques
      formats: ['image/avif', 'image/webp'], // Active les formats modernes pour de meilleures performances
    },
    reactStrictMode: true, // Active le mode strict de React pour des vérifications supplémentaires
    swcMinify: true, // Active la minification pour de meilleures performances en production
  };
  
  export default nextConfig;
  
