import * as cdk from "aws-cdk-lib";
import { Fn, CfnOutput } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class PhotosStack extends cdk.Stack {
  private stackSuffix: string;
  public readonly photosBucketArn: string;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.initializeSuffix();
    const photosBucket = new Bucket(this, "PhotosBucket", {
      bucketName: `photos-bucket-${this.stackSuffix}`,
    });
    this.photosBucketArn = photosBucket.bucketArn;

    // new CfnOutput(this,'photos-bucket',{
    //     value:photosBucket.bucketArn,
    //     exportName:'photos-bucket'
    // })
  }

  // stackId:arn:aws:cloudformation:us-east-1:996260863731:stack/CdkPhotosStack/7d4d4eb0-343a-11ee-a071-0eef60e55b6b
  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split("/", this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split("-", shortStackId));
  }
}
