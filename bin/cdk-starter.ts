#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStarterStack } from '../lib/cdk-starter-stack';
import { PhotosStack } from '../lib/PhotosStack';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';

const app = new cdk.App();
// new CdkStarterStack(app, 'CdkStarterStack');

const photosStack = new PhotosStack(app, 'CdkPhotosStack');
// const PhotosHandlerStack1 = new PhotosHandlerStack(app, 'PhotosHandlerStack');
const photosHandlerStack = new PhotosHandlerStack(app, 'PhotosHandlerStack',{
  targetBucketArn: photosStack.photosBucketArn
});

// Define the dependency using CfnStack
// photosHandlerStack.node.addDependency(photosStack); -- now no need to tell the dependencies 