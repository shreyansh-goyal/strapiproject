#!/bin/bash
/etc/init.d/mysql start
cd /root/strapiproject/server_side && strapi start
