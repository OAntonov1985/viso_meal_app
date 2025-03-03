/** @type {import('next').NextConfig} */
const nextConfig = {
    "compilerOptions": {
        "baseUrl": "src",
        "paths": {
            "@store/*": ["store/*"]
        }
    }
}
    ;

export default nextConfig;