# Utilisation d'une image Node.js comme base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances du backend
RUN npm install

# Copier le reste des fichiers du backend dans le répertoire de travail
COPY . .

# Exposer le port sur lequel l'API va écouter
EXPOSE 3000

# Commande de démarrage de l'API
CMD [ "node", "api.js" ]
