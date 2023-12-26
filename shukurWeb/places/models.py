from django.db import models

class Rec_places(models.Model):
    name=models.CharField(max_length=255)
    location=models.TextField()
    raiting=models.FloatField()
    img=models.ImageField(upload_to="photos/%Y/%m/%d/",null=True)


