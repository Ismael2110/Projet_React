# On va utiliser une image docker qui dispose deja de nodejs et npm
FROM node/node

# On copie tout le contenu du dossier vers /
COPY . /

# On se positionne à la racine
WORKDIR /

# 
RUN npm start
