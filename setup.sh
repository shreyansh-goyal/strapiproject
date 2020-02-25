git clone https://github.com/not-duckie/strapiproject.git /root/
cd /root/strapiproject/
/etc/init.d/mysql start
echo "create database teacher;" | mysql -u root --password=M@y@nk250199
cd server_side
strapi build
strapi start
