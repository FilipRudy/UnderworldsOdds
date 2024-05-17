# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory
VOLUME /tmp
ARG JAR_FILE

# Copy the packaged Spring Boot jar into the container
COPY spring-boot-library-0.0.1-SNAPSHOT.jar app.jar


# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]