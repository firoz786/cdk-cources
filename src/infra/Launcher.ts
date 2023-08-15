import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { ApiStack } from "./stacks/ApiStack";

const app = new App();
const dataStack = new DataStack(app, "DataStack");

//here in below lines we are making dependency of one to other . ApiStack dependend on Lambda.
const lambdaStack = new LambdaStack(app,'LambdaStack',{
    spacesTable: dataStack.spacesTable
});
new ApiStack(app,'ApiStack',{
    helloLambdaIntegration: lambdaStack.helloLambdaIntegration
})