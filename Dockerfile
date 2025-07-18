# Use a small base image
FROM alpine:latest

# Create a dummy file
RUN echo "Placeholder Docker image for Jenkins test" > /dummy.txt

CMD ["cat", "/dummy.txt"]
