from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email_address = models.URLField(unique=True)