from django.db import models


class Rewiev(models.Model):
    name = models.CharField(max_length=255)
    number = models.CharField(max_length=8)
    product_name = models.CharField(max_length=255)
    coments = models.TextField()


