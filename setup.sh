git clone https://github.com/not-duckie/strapiproject.git /root/strapiproject
cd /root/strapiproject/
npm install
npm i strapi -g
/etc/init.d/mysql start
echo "use mysql" | mysql -u root
echo 'update user set password=PASSWORD("M@y@nk250199") where User="root";' | mysql -u root mysql
echo 'update user set plugin="mysql_native_password";' | mysql -u root --password=M@y@nk250199 mysql
/etc/init.d/mysql stop
/etc/init.d/mysql start
echo "create database teacher;" | mysql -u root --password=M@y@nk250199
cd server_side
npm install
strapi build
