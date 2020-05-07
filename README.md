# Virtual Comics App
Virtual comics app is a static website create to test AWS CI/CD capabilities and services. 

## Start Here (Local)

```
$ npm install && npm run start
```

## CI/CD
Continuous Integration and Continuous Delivery / Deployment is a set of good practices to speed up the development, 
assure quality standards in software delivery and automate the test, build, deployment steps for production ready 
environments.  

I recommend [AWS CI CD](https://d0.awsstatic.com/whitepapers/DevOps/practicing-continuous-integration-continuous-delivery-on-AWS.pdf) white paper to get a better understanding of the approach of this practices and why to use AWS services
to comply with this good practices.

## Tools

In this project I used AWS CodePipeline which helps me with a webhook between Github repository and the pipeline itself.
Afterwards CodePipeline utilizes other AWS services to fulfill the CI CD. 
In this project you can take a look to the ````buildspec.yml```` which tells AWS CodeBuild the steps to follow. 
 
