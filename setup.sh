git clone https://github.com/not-duckie/strapiproject.git /root/strapiproject
cd /root/strapiproject/
npm install
/etc/init.d/mysql start
echo "create database teacher;" | mysql -u root --password=M@y@nk250199
cd server_side
npm install
strapi build
strapi start
