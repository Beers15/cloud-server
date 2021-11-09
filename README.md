# Cloud Server

## A very basic server deployed to AWS

The server here was built with the purpose of getting practice at creating a cloud server hosted that is on a Elastic Beanstalk virtual environment.

---------

### Basic process breakdown

#### GUI
  
* Select 'create application' from EB dashboard
* Choose application name
* Choose appropriate platform type, branch, and version
* Select upload code and provide a zipped folder with server contents
* Select create app

#### EB CLI

* Create an AWS user and add them to a user group that AWS EB admin permissions
* After installing aws cli, execute 'aws configure' and enter the created user's access key id and secret access key
* Navigate to server directory in terminal and execute 'eb init' (requires eb cli installation)
* Execute 'eb create' and configure as needed
* Execute 'eb deploy' to launch server on eb virtual environment

  ^ Refer to AWS docs for details on how to properly configure these steps
  

[link to server deployed with Elastic Beanstalk Dashboard GUI](http://cloudserver-env-2.eba-fyar39np.us-east-2.elasticbeanstalk.com/)

[link to server deployed with Elastic Beanstalk CLI](http://cloud-server-cli-env.eba-dqy3mjyj.us-west-2.elasticbeanstalk.com/)