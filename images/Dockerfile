FROM node:latest
MAINTAINER duckie
RUN apt update
RUN apt install -y mysql-server
RUN apt install -y wget 
RUN cd /opt/ && wget https://raw.githubusercontent.com/not-duckie/strapiproject/master/setup.sh && bash setup.sh
RUN cd /opt/ && wget https://raw.githubusercontent.com/not-duckie/strapiproject/master/run.sh && chmod +x run.sh
ENTRYPOINT ["/opt/run.sh"]
EXPOSE 1337:1337
EXPOSE 3306:3306
