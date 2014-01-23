# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  
  # image
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.hostname = "orp-sdk-node"

  # port forwarding - frontend
  config.vm.network :forwarded_port, guest: 8080, host: 8080
  # config.vm.network :forwarded_port, guest: 443, host: 8443

$script = <<SCRIPT
NODE_VERSION="v0.10.24"
apt-get update 
apt-get install -y build-essential
wget http://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}.tar.gz 
tar -zxf node-${NODE_VERSION}.tar.gz
cd node-${NODE_VERSION}
./configure && make && sudo make install
SCRIPT

  config.vm.provision "shell", inline: $script

end
