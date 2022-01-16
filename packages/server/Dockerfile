# Name the node stage "builder"
FROM node:16 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm i

CMD ["npm", "run", "start"]