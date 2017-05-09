# Dockerize node app

## node app 


  - gulp
  - sass
  - BrowserSync



Setup local development env.

 1. 安装nodejs

  - install [nodejs](https://nodejs.org/en/)
 
	安装nodejs时会一并安装npm，使用以下命令确定是否安装成功

	```
	>node -v
	>npm -v
	```

 2. clone

    >git clone https://github.com/jungleli/3week3page-boilerplate.git
  
 3. 安装npm依赖包

	```
	>cd <project-folder>
	>npm install
	```
 4. 运行项目
 
    ```
    # production env
    > NODE_ENV='production' npm start
    ```
	```
	# dev env
	>npm start
	```
 5. 打开浏览，启动：

    >http://localhost:3000
    
## Dockerize

 1. docker build -t docker/node-app .
    
    docker/node-app 为docker image名
    
 2. docker run -p 127.0.0.1:3000:3000 -p 127.0.0.1:3001:3001 -it "docker/node-app"
 
    -p 指定服务映射端口  -p 本地端口:服务端口
