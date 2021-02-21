git clone https://github.com/shreyansh-goyal/strapiproject.git /root/strapiproject
cd /root/strapiproject/server_side
npm install
npm i strapi -g
/etc/init.d/mysql start
echo "use mysql" | mysql -u root
echo "CREATE USER 'admin'@'localhost' IDENTIFIED BY 'shreyanshgoyal';" | mysql -u root
echo 'update user set password=PASSWORD("shreyanshgoyal") where User="admin";' | mysql -u root mysql
echo 'update user set plugin="mysql_native_password";' | mysql -u admin --password=shreyanshgoyal mysql
/etc/init.d/mysql stop
/etc/init.d/mysql start
echo "create database strapi;" | mysql -u admin --password=shreyanshgoyal
npm install
strapi build
