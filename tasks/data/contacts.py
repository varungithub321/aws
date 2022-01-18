# import 
import boto3
from boto3.dynamodb.conditions import Key 

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')   

# set table
    table = dynamodb.Table('Users')
    contacts = table.query(KeyConditionExpression=Key('Type').eq('Contact'))
    return {
        'statusCode': 200,
        'body': contacts["Items"]
    }

result = lambda_handler(None, None) 
print(result)