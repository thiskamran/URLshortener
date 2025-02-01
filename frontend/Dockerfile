FROM node:16-alpine

WORKDIR /frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

EXPOSE 3000

# Start the app
CMD ["npm", "start"]