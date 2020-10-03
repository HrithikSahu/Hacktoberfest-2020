# Getting started with docker

To run this example open up ur bash/Docker toolbox terminal(for windows), "pwd or cd" to this project directory and run the following commands.

Note - make sure u have docker install on ur computer

`docker build --tag docker_ex`

`docker run -it -p 80:80 docker_ex`

Now, visit to http://localhost:80 (for mac and linux) and http://[YOUR_IP_ADDRESS]:80 (for windows)

stop the server with -
`docker stop docker_ex`
