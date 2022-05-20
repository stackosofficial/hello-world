# => Build container
FROM node:17-alpine as builder
RUN apk add g++ make 
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build
# => Run container
FROM nginx:1.15.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html

# Add bash
RUN apk add --no-cache bash


# Start Nginx server
CMD ["/bin/sh", "-c", nginx -g \"daemon off;\""]
