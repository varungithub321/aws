# import 
import boto3
from boto3.dynamodb.conditions import Key 

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')   

# set table
    table = dynamodb.Table('Users')
    contact = {
        'Type': 'Contact',
        'Name': 'User1',
        'PhoneNumber': '1234567898',
        'Email': 'abc@xyz.com'

    }
    table.put_item(Item = contact)

lambda_handler(None, None)