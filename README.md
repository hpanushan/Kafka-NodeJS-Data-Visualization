# Kafka NodeJS Data Visualization

This NodeJS application can read Kafka messages under JSON and CSV formats and pass data values to data visualization by using WebSocket protocol. 

## Features

- Interactive data visualization
- Handling multiple client interactions

## Installation
### NodeJS
This application requires NodeJS and some its libraries as follows.
- kafka-node
- express
- socket.io 

Install NodeJS and its dependencies and start the server. This example shows in CentOS based environment. 

1. Install development tools to build
```sh
sudo yum install -y gcc-c++ make
```

2. Install native add-ons (can change NodeJS version)
```sh
sudo curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
```

3. Install NodeJS
```sh
sudo yum install nodejs
```

4. Check successfull NodeJS installation
```sh
sudo node -v
```

5. Check successfull NPM installation
```sh
sudo npm -v
```

### Dependencies
Install all NodeJS dependencies
```sh
sudo npm install kafka-node
sudo npm install express
sudo npm install socket.io
```

## Start WebSocket Server and Client

#### Start WebSocket Server
Starting websocket server.
Additionally, you may need to change kafka client details in server_consumer.js before starting the websocket server. 

```sh
sudo node server_consumer.js
```

#### Start WebSocket Client

Open index.html by using Websocket protocol supported browser. 
Additionally, you may need to change websocket server details in index.js file. 

#### Data visualization

Here data are visualized with Chart.js library.

## License

