# import 
import boto3
from boto3.dynamodb.conditions import Key 

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')   

# set table
    table = dynamodb.Table('Tasks')
    tasks = table.query(KeyConditionExpression=Key('Task').eq('Task'))
    return {
        'statusCode': 200,
        'body': tasks["Items"]
    }

result = lambda_handler(None, None) 
print(result)